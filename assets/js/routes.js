import VueRouter from 'vue-router';
import NewGame from './components/NewGame.vue';
import SettingsForm from './components/SettingsForm.vue';

const routes = [
  { path: '/newGame', component: NewGame },
  { path: '/settings', component: SettingsForm },
];

export default new VueRouter({ routes });