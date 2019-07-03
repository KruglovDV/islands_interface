<template>
  <div class="islandsNotifications">
    <div
      class="islandsNotification"
      v-for="notification in notifications"
      v-bind:key="notification.id"
    >
      <div class="text">
        {{ notification.text }}
      </div>
      <div
        class="close"
        @click="removeNotification(notification.id)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState(['notifications']),
  methods: mapMutations(['removeNotification']),
}
</script>

<style scoped>
.islandsNotifications {
  position: fixed;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
}
.islandsNotification {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 400px;
  padding: 8px;
  margin-bottom: 8px;
  color: #fff;
  border-radius: 2px;
  background-color: rgb(255, 213, 87);
  font-weight: bold;
  font-size: 16px;
}
.text {
  display: flex;
  flex-wrap: wrap;
  width: 350px;
}


.close {
  position: absolute;
  right: 0;
  top: 8px;
  width: 24px;
  height: 24px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 0;
  content: ' ';
  height: 24px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>