<template>
  <div class="container">
    <div class="avatar">
      <img src="@/assets/images/avatar.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
  .container {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .avatar {
    img {
      --c1: #c02942;
      --c2: #ecd078;
      --f: 1;
      width: 200px;
      transform: scale(var(--f));
      height: 200px;
      object-fit: cover;
      transition: 0.5s;
      cursor: pointer;
      background: radial-gradient(
          circle closest-side,
          var(--c2) calc(99% - 5px),
          var(--c1) calc(100% - 5px) 99%,
          transparent
        )
        no-repeat center / calc(100% / var(--f));
      border-radius: 0 0 50%;
      outline-offset: -5px;
    }
    img:hover {
      --f: 1.35;
    }
  }
</style>
