<template>
  <div class="business">
    <div class="layout_container bg_word">
      <div class="business_content">
        <Title :title="t('business_title')" :desc="t('business_desc')" />
        <div class="business_content_flex">
          <div class="business_content_left">
            <img :src="Bs" alt="bs" class="business_content_left_img" />
            <div class="business_content_left_text">
              <span class="title">{{ t("business_title1") }}</span>
              <span class="desc">{{ t("business_desc_1") }}</span>
              <span class="desc">{{ t("business_desc_2") }}</span>
              <span class="desc">{{ t("business_desc_3") }}</span>
              <span class="desc">{{ t("business_desc_4") }}</span>
              <span class="desc">{{ t("business_desc_5") }}</span>
              <span class="desc">{{ t("business_desc_6") }}</span>
            </div>
          </div>
          <div class="business_content_right">
            <div class="business_content_right_item" v-for="item in businessList" :key="item.title">
              <img :src="item.img" alt="item.title" class="business_content_right_item_img" />
              <span class="business_content_right_item_text">{{
                t(item.title)
                }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Title.vue";
import Bs from "@/assets/bs.png";
import Image1 from "@/assets/business/1.png";
import Image2 from "@/assets/business/2.png";
import Image3 from "@/assets/business/3.png";
import Image4 from "@/assets/business/4.png";
import Image5 from "@/assets/business/5.png";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const businessList = [
  {
    img: Image1,
    title: "business_1",
  },
  {
    img: Image2,
    title: "business_2",
  },
  {
    img: Image3,
    title: "business_3",
  },
  {
    img: Image4,
    title: "business_4",
  },
  {
    img: Image5,
    title: "business_5",
  },
];
</script>

<style lang="less" scoped>
.business {
  background-color: #fff;

  .bg_word {
    background: url("@/assets/world-bg.png") no-repeat top;
  }

  .business_content {
    padding: 100px 0 0;
  }

  .business_content_flex {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 20px;

    .business_content_left {
      width: 800px;
      background-color: #424f65;

      .business_content_left_img {
        width: 100%;
        object-fit: cover;
      }

      .business_content_left_text {
        padding: 40px;
        display: flex;
        flex-direction: column;

        color: #fff;

        .title {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .desc {
          font-family: epilogue, sans-serif;
          font-size: 14px;
          line-height: 24px;
          font-weight: 400;
        }
      }
    }
  }
}

.business_content_right {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;

  .business_content_right_item {
    display: flex;
    align-items: center;
    gap: 30px;

    &:hover {
      .business_content_right_item_text {
        color: @orange;
      }
    }

    .business_content_right_item_img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }

    .business_content_right_item_text {
      font-size: 32px;
      line-height: 36px;
      font-weight: 600;
      color: @title-color;
      transition: color 0.2s ease;
    }
  }
}

/* 手机端适配 */
@media (max-width: 768px) {
  .business {
    .business_content {
      padding-top: 56px;
    }

    .business_content_flex {
      flex-direction: column;
      padding: 0;
      gap: 16px;

      .business_content_left {
        width: 100%;

        .business_content_left_text {
          padding: 18px;

          .title {
            font-size: 18px;
            line-height: 26px;
          }
        }
      }
    }
  }

  .business_content_right {
    padding: 0;
    gap: 14px;

    .business_content_right_item {
      gap: 12px;

      .business_content_right_item_img {
        width: 52px;
        height: 52px;
      }

      .business_content_right_item_text {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
}
</style>
