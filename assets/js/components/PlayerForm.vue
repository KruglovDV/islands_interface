<template>
<div>
  <input name="name" type="text" v-model="name" />
  <button
    @click="savePlayer"
    :disabled="name.length === 0"
  >
    Save
  </button>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    savePlayer(e) {
      console.log(this.name)
    }
  }
}
</script>