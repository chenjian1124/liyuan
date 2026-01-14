<template>
  <!-- 轮播图 -->
  <div class="swiper" ref="swiperEl">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in 5" :key="item">
        <img :src="SwiperTitle" alt="img1" class="swiper-logo" />
        <video
          class="swiper-video"
          :src="getVideoSrc(item)"
          autoplay
          muted
          loop
        ></video>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import SwiperTitle from "@/assets/home/swiper-title.svg";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Vite 无法解析运行时拼接的 `@/assets/...` 字符串路径
// 用 import.meta.glob 让构建工具在编译期把视频资源打包，并拿到最终可访问的 URL
const videoMap = import.meta.glob("../assets/video/*.mp4", {
  eager: true,
  import: "default",
});

const getVideoSrc = (item) => {
  // glob 的 key 与上面的相对路径保持一致
  return videoMap[`../assets/video/${item}.mp4`] || "";
};

const swiperEl = ref(null);
let swiperInstance;

const resetAndPlayActiveSlideVideo = () => {
  if (!swiperInstance) return;

  // loop 模式下 slides 会包含克隆节点；这里直接以 activeIndex 对应的 DOM 为准
  swiperInstance.slides?.forEach((slideEl, idx) => {
    const videoEl = slideEl?.querySelector?.("video");
    if (!videoEl) return;

    // 先把所有视频停掉并归零，避免多路视频同时播放
    if (idx !== swiperInstance.activeIndex) {
      try {
        videoEl.pause();
        videoEl.currentTime = 0;
      } catch (_) {
        // 某些浏览器/时机可能不允许访问 currentTime，忽略即可
      }
      return;
    }

    // 当前屏：重新从 0 播放
    try {
      videoEl.currentTime = 0;
      const p = videoEl.play();
      if (p?.catch) p.catch(() => {});
    } catch (_) {
      // 自动播放受限时（非静音等），这里可能抛错；页面上仍可手动播放
    }
  });
};

onMounted(() => {
  if (!swiperEl.value) return;

  swiperInstance = new Swiper(swiperEl.value, {
    modules: [Autoplay],
    // 自动轮播：每 5 秒切换一次
    autoplay: {
      delay: 5000,
      // 拖动/点击后仍继续自动轮播
      disableOnInteraction: false,
    },
    // 循环轮播
    loop: true,
    // 可拖动（鼠标/触摸）
    allowTouchMove: true,
    simulateTouch: true,
    grabCursor: true,

    // 切换到某一屏时，让该屏视频重新播放
    on: {
      init() {
        resetAndPlayActiveSlideVideo();
      },
      slideChangeTransitionStart() {
        resetAndPlayActiveSlideVideo();
      },
    },
  });

  // 兜底：初始化后再手动同步一次（避免某些情况下 init 回调时机过早）
  resetAndPlayActiveSlideVideo();
});

onBeforeUnmount(() => {
  if (swiperInstance?.destroy) {
    swiperInstance.destroy(true, true);
    swiperInstance = undefined;
  }
});

const { t } = useI18n();
</script>

<style lang="less" scoped>
.swiper-logo {
  width: 683px;
  position: absolute;
  bottom: 54px;
  left: 111px;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  transform: translateY(24px);
}
.swiper-slide-active .swiper-logo {
  animation: swiperLogoFadeUp 1.2s ease both;
}

@keyframes swiperLogoFadeUp {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .swiper-slide-active .swiper-logo {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
.swiper-video {
  width: 100%;
  height: 900px;
  object-fit: cover;
}

/* 手机端适配 */
@media (max-width: 768px) {
  .swiper-video {
    height: 420px;
  }
  .swiper-logo {
    width: 240px;
    left: 16px;
    bottom: 16px;
  }
}
</style>
