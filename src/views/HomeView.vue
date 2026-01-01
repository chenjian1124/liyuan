<template>
  <section class="page">
    <!-- 轮播图 -->
    <MySwiper />
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import MySwiper from "@/components/MySwiper.vue";

const { t } = useI18n();
</script>

<style lang="less" scoped></style>
