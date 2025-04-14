<template>
  <div class="collapse-item">
    <div class="header" @click="toggle">
      <slot name="header"></slot>
    </div>
    <transition name="collapse">
      <div v-show="isOpen" class="content">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.collapse-item {
  margin: 10px 0;
}
.header {
  cursor: pointer;
  padding: 10px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
}
.content {
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.collapse-enter-active, .collapse-leave-active {
  transition: opacity 0.3s ease;
}
.collapse-enter, .collapse-leave-to {
  opacity: 0;
}
</style>