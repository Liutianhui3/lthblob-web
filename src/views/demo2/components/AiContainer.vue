<template>
  <div class="chat_container" :class="isShow ? 'active' : 'noActive'">
    <div class="header">
      <div>业务解读</div>
      <CloseOutlined class="close" @click="close" />
    </div>
    <div class="content" ref="contentRef">
      <template v-for="(item, index) in list" :key="item.data.key + index">
        <Bubble
          v-if="item.role != 'ai'"
          placement="end"
          :content="item.data?.text"
          :styles="{
            content: {
              color: '#fff',
              background: '#514DEF',
              padding: '12px 16px'
            }
          }"
        />

        <Bubble
          v-else
          :loading="loadingAsync"
          :typing="true"
          :content="item.data?.text"
          :messageRender="renderMarkdown"
          :styles="{
            content: {
              overflow: 'auto'
            }
          }"
          :onTypingComplete="typeRender"
        >
          <template #footer>
            <a-space v-if="!isTying">
              <a-button type="text" size="small" :icon="h(CopyOutlined)" />
              <a-button type="text" size="small" :icon="h(SyncOutlined)" />
              <a-button type="text" size="small" :icon="h(StarOutlined)" />
            </a-space>
          </template>
        </Bubble>
      </template>
      <Prompts
        v-if="questions.length"
        :items="questions"
        vertical
        classNames="promtsItems"
        :styles="{
          item: {
            padding: '12px 16px',
            backgroundColor: 'rgba(0, 0, 0, 0.06)',
            border: 'none'
          }
        }"
        :onItemClick="click"
      >
        <template #title>
          <span style="font-size: 14px">猜你想问：</span>
        </template>
      </Prompts>
      <div ref="bodyRef" class="scroll-target"></div>
    </div>
    <div class="footer">
      <Sender
        v-model:value="value"
        :loading="loading"
        :disabled="questions.length == 0"
        :auto-size="{ minRows: 2, maxRows: 6 }"
        rootClassName="sender"
        :onSubmit="handleSubmit"
      >
        <template
          #actions="{
            info: {
              components: { SendButton, LoadingButton }
            }
          }"
        >
          <component v-if="loading" :is="LoadingButton" />
          <component
            v-else
            :is="SendButton"
            type="text"
            shape="default"
            :icon="h(SendOutlined)"
            :style="{}"
          />
        </template>
      </Sender>
    </div>
  </div>
</template>

<script setup>
  import {
    CopyOutlined,
    SyncOutlined,
    StarOutlined,
    CloseOutlined,
    SendOutlined
  } from '@ant-design/icons-vue'
  import { Prompts, Sender, Bubble } from 'ant-design-x-vue'
  import { h } from 'vue'
  import { RecycleScroller } from 'vue-virtual-scroller'
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
  import { Typography } from 'ant-design-vue'
  // 导入 marked.js
  import { marked } from 'marked'

  let intervalId = null // 用于存储 setInterval 的 ID
  const autoScrollEnabled = ref(true) // 控制自动滚动的状态

  // 启动自动滚动定时器
  const startAutoScroll = () => {
    if (intervalId === null) {
      // 避免重复启动
      intervalId = setInterval(() => {
        console.log('定时器触发，尝试滚动...')
        scrollToBottom()
        // 也可以在这里添加新消息，模拟实时数据流
        // addMessage();
      }, 2000) // 每隔 2 秒
      autoScrollEnabled.value = true
      console.log('自动滚动已启动。')
    }
  }

  // 停止自动滚动定时器
  const stopAutoScroll = () => {
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
      autoScrollEnabled.value = false
      console.log('自动滚动已停止。')
    }
  }

  // 组件挂载后，启动自动滚动
  onMounted(() => {
    startAutoScroll() // 默认启动自动滚动
  })

  // 组件卸载前，清除定时器，防止内存泄漏
  onUnmounted(() => {
    stopAutoScroll() // 确保组件销毁时清除定时器
    console.log('组件已卸载，定时器已清除。')
  })

  const props = defineProps({
    visible: {
      type: Boolean,
      default: () => false
    }
  })

  const emits = defineEmits(['close'])

  const bodyRef = ref()
  const contentRef = ref()
  const isTying = ref(false)

  const isShow = ref(false)
  const value = ref(null)
  const loading = ref(false)
  const loadingAsync = ref(false)
  const list = ref([])
  const lastScrollTop = ref(0)
  const isScroll = ref(false)
  const userRef = ref(null)

  const questions = ref([
    {
      key: '1',
      description: '示例问题1',
      disabled: false
    },
    {
      key: '2',
      description: '示例问题2',
      disabled: false
    },
    {
      key: '3',
      description: '示例问题3',
      disabled: false
    }
  ])

  const renderMarkdown = content => {
    return h(Typography, null, {
      default: () => h('div', { innerHTML: marked(content) })
    })
  }

  const close = () => {
    emits('close')
  }

  const handleSubmit = msg => {
    loadingAsync.value = true
    list.value.push({
      question: { key: '2', text: msg },
      renderHtml: '',
      content: '',
      contentShow: true,
      isEnd: false,
      collectId: '',
      reqId: ''
    })
    value.value = null
  }

  const scrollToBottom = () => {
    // 确保DOM已经更新后再进行滚动
    nextTick(() => {
      if (bodyRef.value) {
        bodyRef.value.scrollIntoView({
          behavior: 'smooth', // 关键：实现平滑滚动
          block: 'end' // 将目标元素的底部与可滚动区域的底部对齐
        })
      }
    })
  }

  const click = obj => {
    questions.value = []
    isTying.value = true
    loadingAsync.value = true
    questions.value = questions.value.map(v => {
      return {
        ...v,
        disabled: true
      }
    })
    list.value.push({
      data: {
        key: obj.data?.key,
        text: obj.data?.description
      },
      role: 'user',
      renderHtml: '',
      content: '',
      contentShow: true,
      isEnd: false,
      collectId: '',
      reqId: ''
    })
    list.value.push({
      data: {
        key: list.value.length + 1 + '',
        text: markdown
      },
      role: 'ai',
      renderHtml: '',
      content: '',
      contentShow: true,
      isEnd: false,
      collectId: '',
      reqId: ''
    })
    loadingAsync.value = false
  }

  const typeRender = () => {
    isTying.value = false
    questions.value = [
      {
        key: '1',
        description: '示例问题1',
        disabled: false
      },
      {
        key: '2',
        description: '示例问题2',
        disabled: false
      },
      {
        key: '3',
        description: '示例问题3',
        disabled: false
      }
    ]
  }

  const markdown = `
  # 欢迎使用 Markdown 转 HTML

  这是一个简单的示例，展示了如何将 Markdown 文本转换为 HTML。

  ### 表格
  <table border="1">
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>
  `

  watch(
    () => props.visible,
    newVal => {
      if (newVal) {
        isShow.value = false
      } else {
        isShow.value = true
      }
    },
    { immediate: true }
  )
</script>
<style lang="less" scoped>
  .chat_container {
    background: #fff;
    width: 380px;
    min-height: 600px;
    max-height: calc(100% - 10px);
    height: auto;
    transform: none;
    position: fixed;
    right: 0px;
    bottom: 10px;
    transition: 0.2s linear;
    transition-property: visibility, opacity;
    backface-visibility: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
      height: 40px;
      width: 100%;
      padding: 0 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ddd;
      flex-shrink: 0;
      .close {
        cursor: pointer;
        font-size: 12px;
      }
    }
    .content {
      width: 100%;
      padding: 16px;
      flex: 1;
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .footer {
      width: 100%;
      padding: 12px;
      flex-shrink: 0;
    }
  }
  .active {
    opacity: 1;
    visibility: visible;
    z-index: 999;
  }
  .noActive {
    z-index: 0;
    visibility: hidden;
    opacity: 0;
  }

  .sender {
    border: none;
    box-shadow: none;
    background: #ddd;
  }

  .question {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    padding-left: 46px;
    box-sizing: border-box;

    &-text {
      border-radius: 8px 0px 8px 8px;
      padding: 12px;
      background: #514def;
      color: #ffffff;
      word-break: break-all;
      line-height: 1.5;
    }
  }

  .content {
    border-radius: 0px 8px 8px 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
  }
  .scroll-target {
    /* 辅助元素，可以不需要任何样式，或者设置很小的尺寸 */
    height: 0px;
    width: 100%;
  }
  :deep(.ant-sender-actions-btn-loading-icon) {
    color: #514def;
  }

  :deep(:where(.css-dev-only-do-not-override-1p3hq3p).ant-btn-primary:not(:disabled):hover) {
    color: #514def !important;
  }
</style>
