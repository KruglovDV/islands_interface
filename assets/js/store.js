import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    playerName: '',
    notifications: [],
  },
  mutations: {
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
  },
});

export default store;