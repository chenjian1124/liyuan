<template>
  <div ref="rootRef" class="development">
    <div class="map_bg_left"></div>
    <div class="map_bg_right"></div>
    <div class="development_content">
      <div class="development_content_line">

      </div>
      <!-- ship -->
      <img src="@/assets/development/ship.png" alt="ship" class="development_content_ship" />
      <!-- 2009 -->
      <div class="item_2009 item" data-scroll-animate>
        <span class="year text-right">2009</span>
        <span class="round orange"></span>
        <div class="desc">
          <img src="@/assets/development/orange-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20">
            <p>公司成立</p>
          </div>
        </div>
      </div>
      <!-- 2010 -->
      <div class="item_2010 item" data-scroll-animate>
        <div class="desc">
          <img src="@/assets/development/blue-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20">
            <p>成功加入</p>
            <p>WCA FAMILY</p>
          </div>
        </div>
        <span class="round blue"></span>
        <span class="year">2010</span>
      </div>
      <!-- 2014 -->
      <div class="item_2014 item" data-scroll-animate>
        <span class="year text-right">2014</span>
        <span class="round green"></span>
        <div class="desc">
          <img src="@/assets/development/green-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20">
            <p>青岛子公司</p>
            <p>成立</p>
          </div>
        </div>
      </div>
      <!-- 2017 -->
      <div class="item_2017 item" data-scroll-animate>
        <div class="desc">
          <img src="@/assets/development/orange-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20">
            <p>宁波子公司</p>
            <p>成立</p>
          </div>
        </div>
        <span class="round orange"></span>
        <span class="year">2017</span>
      </div>
      <!-- 2018 -->
      <div class="item_2018 item" data-scroll-animate>
        <span class="year text-right">2018</span>
        <span class="round blue"></span>
        <div class="desc">
          <img src="@/assets/development/blue-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20">
            <p>天津子公司</p>
            <p>成立</p>
          </div>
        </div>
      </div>
      <!-- 2021 -->
      <div class="item_2021 item" data-scroll-animate>
        <div class="desc">
          <img src="@/assets/development/green-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20">
            <p>成功加入</p>
            <p>WCA PROJECTS</p>
            <p>首次在上海</p>
            <p>WBX展亮相</p>
          </div>
        </div>
        <span class="round green"></span>
        <span class="year">2021</span>
      </div>
      <!-- 2023 -->
      <div class="item_2023 item" data-scroll-animate>
        <span class="year text-right">2023</span>
        <span class="round orange"></span>
        <div class="desc">
          <img src="@/assets/development/orange-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20">
            <p>哈尔滨单证中心</p>
            <p>成立</p>
          </div>
        </div>
      </div>
      <!-- 2024 -->
      <div class="item_2024 item" data-scroll-animate>
        <div class="desc">
          <img src="@/assets/development/blue-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20">
            <p>参加第28届</p>
            <p>南美洲多式</p>
            <p>联运展</p>
          </div>
        </div>
        <span class="round blue"></span>
        <span class="year">2024</span>
      </div>
      <!-- 2025 -->
      <div class="item_2025 item" data-scroll-animate>
        <span class="year text-right">2025</span>
        <span class="round green"></span>
        <div class="desc">
          <img src="@/assets/development/green-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20" style="font-size: 20px;">
            <p>通过ISO管理体系</p>
            <p>认证</p>
            <p>广州子公司成立</p>
            <p>郑州营销中心</p>
            <p>立远恒通</p>
            <p>墨西哥分站成立</p>
          </div>
        </div>
      </div>
      <!-- 2026 -->
      <div class="item_2026 item" data-scroll-animate>
        <div class="desc">
          <img src="@/assets/development/orange-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20" style="font-size: 46px;">
            <p>新挑战！</p>

          </div>
        </div>
        <span class="round orange"></span>
        <span class="year">2026</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const rootRef = ref(null);
let io = null;

// 滚动到每个节点时触发动效（只触发一次）
onMounted(async () => {
  await nextTick();

  const rootEl = rootRef.value;
  if (!rootEl) return;

  const items = Array.from(rootEl.querySelectorAll("[data-scroll-animate]"));
  if (items.length === 0) return;

  // 兼容不支持 IntersectionObserver 的环境：直接显示
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
    items.forEach((el) => el.classList.add("is-inview"));
    return;
  }

  // 统一设置错峰延迟（按 DOM 顺序）
  items.forEach((el, idx) => {
    // 每个 item 递增 80ms，更自然
    el.style.setProperty("--delay", `${idx * 80}ms`);
  });

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("is-inview");
        // 只执行一次：触发后取消观察，避免重复计算
        io?.unobserve(el);
      });
    },
    {
      // 提前一点触发，让视觉更顺
      root: null,
      threshold: 0.18,
      rootMargin: "0px 0px -12% 0px",
    }
  );

  items.forEach((el) => io.observe(el));
});

onBeforeUnmount(() => {
  io?.disconnect();
  io = null;
});
</script>

<style lang="less" scoped>
.development {
  position: relative;
  height: 3900px;
  margin-bottom: 300px;

  .development_content_line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 1px;
    height: 100%;
    background-color: #000;
  }

  .development_content_ship {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 10px;
    margin: auto;
    width: 200px;
    transform: translateX(50%);
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;

    // 默认：未进入视口时隐藏 + 上移 + 轻微模糊（更高级）
    &[data-scroll-animate] {
      opacity: 0;
      transform: translate3d(0, 34px, 0) scale(0.985);
      filter: blur(8px);
      transition:
        opacity 900ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms),
        transform 900ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms),
        filter 900ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0ms);
      will-change: opacity, transform, filter;
    }

    // 进入视口：显示 + 回到原位
    &.is-inview {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
      filter: blur(0);
    }

    // 进入视口后，圆点做一个轻微弹跳，增强质感
    &.is-inview .round {
      animation: dev-pop 520ms cubic-bezier(0.16, 1, 0.3, 1) 1;
    }

    .year {
      font-size: 32px;
      font-weight: 700;
      color: #000;
      width: 280px;
      // hover 用“弹性”缓动：看起来更有回弹感
      transition:
        transform 420ms cubic-bezier(0.34, 1.56, 0.64, 1),
        filter 220ms ease;

    }

    .round {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      // transform 用弹性曲线，阴影用柔和过渡
      transition:
        transform 440ms cubic-bezier(0.34, 1.56, 0.64, 1),
        box-shadow 260ms ease,
        filter 220ms ease;
    }

    .desc {
      width: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition:
        transform 480ms cubic-bezier(0.34, 1.56, 0.64, 1),
        filter 220ms ease;

      .desc-img {
        display: block;
        width: 100%;
        object-fit: cover;
        transition:
          transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1),
          filter 220ms ease;

      }

      .desc-content {
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        width: 280px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition:
          transform 460ms cubic-bezier(0.34, 1.56, 0.64, 1),
          filter 220ms ease;
      }
    }

    .p-l-20 {
      padding-left: 35px;
    }

    .p-r-20 {
      padding-right: 35px;
    }

    .text-right {
      text-align: right;
    }

    .orange {
      background-color: @orange;
    }

    .blue {
      background-color: #2e9adb;
    }

    .green {
      background-color: #41d62b;
    }

    .orange-right {
      background: url("@/assets/development/orange-right.png") no-repeat;
    }

    .orange-left {
      background: url("@/assets/development/orange-left.png") no-repeat;
    }

    .blue-right {
      background: url("@/assets/development/blue-right.png") no-repeat center center;
      background-size: 100% 100%;
    }

    .blue-left {
      background: url("@/assets/development/blue-left.png") no-repeat center center;
      background-size: 100% 100%;
    }

    .green-right {
      background: url("@/assets/development/green-right.png") no-repeat center center;
      background-size: 100% 100%;
    }

    .green-left {
      background: url("@/assets/development/green-left.png") no-repeat center center;
      background-size: 100% 100%;
    }
  }

  // hover 效果：只作用到 year/round/desc（避免移动端误触）
  @media (hover: hover) and (pointer: fine) {
    .item.is-inview[data-scroll-animate] {
      cursor: pointer;
    }

    // hover 到整个 item 时，子元素联动增强
    .item.is-inview[data-scroll-animate]:hover .year {
      transform: translateY(-3px);
      filter: brightness(1.02);
    }

    .item.is-inview[data-scroll-animate]:hover .round {
      transform: scale(1.08);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
      filter: saturate(1.05);
    }

    .item.is-inview[data-scroll-animate]:hover .desc {
      transform: translateY(-4px);
      filter: brightness(1.02);
    }

    .item.is-inview[data-scroll-animate]:hover .desc-img {
      transform: scale(1.02);
      filter: saturate(1.06);
    }

    .item.is-inview[data-scroll-animate]:hover .desc-content {
      transform: translateY(-2px);
    }

    // hover 到单个元素时（更精确的反馈）
    .item.is-inview[data-scroll-animate] .year:hover {
      transform: translateY(-4px);
    }

    .item.is-inview[data-scroll-animate] .round:hover {
      transform: scale(1.1);
    }

    .item.is-inview[data-scroll-animate] .desc:hover {
      transform: translateY(-6px);
    }
  }

  .item_2009 {
    top: 200px;
  }

  .item_2010 {
    top: 600px;
  }

  .item_2014 {
    top: 1000px;
  }

  .item_2017 {
    top: 1400px;
  }

  .item_2018 {
    top: 1800px;
  }

  .item_2021 {
    top: 2200px;
  }

  .item_2023 {
    top: 2600px;
  }

  .item_2024 {
    top: 3000px;
  }

  .item_2025 {
    top: 3400px;
  }

  .item_2026 {
    top: 3800px;
  }
}

// 尊重系统“减少动效”设置
@media (prefers-reduced-motion: reduce) {
  .item[data-scroll-animate] {
    transition: none !important;
    transform: none !important;
    filter: none !important;
    opacity: 1 !important;
  }

  .item.is-inview .round {
    animation: none !important;
  }
}

@keyframes dev-pop {
  0% {
    transform: scale(0.88);
  }

  60% {
    transform: scale(1.06);
  }

  100% {
    transform: scale(1);
  }
}


.map_bg_left {
  position: absolute;
  left: 0;
  top: 0;
  width: 1400px;
  height: 700px;
  background: url("@/assets/development/map.png") no-repeat center center;
  background-size: 100% 100%;
}

.map_bg_right {
  position: absolute;
  right: 0;
  bottom: -146px;
  width: 1400px;
  height: 700px;
  background: url("@/assets/development/map.png") no-repeat bottom center;
  background-size: 100% 100%;
}
</style>