<template>
  <div class="container">
    <a-tooltip title="AI小助手" placement="left" destroyTooltipOnHide>
      <div class="chat_icon" :class="visible ? 'active' : 'noActive'" @click="openModal"></div>
    </a-tooltip>
    <ai-container :visible="visible" @close="close"></ai-container>
  </div>
</template>

<script setup>
  import AiContainer from './components/AiContainer.vue'

  const visible = ref(true)

  const openModal = () => {
    visible.value = false
  }
  const close = () => {
    visible.value = true
  }
</script>
<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
  }
  .chat_icon {
    width: 50px;
    height: 50px;
    background: rgb(13, 139, 205);
    border-radius: 100%;
    position: fixed;
    bottom: 12px;
    right: 24px;
    cursor: pointer;
    z-index: 999;
    transition: opacity 0.2s linear;
  }
  .active {
    opacity: 1;
    visibility: visible;
  }
  .noActive {
    opacity: 0;
    visibility: hidden;
  }
</style>
