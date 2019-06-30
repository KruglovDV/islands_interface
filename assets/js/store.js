import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    playerName: 'testUser',
    gameName: 'testGame',
    notifications: [],
  },
  mutations,
  actions,
});

export default store;
