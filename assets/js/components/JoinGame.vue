<template>
    <div class="islandsForm">
    <input
      name="joinGame"
      type="text"
      v-model="joinGame"
      placeholder="Name of game"
    >
    <button
      @click.prevent="handleJoinGame"
    >
      Join game
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { joinGame: '' };
  },
  methods: {
    handleJoinGame() {
      console.log('handle join game click');
    },
  },
};
</script>