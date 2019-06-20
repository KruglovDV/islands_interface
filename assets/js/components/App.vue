<template>
  <div id="mainComponent">
    <PlayerForm />
  </div>
</template>

<script>
import PlayerForm from './PlayerForm.vue';

export default {
  name: 'mainComponent',
  components: {
    PlayerForm,
  }
};
</script>