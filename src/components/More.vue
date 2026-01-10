<template>
  <div class="more">
    <span class="more-text" :style="{ color: textcolor }">{{
      displayText
    }}</span>
    <img class="more-icon" :src="MoreIcon" />
  </div>
</template>

<script setup>
import MoreIcon from "@/assets/more.svg";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  textcolor: {
    type: String,
    default: "#041c2f",
  },
});

// 使用计算属性来处理默认文本
const displayText = computed(() => {
  return props.text || t("more");
});
</script>

<style lang="less" scoped>
.more {
  display: flex;
  align-items: center;
  cursor: pointer;
  .more-text {
    font-size: 14px;
    margin-right: 10px;
    &:hover {
      color: @orange !important;
    }
  }
  &:hover {
    .more-text {
      color: @orange !important;
    }
    .more-icon {
      transform: scale(1.1);
    }
  }
}
</style>
