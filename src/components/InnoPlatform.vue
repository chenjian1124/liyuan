<template>
  <div class="business">
    <div class="layout_container bg_word">
      <div class="business_content">
        <div class="home_service">
          <Title :title="t('business_title')" :desc="t('business_desc')" />
          <div class="btn">{{ t("service_more") }}</div>
        </div>

        <div class="business_content_flex">
          <div class="business_content_left">
            <img :src="Inno" alt="bs" class="business_content_left_img" />
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
import Inno from "@/assets/inno/inno-bg.png";
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
    title: "inno_1",
  },
  {
    img: Image2,
    title: "inno_2",
  },
  {
    img: Image3,
    title: "inno_3",
  },
  {
    img: Image4,
    title: "inno_4",
  },
];
</script>

<style lang="less" scoped>
.business {
  background-color: #fff;



  .business_content {
    padding: 100px 0 0;
  }

  .business_content_flex {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-top: 30px;
    padding: 0 20px;

    .business_content_left {
      width: 577px;

      .business_content_left_img {
        width: 100%;
        object-fit: cover;
        display: block;
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

.home_service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
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
