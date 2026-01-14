<template>
  <div class="business">
    <div class="layout_container bg_word">
      <div class="business_content">
        <Title
          :title="t('solution_business_title')"
          :desc="t('solution_business_desc')"
        />
        <div class="business_content_flex">
          <div class="business_content_left">
            <img :src="Bs" alt="bs" class="business_content_left_img" />
            <div class="business_content_left_text">
              <span class="title">{{ t("solution_business_title1") }}</span>
              <span class="desc">{{ t("solution_business_desc_1") }}</span>
            </div>
          </div>
          <div class="business_content_right">
            <div
              class="business_content_right_item"
              v-for="item in businessList"
              :key="item.title"
            >
              <img
                :src="item.img"
                alt="item.title"
                class="business_content_right_item_img"
              />
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
import Bs from "@/assets/solution/solution_business.png";
import Image1 from "@/assets/business/1.png";
import Image2 from "@/assets/business/2.png";
import Image3 from "@/assets/business/3.png";
import Image4 from "@/assets/business/4.png";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const businessList = [
  {
    img: Image1,
    title: "solution_business_1",
  },
  {
    img: Image2,
    title: "solution_business_2",
  },
  {
    img: Image3,
    title: "solution_business_3",
  },
  {
    img: Image4,
    title: "solution_business_4",
  },
];
</script>

<style lang="less" scoped>
.business {
  background-color: #fff;

  .bg_word {
    background: url("@/assets/world-bg.png") no-repeat top;
    padding-bottom: 100px;
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
          font-size: 32px;
          line-height: 40px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .desc {
          font-family: epilogue, sans-serif;
          font-size: 20px;
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
      color: #034460;
      transition: color 0.2s ease;
    }
  }
}

/* 手机端适配 */
@media (max-width: 768px) {
  .business {
    .bg_word {
      padding-bottom: 56px;
    }
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
          .desc {
            font-size: 14px;
            line-height: 22px;
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
