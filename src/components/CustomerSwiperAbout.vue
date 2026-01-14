<template>
  <div class="customer">
    <div class="customer-title">
      {{ $t("about_customer_title1") }}<br />{{ $t("about_customer_title2")
      }}<span class="text-orange">{{ $t("about_customer_title3") }}</span>
    </div>
    <div class="customer-list">
      <!-- swiper：滚动字幕（匀速自动滚动、无缝循环） -->
      <div
        class="swiper customer-swiper"
        ref="swiperEl"
        aria-label="客户 Logo 滚动展示"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="item in customerItems"
            :key="item.key"
          >
            <img class="customer-logo" :src="item.url" :alt="item.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import Swiper from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// Vite 无法解析运行时拼接的 `@/assets/...` 字符串路径
// 用 import.meta.glob 让构建工具在编译期把图片资源打包，并拿到最终可访问的 URL
const customerSvgMap = import.meta.glob("../assets/partner/*.png", {
  eager: true,
  import: "default",
});

const getBaseName = (path) => {
  // ../assets/customer/8.svg -> 8.svg
  return path.split("/").pop() || path;
};

const getSortNumber = (name) => {
  // 提取文件名中的数字用于排序
  const m = String(name).match(/\d+/);
  return m ? Number(m[0]) : Number.MAX_SAFE_INTEGER;
};

// 统一用列表渲染，避免某些图片缺失时产生空 src
const customerItems = computed(() => {
  return Object.entries(customerSvgMap)
    .map(([path, url]) => {
      const fileName = getBaseName(path);
      return {
        key: fileName,
        url,
        alt: `customer-${fileName.replace(".svg", "")}`,
        sort: getSortNumber(fileName),
      };
    })
    .sort((a, b) => a.sort - b.sort);
});

// 可按需调整：滚动速度（值越大越慢）。单位 ms
const speed = 8000;
// item 间距（px）
const spaceBetween = 28;

const swiperEl = ref(null);
let swiperInstance;

const handleMouseEnter = () => {
  // 用手动方式实现 hover 暂停，避免不同 Swiper 版本配置项差异
  swiperInstance?.autoplay?.stop?.();
};

const handleMouseLeave = () => {
  swiperInstance?.autoplay?.start?.();
};

onMounted(() => {
  if (!swiperEl.value) return;
  if (!customerItems.value.length) return;

  swiperInstance = new Swiper(swiperEl.value, {
    modules: [Autoplay, FreeMode],

    // 关键：每次滚动过渡用 linear（配合 CSS 覆盖），实现“匀速字幕”效果
    speed,
    loop: true,

    // 一直滚：delay=0 + disableOnInteraction=false
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    // 让每个 slide 宽度按内容自适应，整体像“跑马灯”一样连续滚动
    slidesPerView: "auto",
    spaceBetween,

    // 自由模式：避免吸附停顿感
    freeMode: {
      enabled: true,
      momentum: false,
    },

    // 允许拖拽查看，但不会影响自动滚动
    allowTouchMove: true,
    simulateTouch: true,
    grabCursor: true,

    // loop 稳定性增强：确保复制足够多的 slide
    loopAdditionalSlides: Math.max(customerItems.value.length, 10),
  });
});

onBeforeUnmount(() => {
  if (swiperInstance?.destroy) {
    swiperInstance.destroy(true, true);
    swiperInstance = undefined;
  }
});
</script>

<style lang="less" scoped>
.customer {
  padding: 0 40px;
  background-color: #fff;
  display: flex;
  align-items: center;
  /* 防止 Swiper wrapper 宽度过大时把页面撑出横向滚动条 */
  overflow: hidden;
  .customer-title {
    flex-shrink: 0;
    width: 168px;
    font-size: 24px;
    color: #424f65;
    font-weight: 700;
    line-height: 32px;
  }
  .customer-list {
    flex: 1;
    /* flex 子项默认 min-width:auto，会导致内部内容无法收缩从而出现横向滚动条 */
    min-width: 0;
    padding: 16px 40px;
    overflow: hidden;
  }
}

/* Swiper 跑马灯 */
.customer-swiper {
  width: 100%;
  overflow: hidden;
  user-select: none;
  min-width: 0;
}

/* 关键：把 swiper 的过渡曲线改成线性，才是“匀速字幕”效果 */
.customer-swiper :deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}

.customer-swiper :deep(.swiper-slide) {
  width: auto; /* slidesPerView=auto 的配套 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 30px 0 0;
}

.customer-logo {
  height: 40px;
  width: auto;
  display: block;
  opacity: 0.9;
  transition: opacity 0.2s ease;
}

.customer-logo:hover {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .customer-swiper :deep(.swiper-wrapper) {
    transition-timing-function: ease !important;
  }
}

/* 手机端适配 */
@media (max-width: 768px) {
  .customer {
    padding: 0 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    .customer-title {
      width: auto;
      font-size: 18px;
      line-height: 24px;
    }
    .customer-list {
      width: 100%;
      padding: 10px 0 18px;
    }
  }

  .customer-swiper :deep(.swiper-slide) {
    height: 48px;
    padding-right: 18px;
  }

  .customer-logo {
    height: 32px;
  }
}

/* 预留：如果你想上下淡出遮罩，可打开下面两行
  &::before, &::after { ... }
*/
</style>
