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
      await api.send('new_game', null);
      commit('setGameField');
      router.push('/game');
    } catch (e) {
      console.log(e);
      commit('addNotification', e.reason.toString());
    }
  },
  handleReceiveMessage({ dispatch }, event, data) {
    console.log(event, data);
  },
};

export default actions;