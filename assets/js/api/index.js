import axios from 'axios';
import { Socket } from 'phoenix';

class APIService {
  constructor(socket) {
    this.socket = socket;
    this.events = [
      'player_added',
      'player_set_islands',
      'player_guessed_coordinate',
      'subscribers',
    ];
  }

  init = (socket, subtopic, player, handleReceiveMessage) => {
    socket.connect();
    const channel = socket.channel(
      `game:${subtopic}`,
      { screen_name: player },
    );
    return new Promise((resolve, reject) => {
      channel.join()
      .receive('ok', (response) => {
        console.log('Joined successfully!', response);
        this.gameChannelSubscribe(
          channel,
          handleReceiveMessage,
        );
        this.channel = channel;
        resolve(response);
      })
      .receive('error', (response) => {
        console.log('Unable to join', response);
        reject(response);
      });
    });
  }

  leave = () => {
    if (!this.channel) {
      console.log('There is no created channels');
      return;
    }
    this.channel.leave()
      .on('ok', () => console.log('Left successfully'))
      .on('error', () => console.log('Unable to leave'));
  }

  createCame = (game, player, handleReceiveMessage) => {
    return this.init(this.socket, game, player, handleReceiveMessage);
  }

  joinGame = (game, player, handleReceiveMessage) => {
    return this.init(this.socket, game, player, handleReceiveMessage);
  }

  send = (message, data) => {
    return new Promise((resolve, reject) => {
      this.channel.push(message, data)
      .receive('ok', (res) => resolve(res))
      .receive('error', (err) => reject(err));
    });
  }

  gameChannelSubscribe = (channel, handleReceiveMessage) => {
    this.events.forEach((event) => {
      channel.on(event, (message) => handleReceiveMessage(event, message));
    });
  }
}

const socket = new Socket('/socket', {});

const api = new APIService(socket);

export default api;