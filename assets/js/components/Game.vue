<template>
  <div class="game">
    <div class="field">
      <div
        v-for="coordinate in gameField"
      >
        <Square :coordinate="coordinate" />
      </div>
    </div>
  </div>
</template>

<script>
import Square from './Square.vue';
import { mapState } from 'vuex';

export default {
  computed: mapState(['gameField']),
  components: {
    Square,
  },
};
</script>
<style scoped>
.game {
  height: calc(100vh - 50px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.field {
  width: 401px;
  height: 401px;
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid black;
  border-top: 1px solid black;
}
</style>
