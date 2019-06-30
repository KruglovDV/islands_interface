<template>
  <div class="islandsForm">
    <input
      name="gameName"
      type="text"
      v-model="gameName"
      placeholder="Game name"
    >
    <button
      :disabled="gameName.length < 3"
      @click.prevent="createGame"
    >
      Create game
    </button>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return { gameName: this.$store.state.gameName };
  },
  methods: {
    createGame() {
      const isPlayerNameEmpty = _.isEmpty(this.$store.state.playerName);
      if (isPlayerNameEmpty) {
        const message = 'Insert the name';
        this.$store.commit('addNotification', message);
        this.$router.push('/settings');
        return;
      }
      this.$store.dispatch('startGame', this.gameName);
    }
  },
};
</script>
