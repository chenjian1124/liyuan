<template>
  <div class="customer">
    <div class="customer-title">
      {{ $t("about_customer_title1") }}<br />{{ $t("about_customer_title2")
      }}<span class="text-orange">{{ $t("about_customer_title3") }}</span>
    </div>
    <div class="customer-list">
      <div class="customer-list-item" v-for="item in customerItems" :key="item.key">
        <img class="customer-logo" :src="item.url" :alt="item.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
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
    display: flex;
    justify-content: space-between;

    .customer-list-item {

      height: 40px;

      img {
        display: block;
        width: auto;
        height: 40px;
        object-fit: cover;
      }
    }
  }
}
</style>
