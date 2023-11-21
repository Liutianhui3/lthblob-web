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
          <section class="section-tvc">
            <div class="section-video-wrapper aspect-ratio">
              <div class="section-inline-video">
                <video autoplay loop playsinline>
                  <source type="video/mp4" src="@/assets/videos/section2.mp4" />
                </video>
              </div>
            </div>
          </section>
          <section class="section-magic">
            <div class="section-wrapper">
              <div class="section-headline fade-copy fade-trigger">4大技术加持 共筑新体验</div>
              <div class="section-content fade-copy fade-trigger">
                <div class="section-item">
                  <img class="section-icon" src="@/assets/images/icon-magic-ring.svg" alt="" />
                  <h3 class="section-headline-reduced">MagicRing 信任环</h3>
                  <p class="section-intro">跨系统可信互联</p>
                </div>
                <div class="section-item">
                  <img class="section-icon" src="@/assets/images/icon-magic-ring.svg" alt="" />
                  <h3 class="section-headline-reduced">Magic Live 智慧引擎</h3>
                  <p class="section-intro">平台级AI能力</p>
                </div>
                <div class="section-item">
                  <img class="section-icon" src="@/assets/images/icon-magic-ring.svg" alt="" />
                  <h3 class="section-headline-reduced">Turbo X 系统引擎</h3>
                  <p class="section-intro">内核级底层性能增强</p>
                </div>
                <div class="section-item">
                  <img class="section-icon" src="@/assets/images/icon-magic-ring.svg" alt="" />
                  <h3 class="section-headline-reduced">MagicGuard 荣耀安全</h3>
                  <p class="section-intro">三重安全防护体系</p>
                </div>
              </div>
            </div>
          </section>
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
              start: 'top 0%', // 元素顶部进入视口80%时触发动画
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

  const triggerFn = () => {
    const triggerList = document.querySelectorAll('.fade-trigger')
    triggerList.forEach(item => {
      const hook = item.getAttribute('data-hook') || '70%'
      gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top ' + hook,
          toggleClass: 'active'
          // markers: true,
        }
      })
    })
  }

  onMounted(() => {
    gsap.timeline().rainbow('h2')
    triggerFn()
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
            width: 100%;
            position: relative;
            z-index: 1;
            background: #fff;
            .section-video-wrapper {
              width: 100%;
              position: relative;
              padding-bottom: 56.25%;
              .section-inline-video {
                overflow: hidden;
                line-height: 0;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
                video {
                  width: 100%;
                  max-width: 100%;
                  display: inline-block;
                  object-fit: contain;
                  overflow-clip-margin: content-box;
                  overflow: clip;
                }
              }
            }
          }
          .section-dark {
            background: #000;
            color: #fff;
          }
          .section-magic {
            position: relative;
            z-index: 1;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            text-align: center;
            .section-wrapper {
              .section-headline {
                width: 100%;
                font-size: 2.5vw;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.8) !important;
                font-weight: 400;
              }
              .section-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                width: 100%;
                margin-top: 7.291667vw;
                .section-item {
                  position: relative;
                  padding: 0 3.333333vw;
                  .section-icon {
                    width: 5.20833vw;
                    height: auto;
                  }
                  .section-headline-reduced {
                    font-size: 1.666667vw;
                    margin: 0;
                    line-height: 1.2;
                    color: rgba(0, 0, 0, 0.8);
                    font-weight: 500;
                    font-family: HYQiHei70S !important;
                  }
                  .section-intro {
                    font-size: 0.9375vw;
                    margin-top: 1.041667vw;
                    color: rgba(0, 0, 0, 0.5);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .fade-copy {
    transition:
      opacity 0.5s,
      transform 0.5s;
    transform: translateY(50px);
    opacity: 0;
    &.active {
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>
