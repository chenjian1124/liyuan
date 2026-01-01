<template>
  <section class="page">
    <h1>{{ t("home.title") }}</h1>
    <p>{{ t("home.desc") }}</p>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="less" scoped>
.page {
  height: 1500px;
}
</style>
