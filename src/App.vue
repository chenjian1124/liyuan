<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <BackToTop />
  </div>
</template>

<style lang="less" scoped></style>
