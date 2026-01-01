<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
  msg: String,
})

const count = ref(0)
const { t } = useI18n()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">{{
      t('hello.countIs', { count })
    }}</button>
    <p>
      {{ t('hello.editTip', { file: 'components/HelloWorld.vue' }) }}
    </p>
  </div>

  <p>
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >{{ t('hello.links.starter') }}</a
    >, the official Vue + Vite starter
  </p>
  <p>
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >{{ t('hello.links.ide') }}</a
    >.
  </p>
  <p class="read-the-docs">{{ t('hello.readDocs') }}</p>
</template>

<style lang="less" scoped>
.read-the-docs {
  color: #888;
}
</style>
