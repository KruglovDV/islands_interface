import { generateGameField } from './utils';

const mutations =  {
    setPlayerName(state, name) {
    state.playerName = name;
  },
  addNotification(state, text) {
    const newNotification = {
      id: _.uniqueId(),
      text,
    };
    state.notifications = [
      ...state.notifications,
      newNotification,
    ];
  },
  removeNotification(state, id) {
    state.notifications = _.reject(state.notifications, { id });
  },
  setGameField(state) {
    state.gameField = generateGameField();
  }
}

export default mutations;
