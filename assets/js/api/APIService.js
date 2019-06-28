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
    channel.join()
      .receive('ok', (response) => {
        console.log('Joined successfully!', response);
      })
      .receive('error', (response) => {
        console.log('Unable to join', response);
      });
    this.gameChannelSubscribe(
      channel,
      messageHandler,
      handleReceiveMessage,
    );
    this.channel = channel;
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

  createCame = (player, handleReceiveMessage) => {
    this.init(this.socket, player, player, handleReceiveMessage);
  }

  joinGame = (game, player, handleReceiveMessage) => {
    this.init(this.socket, game, player, handleReceiveMessage);
  }

  send = (message, data, handleOk, handleError) => {
    this.channel.push(message, data)
      .receive('ok', handleOk)
      .receive('error', handleError);
  }

  gameChannelSubscribe = (channel, handleReceiveMessage) => {
    this.events.forEach((event) => {
      channel.on(event, (message) => handleReceiveMessage(event, message));
    });
  }
}

const socket = new Socket('/socket', {});

const api = new APIService(socket);