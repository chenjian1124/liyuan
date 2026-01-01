<template>
  <div class="header" :class="{ sticky: isSticky }">
    <!-- 顶部信息条：仅在未吸顶（未滚动）时展示 -->
    <div class="bar" ref="barRef" v-show="!isSticky">
      <a href="tel:+021-60252388">{{ t("header.phone") }}: 021-60252388</a>
      <a href="mailto:innovation@htholding.cn"
        >{{ t("header.email") }}: innovation@htholding.cn</a
      >
    </div>
    <div class="container">
      <div class="main-header">
        <a href="/">
          <img :src="Logo" alt="logo" class="logo" />
        </a>
        <div class="nav">
          <ul class="nav-list">
            <li>
              <a href="/">{{ t("header.nav.home") }}</a>
            </li>
            <li>
              <a href="/" class="has-children">{{
                t("header.nav.products")
              }}</a>
              <div class="children-list flex-row">
                <a
                  href="/"
                  class="children-item"
                  v-for="item in 10"
                  :key="item"
                >
                  <span class="children-item-title">{{
                    t("header.submenu.internationalShipping")
                  }}</span>
                  <img
                    :src="Image11"
                    alt="arrow-right"
                    class="children-item-image"
                  />
                </a>
              </div>
            </li>
            <li class="relative">
              <a href="/" class="has-children">{{
                t("header.nav.solutions")
              }}</a>
              <div class="children-list"></div>
            </li>
            <li class="relative">
              <a href="/" class="has-children">{{ t("header.nav.about") }}</a>
              <div class="children-list">
                <a
                  href="/"
                  class="children-item"
                  v-for="item in 5"
                  :key="item"
                  >{{ item }}</a
                >
              </div>
            </li>
            <li>
              <a href="/">{{ t("header.nav.contact") }}</a>
            </li>
          </ul>
        </div>
        <div class="language">
          <img :src="Language" alt="language" />
          <div class="language-list">
            <span
              :class="{ active: locale === 'zh' }"
              @click="setLocale('zh')"
              >{{ t("common.zh") }}</span
            >
            <span>/</span>
            <span
              :class="{ active: locale === 'en' }"
              @click="setLocale('en')"
              >{{ t("common.en") }}</span
            >
            <span>/</span>
            <span
              :class="{ active: locale === 'es' }"
              @click="setLocale('es')"
              >{{ t("common.es") }}</span
            >
          </div>
          <div class="btn">{{ t("header.btn.schedule") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "@/assets/logo-w.svg";
import Language from "@/assets/language.svg";
import Image11 from "@/assets/img11.png";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { LOCALE_STORAGE_KEY } from "@/i18n";

const { t, locale: i18nLocale } = useI18n();

// 仅用于模板里直接判断 active
const locale = i18nLocale;

// 切换语言并持久化到本地
const setLocale = (next) => {
  i18nLocale.value = next;
  localStorage.setItem(LOCALE_STORAGE_KEY, next);
  document.documentElement.lang = next;
};

// 是否处于吸顶态（滚动后）
const isSticky = ref(false);
const barRef = ref(null);

// 滚动阈值：滚动距离超过顶部条高度时，进入吸顶态并隐藏顶部条
const stickyThreshold = ref(0);

const updateSticky = () => {
  const y = window.scrollY || 0;
  const enter = Math.max(1, stickyThreshold.value || 0);

  // 关键：加“回滞”，避免隐藏 bar 导致布局高度变化后又马上触发回退，从而产生闪烁
  // - 进入吸顶：滚动超过 enter（通常是 bar 的高度）
  // - 退出吸顶：仅回到页面顶部才退出（y <= 0）
  if (!isSticky.value && y > enter) {
    isSticky.value = true;
    return;
  }
  if (isSticky.value && y <= 0) {
    isSticky.value = false;
  }
};

const updateThreshold = () => {
  const barEl = barRef.value;
  const h = barEl?.offsetHeight || 0;
  // bar 隐藏（display:none）时 offsetHeight 会变 0，这里不要覆盖已测得的阈值
  if (h > 0) stickyThreshold.value = Math.max(1, h);
};

onMounted(() => {
  updateThreshold();
  updateSticky();
  window.addEventListener("scroll", updateSticky, { passive: true });
  window.addEventListener("resize", updateThreshold);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateSticky);
  window.removeEventListener("resize", updateThreshold);
});
</script>

<style lang="less" scoped>
.header {
  /* 吸顶：sticky 不会脱离文档流，体验更自然 */
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header.sticky {
  /* 吸顶时加一点阴影，增强层级感 */
  box-shadow: 0 6px 18px rgba(4, 28, 47, 0.12);
}

.bar {
  padding: 13px;
  background-color: #041c2f;
  color: #fff;
  display: flex;
  gap: 20px;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    transition: color 0.18s ease;
    &:hover {
      color: #16ba8f;
    }
  }
}
.container {
  padding: 0 40px;
  background-color: #f5f5f5;
  .main-header {
    display: flex;
    align-items: center;
    height: 90px;
    position: relative;
  }
  .logo {
    min-height: 37px;
  }
  .nav {
    padding-left: 50px;
    .nav-list {
      display: flex;
      li {
        list-style: none;
        position: static !important;
        &:hover {
          .children-list {
            /* 下拉菜单：淡入 + 下滑 */
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
            pointer-events: auto;
            transition-delay: 0s;
          }
        }
        a {
          font-family: epilogue, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: #041c2f;
          line-height: 28px;
          display: block;
          padding: 28px 18px 28px 15px;
          text-decoration: none;
          position: relative;
          transition: color 0.18s ease;

          &:hover {
            color: #ff9124;
          }
          .active {
            color: #ff9124;
          }
        }
        .has-children {
          // 下拉箭头
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 10px;
            height: 10px;
          }
        }
        .children-list {
          /* 下拉菜单初始隐藏：不占 hover 区域、不抢点击 */
          display: flex;
          opacity: 0;
          transform: translateY(10px);
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease,
            visibility 0s linear 0.18s;
          flex-wrap: wrap;
          flex-direction: column;
          gap: 15px;
          position: absolute;
          top: 100%;
          background-color: #fff;
          padding: 20px;
          border-top: 8px solid #ff9124;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
          &.flex-row {
            left: 0;
            right: 0;
            flex-direction: row;
          }
          .children-item {
            width: 240px;
            display: flex;
            flex-direction: column;
            padding: 0;
            &:hover {
              .children-item-title {
                color: #ff9124;
              }
              .children-item-image {
                transform: scale(1.03);
              }
            }
            .children-item-title {
              font-size: 18px;
              color: #034460;
              line-height: 28px;
              margin-bottom: 15px;
              font-weight: 500;
              transition: color 0.18s ease;
            }
            .children-item-image {
              width: 240px;
              height: 160px;
              object-fit: cover;
              transition: transform 0.22s ease;
            }
          }
        }
      }
    }
  }
}
.language {
  display: flex;
  align-items: center;
  margin-left: auto;
  img {
    width: 14px;
    margin-right: 5px;
  }
  .language-list {
    line-height: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      font-size: 12px;
      color: #041c2f;
      cursor: pointer;
      transition: color 0.18s ease;
      &:hover {
        color: #ff9124;
      }
      &.active {
        color: #ff9124;
      }
    }
  }
}
.btn {
  padding: 9px 20px;
  color: #fff;
  background: #ff9124;
  border-radius: 0;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 40px;
  transition: background-color 0.18s ease, transform 0.18s ease;
  &:hover {
    background: #034460;
    color: #fff;
    transform: translateY(-1px);
  }
}

/* 减少动态偏好：尊重系统设置 */
@media (prefers-reduced-motion: reduce) {
  .bar a,
  .container .nav .nav-list li a,
  .container .nav .nav-list li .children-list,
  .container .nav .nav-list li .children-item-image,
  .language .language-list span,
  .btn {
    transition: none !important;
  }
}
</style>
