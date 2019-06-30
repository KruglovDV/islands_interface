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
  }
}

export default mutations;
