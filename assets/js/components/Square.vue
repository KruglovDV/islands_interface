<template>
  <div class="square" />
</template>

<script>

export default {
  props: ['coordinate'],
};

</script>

<style scouped>
.square {
  width: 40px;
  height: 40px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  background: rgba(0, 255, 255, 0.2);
}
</style>