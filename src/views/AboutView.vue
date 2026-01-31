<template>
  <section class="page">
    <div class="banner">
      <img src="@/assets/about/banner-bg.png" alt="banner" class="banner_img" />
      <div class="banner_content">
        <div class="banner_content_title">
          {{ $t("about_us_title") }}
        </div>
        <div class="banner_content_desc">
          {{ $t("about_view_desc") }}<br />
          {{ $t("about_view_desc1") }}
        </div>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="about_intro" id="about_1">
      <div class="layout_container">
        <div class="about_intro_content—_top">
          <div class="about_intro_content—_top_left">
            <div class="about_intro_content—_top_left_title">
              {{ $t("about_intro_title") }}
            </div>
            <div class="about_intro_content—_top_left_desc">
              <p>
                {{ $t("about_intro_desc1") }}
              </p>
              <p>
                {{ $t("about_intro_desc2") }}
              </p>
              <p>
                {{ $t("about_intro_desc3") }}
              </p>
            </div>
          </div>
          <div class="about_intro_content—_top_right">
            <img src="@/assets/about/intro.png" alt="intro_top_right" class="about_intro_content—_top_right_img" />
          </div>
        </div>
        <div class="about_intro_content—_bottom">
          <div class="about_intro_content—_bottom_item" v-for="i in 5" :key="i">
            <div class="about_intro_content—_bottom_item_title" :class="{ 'text-orange': i % 2 == 1 }">
              {{ $t(`about_intro_content_title${i}`) }}
            </div>
            <div class="about_intro_content—_bottom_item_desc">
              {{ $t(`about_intro_content_desc${i}`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发展 -->
    <div class="about_development" id="about_2">
      <div class="layout_container">
        <div class="title_content">
          <Title :title="t('about_development_title')" />
        </div>
      </div>
      <div class="about_development_content">
        <!-- <img
          src="@/assets/about/development.png"
          alt="development"
          class="about_development_content_img"
        /> -->
        <Development />
      </div>
    </div>
    <!-- 代理地图 -->
    <div class="about_agent_map" id="about_3">
      <div class="layout_container">
        <div class="title_content">
          <Title :title="t('about_agent_map_title')" />
        </div>
        <img src="@/assets/about/agent_map.png" alt="agent_map" class="agent_map_img" />
      </div>
    </div>
    <!-- 客户 -->
    <CustomerSwiper id="about_4" />
    <AboutUs />
  </section>
</template>

<script setup>
import Title from "@/components/Title.vue";
import AboutUs from "@/components/AboutUs.vue";
import CustomerSwiper from "@/components/CustomerAbout.vue";
import Development from "@/components/Development.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="less" scoped>
.page {
  .banner {
    position: relative;
    width: 100%;
    height: 446px;

    .banner_img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    .banner_content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 2;
    }

    .banner_content_title {
      font-size: 86px;
      line-height: 100px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 20px;
    }

    .banner_content_desc {
      font-size: 24px;
      line-height: 30px;
      font-weight: 400;
      color: #fff;
    }
  }
}

.about_intro {
  // 一半白色，一半灰色
  background: linear-gradient(to bottom, #f5f5f5 80%, #424f65 20%);
  padding: 140px 0;

  .about_intro_content—_top {
    display: flex;
    justify-content: space-between;
    gap: 80px;

    .about_intro_content—_top_left {
      width: 525px;

      .about_intro_content—_top_left_title {
        margin: 40px 0;
        font-size: 40px;
        line-height: 50px;
        font-weight: 700;
        color: #000;
      }

      .about_intro_content—_top_left_desc {
        font-size: 24px;
        line-height: 32px;
        font-weight: 400;
        color: #3D3A39;
        font-family: "Source Han Sans CN";
        display: flex;
        flex-direction: column;
        gap: 20px;
        white-space: pre-line;
        word-break: break-all;
      }
    }

    .about_intro_content—_top_right {
      flex: 1;

      .about_intro_content—_top_right_img {
        display: block;
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .about_intro_content—_bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 140px;
    gap: 30px;
    text-align: center;

    .about_intro_content—_bottom_item {
      flex: 1;
      padding: 32px;
      background-color: #fff;
      border-bottom: 8px solid #41d62b;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        height: 8px;
        background-color: #ff9124;
        bottom: -8px;
        left: 0;
        width: 50%;
      }

      &::after {
        content: "";
        position: absolute;
        height: 8px;
        background-color: #2e9adb;
        bottom: -8px;
        left: 20%;
        right: 20%;
        width: 60%;
        transform: skew(20deg);
      }

      .about_intro_content—_bottom_item_title {
        font-size: 32px;
        margin-bottom: 20px;
        font-weight: 700;
        color: #000;
      }

      .text-orange {
        color: @orange;
      }

      .about_intro_content—_bottom_item_desc {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #333;
        text-align: left;
      }
    }
  }
}

.about_development {
  .title_content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 120px 0;
  }

  .about_development_content {
    .about_development_content_img {
      display: block;
      width: 100%;
    }
  }
}

.about_agent_map {
  .title_content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 120px 0;
  }

  .agent_map_img {
    display: block;
    width: 100%;
  }
}

/* 手机端适配 */
@media (max-width: 768px) {
  .page {
    .banner {
      height: 260px;

      .banner_content {
        width: 100%;
        padding: 0 16px;
      }

      .banner_content_title {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 10px;
      }

      .banner_content_desc {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }

  .about_intro {
    padding: 56px 0;
    background: linear-gradient(to bottom, #f5f5f5 88%, #424f65 12%);

    .about_intro_content—_top {
      flex-direction: column;
      gap: 20px;

      .about_intro_content—_top_left {
        width: 100%;

        .about_intro_content—_top_left_title {
          margin: 18px 0 10px;
          font-size: 22px;
          line-height: 30px;
        }

        .about_intro_content—_top_left_desc {
          font-size: 14px;
          line-height: 22px;
          word-break: break-word;
        }
      }
    }

    .about_intro_content—_bottom {
      margin-top: 40px;
      flex-wrap: wrap;
      gap: 12px;

      .about_intro_content—_bottom_item {
        flex: none;
        width: 100%;
        padding: 18px;

        .about_intro_content—_bottom_item_title {
          font-size: 20px;
          margin-bottom: 10px;
        }
      }
    }
  }

  .about_development .title_content,
  .about_agent_map .title_content {
    padding: 56px 0 24px;
  }
}
</style>
