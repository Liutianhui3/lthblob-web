import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { resolve } from 'path'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// 组件自动引入
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_PUBLIC_PATH,
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        // resolvers: [AntDesignVueResolver()],
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        dts: true,
        imports: ['vue', 'vue-router', 'pinia'],
        dirs: ['./src/hooks', './src/hooks/**']
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true
          })
        ]
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src')
        },
        {
          find: 'assets',
          replacement: resolve(__dirname, './src/assets')
        },
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js' // Resolve the i18n warning issue
        },
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm-bundler.js' // compile template
        }
      ],
      extensions: ['.ts', '.js']
    },
    optimizeDeps: {
      include: ['dayjs', 'lodash-es']
    },
    server: {
      host: '0.0.0.0',
      port: 8082,
      // open: false,
      proxy: {
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${path.join(__dirname, 'src/assets/styles/variable.less')}";`,
          modifyVars: {
          },
          javascriptEnabled: true
        }
      }
    },
    build: {
      minify: 'terser', // 默认值：esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%
      // 生产环境移除 console
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
} 
