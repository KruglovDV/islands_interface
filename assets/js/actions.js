import router from './routes';
import api from './api';

const actions = {
  async startGame({ state, dispatch, commit }, gameName) {
    try {
      await api.createCame(
        gameName,
        state.playerName,
        (event, data) => dispatch('handleReceiveMessage', event, data),
      );
      api.send(
        'new_game',
        null,
        () => router.push('/game'),
        (e) => {
          console.log(e);
          commit('addNotification', 'Error can\'t create game!');
        },
      )
    } catch (e) {
      console.log(e);
      commit('addNotification', 'Error unable to connect!');
    }
  },
  handleReceiveMessage({ dispatch }, event, data) {
    console.log(event, data);
  },
};

export default actions;