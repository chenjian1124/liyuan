<template>
  <div class="service-title">
    <img :src="Logo" alt="logo" class="service-title-logo" />
    <div class="service-title-text">
      <span
        v-if="title"
        class="service-title-text-title"
        :style="{ color: titlecolor }"
        >{{ title }}</span
      >
      <span
        v-if="desc"
        class="service-title-text-desc"
        :style="{ color: desccolor }"
        >{{ desc }}</span
      >
    </div>
  </div>
</template>

<script setup>
import Logo from "@/assets/logo.svg";
const props = defineProps({
  title: {
    type: String,
    default: "产品服务",
  },
  desc: {
    type: String,
    default: "",
  },
  titlecolor: {
    type: String,
    default: "#3d3a39",
  },
  desccolor: {
    type: String,
    default: "#3d3a39",
  },
});
</script>

<style lang="less" scoped>
.service-title {
  display: flex;
  align-items: center;
  justify-content: center;

  .service-title-logo {
    width: 60px;
    height: 60px;
  }
  .service-title-text {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .service-title-text-title {
      font-size: 40px;
      font-weight: 700;
    }
    .service-title-text-desc {
      font-size: 14px;
    }
  }
}
</style>
