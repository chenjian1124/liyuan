import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')

// 页面首次进入：应用挂载完成后移除预加载动画（与 logo 相关的遮罩层）
const preloaderEl = document.getElementById('app-preloader')
if (preloaderEl) {
  let removed = false
  const remove = () => {
    if (removed) return
    removed = true
    preloaderEl.remove()
  }

  // 给浏览器一帧时间，确保首屏已渲染，再执行淡出
  requestAnimationFrame(() => {
    preloaderEl.classList.add('app-preloader--hide')
    preloaderEl.addEventListener('transitionend', remove, { once: true })
    // 兜底：某些情况下 transitionend 不触发
    setTimeout(remove, 700)
  })
}
