<template>
  <div class="container" ref="container">
    <div class="overlay" ref="overlay"><h1 ref="text" class="text">ANIMVTION</h1></div>
  </div>
</template>

<script setup lang="ts">
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const text = ref<any>(null)
  const overlay = ref<any>(null)

  const triggerEllipse = () => {
    // 你也可以将 scale 动画改为 font-size 动画
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.container',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: true,
          snap: 20
        }
      })
      .to(overlay.value, {
        opacity: 1
      })
      .to(text.value, {
        fontSize: '12vw',
        color: '#fff'
      })
  }
  onMounted(() => {
    triggerEllipse()
  })
</script>
<style lang="less" scoped>
  .container {
    height: 100vh;
    overflow: hidden;
    color: #fff;
    background: #000;
    font-family: 'Open Sans', sans-serif;
    background: url('https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FheroKeyArt.acb9b343.jpg&w=3840&q=100')
      no-repeat center/cover;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
  }
  h1 {
    margin: 0 !important;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 300vw;
    background: url('https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FheroKeyArt.acb9b343.jpg&w=3840&q=100')
      no-repeat center/cover;
    background-clip: text;
    color: transparent;
    opacity: 1;
  }
</style>
