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
                <h2 class="section-slogan h2">欢迎光临我的博客</h2>
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
          <section class="section-magic-ring section-start">
            <div class="sticky-wrapper">
              <div class="sticky-content section-row">
                <div class="section-wrapper">
                  <Ellipse></Ellipse>
                  <h2
                    class="section-headline will-show"
                    style="
                      margin-top: 0.520833vw;
                      font-size: 3.333333vw;
                      color: rgb(0, 0, 0, 0.8);
                      opacity: 0;
                    "
                  >
                    MagicRing 信任环
                  </h2>
                  <p
                    class="section-subhead will-show1"
                    style="
                      margin-top: 1.041667vw;
                      font-size: 2.5vw;
                      color: rgb(0, 0, 0, 0.8);
                      opacity: 0;
                    "
                  >
                    智慧互联 再无界
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-connect-1 section-layout-connect">
            <div class="section-content-connect fade-copy fade-trigger">
              <h2 class="section-headline nowrap">
                三指上滑
                <br />
                万物互联
              </h2>
              <p class="section-intro">
                进入控制中心，三指上滑，拖动图标触碰周围的荣耀设备，一步开展多设备协同；
                <br />
                在App里，以上述相同操作，还可实现应用数据流转1。
              </p>
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

  import Ellipse from '../components/ellipse.vue'

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

  gsap.registerEffect({
    name: 'tech4',
    extendTimeline: true,
    effect: function (targets) {
      let tl = gsap
        .timeline()
        // 整个svg从放大效果回到正常
        .from(targets[0], {
          duration: 0.5,
          scale: 5,
          yPercent: 20
        }) // 标题逐渐显示
        .to(targets[1], {
          duration: 0.5,
          opacity: 1
        }) // 副标题从下向上滚动
        .fromTo(
          targets[2],
          {
            y: 60
          },
          {
            y: 0,
            opacity: 1
          }
        )
      return tl
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

  const triggerEllipse = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.magic-svg',
          start: 'top 60%',
          end: 'bottom 100%',
          scrub: 0.5
        }
      })
      // 让ellipse实现描边
      .to('.magic-path', {
        strokeDasharray: '0% 0% 220%'
      })
      // 让中心圆圈渐显
      .to('.magic-circle', {
        duration: 0.5,
        opacity: 1
      })
      // 让ellipse从细到粗渐变
      .from(
        '.magic-path',
        {
          duration: 0.5,
          stroke: '#d7a85b',
          strokeWidth: 2
        },
        '<'
      )
      .tech4(['.magic-svg', '.will-show', '.will-show1'], '<')
  }

  onMounted(() => {
    gsap.timeline().rainbow('.h2')
    triggerFn()
    triggerEllipse()
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
          .section-start {
            position: relative;
            z-index: 2;
            text-align: center;
            height: 100%;
            .sticky-wrapper {
              height: 200vh;
              position: relative;
              z-index: 1;
              .sticky-content {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: -15%;
                overflow: hidden;
                width: 100%;
                height: calc(100vh - 65px);
                .section-wrapper {
                  translate: none;
                  rotate: none;
                  scale: none;
                  transform: translate(0px, 0px);
                }
              }
            }
          }
          .section-connect-1 {
            position: relative;
            z-index: 1;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            .section-content-connect {
              display: flex;
              align-items: center;
              width: 54.1667vw;
              margin-right: auto;
              margin-left: auto;
              box-sizing: border-box;
              .section-headline {
                font-size: 2.5vw;
                white-space: nowrap;
              }
              .section-intro {
                display: block;
                margin-left: 3.125vw;
                color: rgb(0, 0, 0, 0.5);
                font-size: 0.9375vw;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-end: 0px;
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
