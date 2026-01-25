<template>
  <div class="footer container">
    <div class="footer_content">
      <div class="footer_item">
        <p class="desc">{{ t("footer_company") }}</p>
        <p class="desc">{{ t("footer_address") }}</p>
        <p class="desc">{{ t("footer_phone") }}</p>
      </div>
      <div class="footer_item">
        <div class="title">{{ t("header.nav.home") }}</div>
      </div>
      <div class="footer_item">
        <div class="title">{{ t("header.nav.products") }}</div>
        <div
          v-for="value in productList"
          :key="value.name"
          class="link"
          @click="handleAnchorClick(value.href)"
        >
          {{ t(value.name) }}
        </div>
      </div>
      <div class="footer_item">
        <div class="title">{{ t("header.nav.solutions") }}</div>
        <div
          v-for="value in solutionList"
          :key="value.name"
          class="link"
          @click="handleAnchorClick(value.href)"
        >
          {{ t(value.name) }}
        </div>
      </div>
      <div class="footer_item">
        <div class="title">{{ t("header.nav.about") }}</div>
        <div
          v-for="value in aboutList"
          :key="value.name"
          class="link"
          @click="handleAnchorClick(value.href)"
        >
          {{ t(value.name) }}
        </div>
      </div>
      <div class="footer_item">
        <div class="title">{{ t("header.nav.contact") }}</div>
        <div class="remark">{{ t("footer_remark") }}</div>
        <input type="text" :placeholder="t('footer_email')" class="input" />
        <div class="btn">{{ t("footer_btn") }}</div>
      </div>
    </div>
    <div class="footer_bottom">
      Copyright © 2026 INNOVATION LOGISTICS. All Rights Reserved.
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const { t } = useI18n();
const router = useRouter();
const productList = [
  {
    name: "header.submenu.internationalShipping",
    href: "/workprocess#internationalShipping",
  },
  {
    name: "header.submenu.projectLogistics",
    href: "/workprocess#projectLogistics",
  },
  {
    name: "header.submenu.landTransportationServices",
    href: "/workprocess#landTransportationServices",
  },
  {
    name: "header.submenu.customsClearanceServices",
    href: "/workprocess#customsClearanceServices",
  },
  {
    name: "header.submenu.warehousingServices",
    href: "/workprocess#warehousingServices",
  },
  {
    name: "header.submenu.internationalAirFreight",
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

// 处理带锚点的路由跳转
const handleAnchorClick = async (href) => {
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
</script>

<style lang="less" scoped>
.footer {
  padding: 0 40px;
  background-color: #424f65;
  .footer_content {
    padding-top: 90px;
    padding-bottom: 20px;
    display: flex;
    gap: 20px;
    .footer_item {
      width: 16.666%;
      display: flex;
      flex-direction: column;
      .desc {
        margin-bottom: 20px;
        font-size: 12px;
        color: #fff;
        line-height: 18px;
        font-weight: 400;
      }
      .title {
        margin-bottom: 10px;
        font-size: 22px;
        line-height: 28px;
        font-weight: 600;
        color: @orange;
        cursor: pointer;
      }
      .link {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 16px;
        cursor: pointer;
        &:hover {
          color: @orange;
        }
      }
      .remark {
        width: 80%;
        margin-bottom: 20px;
        font-size: 18px;
        color: #fff;
        line-height: 24px;
        font-weight: 400;
      }
      .input {
        width: 80%;
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 0;
        font-size: 14px;
        color: @title-color;
        line-height: 14px;
        margin-bottom: 16px;
        // focus 样式
        &:focus {
          border: 1px solid @orange;
        }
        &:focus-visible {
          outline: none;
        }
      }
    }
  }
}
.footer_bottom {
  padding: 20px 0;
  text-align: center;
  font-size: 16px;
  color: #fff;
  line-height: 18px;
  font-weight: 400;
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
  display: inline-block;
  text-align: center;
  width: fit-content;
  align-self: flex-start;
  transition: background-color 0.18s ease, transform 0.18s ease;
  &:hover {
    background: #034460;
    color: #fff;
    transform: translateY(-1px);
  }
}

/* 手机端：底部内容换行堆叠 */
@media (max-width: 768px) {
  .footer {
    padding: 0 16px;

    .footer_content {
      padding-top: 48px;
      flex-wrap: wrap;
      gap: 24px 16px;
    }

    .footer_item {
      width: calc(50% - 8px);
    }

    /* 订阅区在手机端独占一行 */
    .footer_item:last-child {
      width: 100%;
    }

    .footer_item .title {
      font-size: 18px;
      line-height: 24px;
    }

    .footer_item .link {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 10px;
    }

    .footer_item .remark,
    .footer_item .input {
      width: 100%;
    }
  }

  .footer_bottom {
    font-size: 12px;
    line-height: 18px;
    padding: 16px 0 20px;
  }
}
</style>
