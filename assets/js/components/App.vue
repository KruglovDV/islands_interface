<template>
  <div class="islandsApp">
    <Notifications />
    <div class="islandsLinks">
      <div class="islandsLinkContainer">
        <router-link to="/settings">Settings</router-link>
      </div>
      <div class="islandsLinkContainer">
        <router-link to="/newGame">New game</router-link>
      </div>
      <div class="islandsLinkContainer">
        <router-link to="/joinGame">Join game</router-link>
      </div>
    </div>
    <div class="islandsView">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Notifications from './Notifications.vue';

export default {
  components: {
    Notifications
  }
};
</script>

<style>
  .islandsApp {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  .islandsView {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .islandsLinks {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .islandsView {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }

  .islandsLinkContainer {
    margin-right: 8px;
  }

  .islandsForm {
    display: flex;
    align-items: center;
  }
  .islandsForm input {
    margin: 0;
  }
  .islandsForm button {
    margin-left: 8px;
    margin-bottom: 0;
  }
</style>