import VueRouter from 'vue-router';
import NewGame from './components/NewGame.vue';
import SettingsForm from './components/SettingsForm.vue';
import JoinGame from './components/JoinGame.vue';

const routes = [
  { path: '/newGame', component: NewGame },
  { path: '/settings', component: SettingsForm },
  { path: '/joinGame', component: JoinGame },
];

export default new VueRouter({ routes });