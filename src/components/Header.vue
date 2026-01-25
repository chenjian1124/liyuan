<template>
  <div class="header" :class="{ sticky: isSticky }">
    <!-- 顶部信息条：仅在未吸顶（未滚动）时展示 -->
    <div class="bar" ref="barRef" v-show="!isSticky">
      <a href="tel:+021-60252388">{{ t("header.phone") }}: 021-60252388</a>
      <a href="mailto:innovation@htholding.cn"
        >{{ t("header.email") }}: innovation@htholding.cn</a
      >
    </div>
    <div class="container" style="background: #fff;">
      <div class="main-header">
        <a @click.prevent="handleAnchorClick('/')">
          <img :src="Logo" alt="logo" class="logo" />
        </a>
        <!-- 手机端：汉堡菜单按钮 -->
        <button
          class="mobile-menu-btn"
          type="button"
          :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
          aria-label="打开/关闭菜单"
          @click="toggleMobileMenu"
        >
          <span class="mobile-menu-icon" :class="{ open: isMobileMenuOpen }" />
        </button>
        <div class="nav" :class="{ 'is-open': isMobileMenuOpen }">
          <ul class="nav-list">
            <li>
              <a :class="{ active: $route.path === '/' }" href="/" @click.prevent="handleAnchorClick('/')">{{
                t("header.nav.home")
              }}</a>
            </li>
            <li>
              <a :class="{ active: $route.path === '/workprocess' }"  
                href="javascript:void(0)"
                class="has-children"
                @click.prevent="handleAnchorClick('/workprocess')"
                >{{ t("header.nav.products") }}</a
              >
              <div
                class="children-list flex-row"
                :class="{ open: openSubmenu === 'products' }"
              >
                <a
                  href="javascript:void(0)"
                  @click.prevent="handleAnchorClick(item.href)"
                  class="children-item"
                  v-for="item in productList"
                  :key="item.name"
                >
                  <span class="children-item-title">{{ t(item.name) }}</span>
                  <img
                    :src="item.img"
                    alt="arrow-right"
                    class="children-item-image"
                  />
                </a>
              </div>
            </li>
            <li class="relative">
              <a
                href="javascript:void(0)"
                class="has-children"
                :class="{ active: $route.path === '/solution' }"
                @click.prevent="handleAnchorClick('/solution')"
                >{{ t("header.nav.solutions") }}</a
              >
              <div
                class="children-list"
                :class="{ open: openSubmenu === 'solutions' }"
              >
                <a
                  href="javascript:void(0)"
                  @click.prevent="handleAnchorClick(item.href)"
                  class="children-item"
                  v-for="item in solutionList"
                  :key="item.name"
                >
                  <span class="children-item-title">{{ t(item.name) }}</span>
                </a>
              </div>
            </li>
            <li class="relative">
              <a
                href="javascript:void(0)"
                class="has-children"
                :class="{ active: $route.path === '/about' }"
                @click.prevent="handleAnchorClick('/about')"
                >{{ t("header.nav.about") }}</a
              >
              <div
                class="children-list"
                :class="{ open: openSubmenu === 'about' }"
              >
                <a
                  href="javascript:void(0)"
                  @click.prevent="handleAnchorClick(item.href)"
                  class="children-item"
                  v-for="item in aboutList"
                  :key="item.name"
                  >{{ t(item.name) }}</a
                >
              </div>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                :class="{ active: $route.path === '/contact' }"
                @click.prevent="handleAnchorClick('/contact')"
                >{{ t("header.nav.contact") }}</a
              >
            </li>
            <!-- 手机端：CTA 放到菜单里，避免右侧区域挤压 -->
            <li class="mobile-only">
              <div class="mobile-cta" @click="handleAnchorClick('/contact')">
                {{ t("header.btn.schedule") }}
              </div>
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
import Logo from "@/assets/logo-w-new.svg";
import Language from "@/assets/language.svg";
import Image1 from "@/assets/menu/1.png";
import Image2 from "@/assets/menu/2.png";
import Image3 from "@/assets/menu/3.png";
import Image4 from "@/assets/menu/4.png";
import Image5 from "@/assets/menu/5.png";
import Image6 from "@/assets/menu/6.png";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { LOCALE_STORAGE_KEY } from "@/i18n";

const { t, locale: i18nLocale } = useI18n();
const router = useRouter();

// 手机端菜单开关
const isMobileMenuOpen = ref(false);
// 手机端子菜单展开项：products / solutions / about
const openSubmenu = ref("");

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // 关闭菜单时，顺手收起子菜单
  if (!isMobileMenuOpen.value) openSubmenu.value = "";
};

const toggleSubmenu = (key) => {
  // 桌面端仍保留 hover；这里主要给移动端点击展开用
  if (!isMobileMenuOpen.value) return;
  openSubmenu.value = openSubmenu.value === key ? "" : key;
};

// 处理带锚点的路由跳转
const handleAnchorClick = async (href) => {
  // 手机端：点击跳转后关闭菜单
  isMobileMenuOpen.value = false;
  openSubmenu.value = "";
  if (href.includes("#")) {
    const [path, hash] = href.split("#");
    await router.push({ path: path || "/", hash: `#${hash}` });
    // 等待路由跳转完成后，滚动到锚点位置
    setTimeout(() => {
      const element = document.querySelector(hash ? `#${hash}` : null);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  } else {
    router.push(href);
  }
};

const productList = [
  {
    name: "header.submenu.internationalShipping",
    img: Image1,
    href: "/workprocess#internationalShipping",
  },
  {
    name: "header.submenu.projectLogistics",
    img: Image2,
    href: "/workprocess#projectLogistics",
  },
  {
    name: "header.submenu.landTransportationServices",
    img: Image3,
    href: "/workprocess#landTransportationServices",
  },
  {
    name: "header.submenu.customsClearanceServices",
    img: Image4,
    href: "/workprocess#customsClearanceServices",
  },
  {
    name: "header.submenu.warehousingServices",
    img: Image5,
    href: "/workprocess#warehousingServices",
  },
  {
    name: "header.submenu.internationalAirFreight",
    img: Image6,
    href: "/workprocess#internationalAirFreight",
  },
];
const solutionList = [
  {
    name: "header.submenu.solutions_1",
    href: "/solution#solutions_1",
  },
  {
    name: "header.submenu.solutions_2",
    href: "/solution#solutions_2",
  },
  {
    name: "header.submenu.solutions_3",
    href: "/solution#solutions_3",
  },
  {
    name: "header.submenu.solutions_4",
    href: "/solution#solutions_4",
  },
  {
    name: "header.submenu.solutions_5",
    href: "/solution#solutions_5",
  },
  {
    name: "header.submenu.solutions_6",
    href: "/solution#solutions_6",
  },
  {
    name: "header.submenu.solutions_7",
    href: "/solution#solutions_7",
  },
];
const aboutList = [
  {
    name: "header.submenu.about_1",
    href: "/about#about_1",
  },
  {
    name: "header.submenu.about_2",
    href: "/about#about_2",
  },
  {
    name: "header.submenu.about_3",
    href: "/about#about_3",
  },
  {
    name: "header.submenu.about_4",
    href: "/about#about_4",
  },
];

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

// 手机端菜单打开时锁定页面滚动，避免背景跟着滚
watch(isMobileMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
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
  .mobile-menu-btn {
    display: none;
  }
  .nav {
    padding-left: 50px;
    .nav-list {
      display: flex;
      li {
        height: 90px;
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
          color: @title-color;
          line-height: 28px;
          display: block;
          padding: 28px 18px 28px 15px;
          text-decoration: none;
          position: relative;
          transition: color 0.18s ease;

          &:hover {
            color: #ff9124;
          }
          &.active {
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
            .children-item {
              flex: 1;
              max-width: 240px;
              min-width: auto;
            }
          }
          /* 手机端：点击展开时使用 */
          &.open {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
            pointer-events: auto;
            transition-delay: 0s;
          }
          .children-item {
            min-width: 240px;
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
              color: @title-color;
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
      color: @title-color;
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

/* 手机端：折叠菜单 */
@media (max-width: 1024px) {
  .bar {
    padding: 10px 12px;
    flex-direction: column;
    gap: 8px;
  }

  .container {
    padding: 0 16px;

    .main-header {
      height: 64px;
    }

    .logo {
      min-height: 28px;
      height: 28px;
    }

    .mobile-menu-btn {
      display: inline-flex;
      margin-left: auto;
      width: 40px;
      height: 40px;
      border: 0;
      background: transparent;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .mobile-menu-icon {
      position: relative;
      display: block;
      width: 22px;
      height: 2px;
      background: #041c2f;
      transition: transform 0.2s ease, background 0.2s ease;
    }
    .mobile-menu-icon::before,
    .mobile-menu-icon::after {
      content: "";
      position: absolute;
      left: 0;
      width: 22px;
      height: 2px;
      background: #041c2f;
      transition: transform 0.2s ease, top 0.2s ease, opacity 0.2s ease;
    }
    .mobile-menu-icon::before {
      top: -7px;
    }
    .mobile-menu-icon::after {
      top: 7px;
    }
    .mobile-menu-icon.open {
      background: transparent;
    }
    .mobile-menu-icon.open::before {
      top: 0;
      transform: rotate(45deg);
    }
    .mobile-menu-icon.open::after {
      top: 0;
      transform: rotate(-45deg);
    }

    /* 右侧语言/按钮在手机端隐藏，放到菜单里 */
    .language {
      display: none;
    }

    .nav {
      padding-left: 0;
      display: none;
    }

    .nav.is-open {
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      top: 64px;
      bottom: 0;
      background: #fff;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding: 12px 16px 24px;
      box-shadow: 0 10px 30px rgba(4, 28, 47, 0.14);
    }

    .nav.is-open .nav-list {
      flex-direction: column;
    }

    .nav.is-open .nav-list li {
      height: auto;
    }

    .nav.is-open .nav-list li > a {
      padding: 14px 0;
      font-size: 16px;
      border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    }

    /* 子菜单在手机端变为“静态区域” */
    .nav.is-open .nav-list li .children-list {
      position: static;
      width: 100%;
      padding: 10px 0 12px;
      border-top: 0;
      box-shadow: none;
      opacity: 0;
      transform: none;
      visibility: hidden;
      pointer-events: none;
      gap: 10px;
    }

    .nav.is-open .nav-list li .children-list.open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .nav.is-open .nav-list li .children-item {
      min-width: 0;
    }

    .nav.is-open .nav-list li .children-item .children-item-title {
      font-size: 14px;
      margin-bottom: 6px;
    }

    .nav.is-open .nav-list li .children-item .children-item-image {
      width: 100%;
      height: auto;
      max-height: 180px;
    }
  }

  .mobile-only {
    display: block;
  }

  .mobile-cta {
    margin-top: 16px;
    padding: 12px 14px;
    background: #ff9124;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
  }
}

/* 默认隐藏“仅手机端”元素（桌面端不显示） */
.mobile-only {
  display: none;
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
