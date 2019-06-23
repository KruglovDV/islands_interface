<template>
<div class="islandsForm islandsSettings">
  <input
    name="name"
    type="text"
    v-model="playerName"
    placeholder="Your name"
  />
  <button
    @click.prevent="saveName"
    :disabled="playerName.length <= 1"
  >
    save
  </button>
  </div>
</template>

<script>
export default {
  data() {
    return { playerName: this.$store.state.playerName };
  },
  methods: {
    saveName() {
      this.$store.commit('setPlayerName', this.playerName);
      this.$router.push('/');
    },
  }
}
</script>

<style scoped>
.islandsSettings {
  width: 30%;
}
</style>