<template>
  <div class="bubble" />
</template>

<style scoped>
.bubble{
  --size: 220px;     /* 圆的大小 */
  --color: #2aa0da;  /* 颜色 */

  width: var(--size);
  aspect-ratio: 1 / 1;
  background: var(--color);
  border-radius: 50%;
  position: relative;
}

.bubble::before{
  content: "";
  position: absolute;
  width: calc(var(--size) * 0.34);
  height: calc(var(--size) * 0.34);
  left: calc(var(--size) * -0.12);
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  background: var(--color);
  border-radius: 0 100% 100% 100%; /* 做出圆润尖角 */
}
</style>