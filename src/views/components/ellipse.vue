<template>
  <svg
    class="magic-svg"
    width="162px"
    height="146px"
    viewBox="0 0 162 146"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="translate: none; rotate: none; scale: none"
  >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-1536.000000, -479.000000)">
        <g transform="translate(1542.400000, 483.800000)">
          <ellipse
            class="magic-path"
            stroke="#000000"
            stroke-width="8"
            stroke-dasharray="0 220% 0"
            transform="translate(74.844732, 68.400000) rotate(-240.000000) translate(-74.844732, -68.400000)"
            cx="74.8447318"
            cy="68.4"
            rx="31.5406825"
            ry="68.2132305"
          ></ellipse>
          <ellipse
            class="magic-path"
            stroke="#000000"
            stroke-width="8"
            stroke-dasharray="0 220% 0"
            cx="74.8447318"
            cy="68.4"
            rx="31.4542843"
            ry="68.4"
          ></ellipse>
          <ellipse
            class="magic-path"
            stroke="#000000"
            stroke-width="8"
            transform="translate(74.844732, 68.400000) rotate(-300.000000) translate(-74.844732, -68.400000)"
            stroke-dasharray="0 220% 0"
            cx="74.8447318"
            cy="68.4"
            rx="31.5406825"
            ry="68.2132305"
          ></ellipse>
          <ellipse
            class="magic-circle"
            fill="#D7A85B"
            cx="74.8447318"
            cy="68.4"
            rx="10.4847614"
            ry="10.5230769"
            opacity="0"
          ></ellipse>
        </g>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
  ellipse {
    animation: magic 2s linear;
    animation-fill-mode: both;
    animation-delay: 3s;
  }
  // @keyframes magic {
  //   0% {
  //     stroke-dasharray: 0 220% 0;
  //   }
  //   100% {
  //     // 如果写成220% 0% 0%就是顺时针
  //     stroke-dasharray: 0% 0% 220%;
  //   }
  // }
</style>
