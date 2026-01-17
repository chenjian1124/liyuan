<template>
  <div class="back-to-top" :class="{ show: isVisible }" @click="scrollToTop">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19V5M12 5L5 12M12 5L19 12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 控制按钮显示/隐藏
const isVisible = ref(false);

// 滚动阈值，超过这个距离才显示按钮
const scrollThreshold = 300;

// 监听滚动事件
const handleScroll = () => {
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  isVisible.value = scrollTop > scrollThreshold;
};

// 平滑滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// 组件挂载时添加滚动监听
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // 初始化检查一次
  handleScroll();
});

// 组件卸载时移除滚动监听
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="less" scoped>
.back-to-top {
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 48px;
  height: 48px;
  background: #ff9124;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px) scale(0.8);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  svg {
    color: #fff;
    transition: all 0.3s ease;
  }

  // 显示状态
  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  // 悬停效果
  &:hover {
    background: #fff;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 20px rgba(255, 145, 36, 0.25);

    svg {
      color: #ff9124;
      transform: translateY(-2px);
    }
  }

  // 点击效果
  &:active {
    transform: translateY(-2px) scale(1);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .back-to-top {
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
