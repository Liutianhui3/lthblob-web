<template>
  <div class="container">
    <div class="honor">
      <div class="header-comp">
        <div class="header">
          <div class="header-v4"></div>
        </div>
      </div>
      <div class="content">
        <div class="main magic-os">
          <section class="section-hero section-dark section-row animated">
            <div class="section-wrapper">
              <div class="banner-img_box">
                <img src="@/assets/images/kv.5edbc295.png" class="banner-img" alt="" />
              </div>
              <div class="section-magic-os">
                <h2 class="section-slogan">欢迎光临我的博客</h2>
              </div>
            </div>
          </section>
          <section class="section-tvc"></section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { SplitText } from '@/utils/splitText'

  gsap.registerPlugin(ScrollTrigger)

  // 注册
  gsap.registerEffect({
    name: 'rainbow',
    extendTimeline: true,
    effect: target => {
      target.map(col => {
        const text = col
        const split = new SplitText(text)
        return gsap
          .timeline({
            scrollTrigger: {
              start: 'top80%', // 元素顶部进入视口80%时触发动画
              toggleActions: 'play none none reverse'
            }
          })
          .fromTo(
            split.chars,
            {
              y: 0,
              opacity: 1
            },
            {
              y: 60,
              opacity: 0
            }
          )
      })
    }
  })

  onMounted(() => {
    gsap.timeline().rainbow('h2')
  })
</script>
<style lang="less" scoped>
  .container {
    position: relative;
    min-height: 100%;
    display: block;
    width: 100%;
    .honor {
      font-family: 'HYQiHei50S';
      .header-comp {
        overflow: hidden;
        height: 100%;
        .header {
          width: 100%;
          height: 65px;
          min-width: 1200px;
          position: sticky;
          top: 0;
          z-index: 1000;
          .header-v4 {
            width: 100%;
            height: 65px;
            color: #000;
            background-color: #fff;
            border-bottom: 1px solid #ddd;
            text-align: center;
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
          }
        }
      }

      .content {
        .main {
          margin: auto;
          box-sizing: border-box;
        }
        .magic-os {
          section {
            position: relative;
            z-index: 1;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
          }
          .section-hero {
            overflow: hidden;
            height: calc(100vh - 65px);
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            box-sizing: border-box;
            .section-wrapper {
              width: 41.71875vw;
              margin: 0 auto;
              transform: translate3d(0, -60px, 0);
              transition: 1s 0.5s;
              position: relative;
              box-sizing: border-box;
              line-height: 1.6;
              padding-bottom: 41%;
              .banner-img_box {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                object-fit: contain;

                .banner-img {
                  width: 100%;
                  display: block;
                  max-width: 100%;
                }
              }
              .section-magic-os {
                position: absolute;
                right: 0;
                bottom: 2.083333vw;
                left: 0;
                text-align: center;
                font-family: 'HYQiHei50S';
                .section-slogan {
                  transform: translateZ(0);
                  opacity: 1;
                  margin-top: 1.5625vw;
                  font-size: 1.666667vw;
                  transition: 0.5s 0.5s;
                  color: #fff;
                }
              }
            }
          }
          .section-tvc {
            height: 100vh;
            width: 100%;
          }
          .section-dark {
            background: #000;
            color: #fff;
          }
        }
      }
    }
  }
</style>
