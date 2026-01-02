<template>
  <section class="page">
    <!-- 轮播图 -->
    <MySwiper />
    <!-- 客户 -->
    <CustomerSwiper />
    <!-- 服务 -->
    <Service />
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import MySwiper from "@/components/MySwiper.vue";
import CustomerSwiper from "@/components/CustomerSwiper.vue";
import Service from "@/components/Service.vue";

const { t } = useI18n();
</script>

<style lang="less" scoped></style>
