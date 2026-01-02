<template>
  <div class="more">
    <span class="more-text" :style="{ color: textcolor }">{{ text }}</span>
    <img class="more-icon" :src="MoreIcon" />
  </div>
</template>

<script setup>
import MoreIcon from "@/assets/more.svg";

const props = defineProps({
  text: {
    type: String,
    default: "查看更多",
  },
  textcolor: {
    type: String,
    default: "#041c2f",
  },
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
