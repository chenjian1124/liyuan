<template>
  <section class="page">
    <div class="solution_bg">
      <div class="layout_container solution_content" id="solutions_1">
        <Title :title="t('solution_title')" :desc="t('solution_desc')" />
        <div class="content">
          <div class="content_left">
            <div class="content_left_title">
              {{ t("solution_bg_title") }}
            </div>
            <div class="content_left_title">
              {{ t("solution_bg_desc") }}
            </div>
          </div>
          <div class="content_right">
            <div class="content_right_list">
              <div class="content_right_list_item">
                <img
                  src="@/assets/solution/solution_bg1.png"
                  alt="solution1"
                  class="content_right_list_item_img"
                />
                <div class="content_right_list_item_content">
                  <div class="content_right_list_item_title">
                    {{ t("solution_bg_title_1") }}
                  </div>
                  <div class="content_right_list_item_desc">
                    {{ t("solution_bg_desc_1") }}
                  </div>
                </div>
              </div>
              <div class="content_right_list_item">
                <img
                  src="@/assets/solution/solution_bg2.png"
                  alt="solution1"
                  class="content_right_list_item_img"
                />
                <div class="content_right_list_item_content">
                  <div class="content_right_list_item_title">
                    {{ t("solution_bg_title_2") }}
                  </div>
                  <div class="content_right_list_item_desc">
                    {{ t("solution_bg_desc_2") }}
                  </div>
                </div>
              </div>
            </div>
            <div class="content_right_list">
              <div class="content_right_list_item">
                <img
                  src="@/assets/solution/solution_bg3.png"
                  alt="solution1"
                  class="content_right_list_item_img"
                />
                <div class="content_right_list_item_content">
                  <div class="content_right_list_item_title">
                    {{ t("solution_bg_title_3") }}
                  </div>
                  <div class="content_right_list_item_desc">
                    {{ t("solution_bg_desc_3") }}
                  </div>
                </div>
              </div>
              <div class="content_right_list_item">
                <img
                  src="@/assets/solution/solution_bg4.png"
                  alt="solution1"
                  class="content_right_list_item_img"
                />
                <div class="content_right_list_item_content">
                  <div class="content_right_list_item_title">
                    {{ t("solution_bg_title_4") }}
                  </div>
                  <div class="content_right_list_item_desc">
                    {{ t("solution_bg_desc_4") }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 业务 -->
    <Business style="padding-top: 100px" id="solutions_2" />
    <!--化工品 -->
    <div class="solution_chemical" id="solutions_3">
      <div class="layout_container solution_chemical_content">
        <Title
          :title="t('solution_chemical_title')"
          :desc="t('solution_chemical_desc')"
        />
        <div class="solution_chemical_title">
          <span class="text-orange">{{ t("solution_chemical_title1") }}</span
          >{{ t("solution_chemical_title2") }}
        </div>
        <div class="solution_chemical_desc">
          {{ t("solution_chemical_desc1") }}
        </div>
        <img
          src="@/assets/solution/chemica.png"
          alt="chemical"
          class="solution_chemical_img"
        />
      </div>
    </div>
    <!-- 汽车 -->
    <div class="solution_car" id="solutions_4">
      <div class="layout_container solution_car_content">
        <Title
          :title="t('solution_car_title')"
          :desc="t('solution_car_desc')"
        />
        <div class="solution_car_title">
          <span class="text-orange">{{ t("solution_car_title1") }}</span>
        </div>
        <div class="solution_car_desc">
          {{ t("solution_car_desc1") }}
          <br />
          {{ t("solution_car_title2") }}
        </div>
        <div class="solution_car_list">
          <div class="solution_car_list_item">
            <img
              src="@/assets/solution/car1.png"
              alt="car"
              class="solution_car_list_item_img"
            />
            <div class="solution_car_list_item_title">
              {{ t("solution_car_title3") }}
            </div>
          </div>
          <div class="solution_car_list_item">
            <img
              src="@/assets/solution/car2.png"
              alt="car"
              class="solution_car_list_item_img"
            />
            <div class="solution_car_list_item_title">
              {{ t("solution_car_title4") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 物流 -->
    <div class="solution_logistics" id="solutions_5">
      <div class="layout_container solution_logistics_content">
        <Title
          :title="t('solution_logistics_title')"
          :desc="t('solution_logistics_desc')"
        />
        <div class="solution_logistics_info">
          <div class="solution_logistics_info_left">
            <img
              src="@/assets/solution/logistics.png"
              alt="logistics"
              class="solution_logistics_info_left_img"
            />
            <div class="solution_logistics_info_left_text">
              <div class="solution_logistics_info_left_text_title">
                {{ t("solution_logistics_title1") }}
              </div>
              <div class="solution_logistics_info_left_text_desc">
                {{ t("solution_logistics_desc1") }}
              </div>
            </div>
          </div>
          <div class="solution_logistics_info_right">
            <div
              class="solution_logistics_info_right_item"
              v-for="i in 4"
              :key="i"
            >
              <div class="solution_logistics_info_right_item_icon">
                <img
                  :src="logisticsList[i - 1]"
                  alt="logistics"
                  class="solution_logistics_info_right_item_img"
                />
              </div>
              <div class="solution_logistics_info_right_item_text">
                <div class="solution_logistics_info_right_item_text_title">
                  {{ t(`solution_logistics_title${i}`) }}
                </div>
                <div class="solution_logistics_info_right_item_text_desc">
                  {{ t(`solution_logistics_desc${i + 1}`) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 顾问 -->
    <div class="solution_advisor" id="solutions_6">
      <div class="layout_container solution_advisor_content">
        <Title
          :title="t('solution_advisor_title')"
          :desc="t('solution_advisor_desc')"
        />
        <div class="solution_advisor_list">
          <div class="solution_advisor_list_item" v-for="i in 4" :key="i">
            <img
              :src="advisorList[i - 1]"
              alt="advisor"
              class="solution_advisor_list_item_img"
            />
            <div
              class="solution_advisor_list_item_text"
              :style="{ backgroundColor: colorList[i - 1] }"
            >
              <div class="solution_advisor_list_item_text_name">
                {{ t(`solution_advisor_name${i}`) }}
              </div>
              <div class="solution_advisor_list_item_text_site">
                {{ t(`solution_advisor_site${i}`) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <AboutUs id="solutions_7" />
  </section>
</template>

<script setup>
import Title from "@/components/Title.vue";
import Business from "@/components/BusinessSolution.vue";
import AboutUs from "@/components/AboutUs.vue";
import { useI18n } from "vue-i18n";

import Image1 from "@/assets/solution/solution_logistics1.png";
import Image2 from "@/assets/solution/solution_logistics2.png";
import Image3 from "@/assets/solution/solution_logistics3.png";
import Image4 from "@/assets/solution/solution_logistics4.png";

import Advisor1 from "@/assets/solution/advisor1.jpg";
import Advisor2 from "@/assets/solution/advisor2.jpg";
import Advisor3 from "@/assets/solution/advisor3.jpg";
import Advisor4 from "@/assets/solution/advisor4.jpg";

const { t } = useI18n();

const logisticsList = [Image1, Image2, Image3, Image4];
const advisorList = [Advisor1, Advisor2, Advisor3, Advisor4];

const colorList = ["#2e9adb", "#ff9124", "#41d62b", "#2e9adb"];
</script>

<style lang="less" scoped>
.solution_bg {
  background: url("@/assets/solution/bg.png") no-repeat center center;
  background-size: cover;
}
.solution_content {
  padding-top: 100px;
}

.content {
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  .content_left {
    width: 45%;
    padding-right: 80px;
    .content_left_title {
      font-size: 32px;
      line-height: 40px;
      font-weight: 400;
      margin-bottom: 40px;
      color: #3d3a39;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .content_right {
    width: 55%;
    .content_right_list {
      display: flex;
      gap: 40px;
      margin-bottom: 40px;
    }
    .content_right_list_item {
      flex: 1;
      .content_right_list_item_img {
        display: block;
        width: 100%;
        object-fit: cover;
      }
      .content_right_list_item_content {
        background-color: #424f65;
        color: #fff;
        min-height: 170px;
        padding: 20px;
        .content_right_list_item_title {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #fff;
        }
        .content_right_list_item_desc {
          font-size: 14px;
          line-height: 24px;
          color: #fff;
        }
      }
    }
  }
}

//
.solution_chemical {
  // 一半白色，一半灰色
  background: linear-gradient(to bottom, #f5f5f5 75%, #424f65 25%);
  padding-top: 100px;
  .solution_chemical_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
  .solution_chemical_title {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    color: #000;
  }
  .solution_chemical_desc {
    max-width: 1000px;
    font-size: 20px;
    line-height: 24px;
    color: #333;
    text-align: center;
  }
  .solution_chemical_img {
    width: 100%;
    object-fit: cover;
  }
}

//
.solution_car {
  background: #fff;
  padding-top: 100px;
  padding-bottom: 100px;
  .solution_car_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
  .solution_car_title {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    color: #000;
  }
  .solution_car_desc {
    max-width: 1000px;
    font-size: 20px;
    line-height: 30px;
    color: #333;
    text-align: center;
  }
  .solution_car_list {
    display: flex;
    gap: 40px;
    .solution_car_list_item {
      flex: 1;
    }
    .solution_car_list_item_img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
    .solution_car_list_item_title {
      background-color: #424f65;
      padding: 20px;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
    }
  }
}

//
.solution_logistics {
  background: #f5f5f5;
  padding: 100px 0;
  .solution_logistics_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
  .solution_logistics_info {
    display: flex;
    gap: 100px;
  }
  .solution_logistics_info_left {
    flex: 1;
    display: flex;
    flex-direction: column;

    .solution_logistics_info_left_img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
    .solution_logistics_info_left_text {
      display: flex;
      flex-direction: column;
      padding: 32px 0;
      background-color: @orange;
      color: #fff;
      text-align: center;
    }
    .solution_logistics_info_left_text_title {
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      color: #fff;
    }
    .solution_logistics_info_left_text_desc {
      font-size: 20px;
      line-height: 24px;
      color: #fff;
    }
  }
  .solution_logistics_info_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
    .solution_logistics_info_right_item {
      display: flex;
      gap: 40px;
    }
    .solution_logistics_info_right_item_icon {
      width: 100px;
      height: 100px;
      background-color: @orange;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      .solution_logistics_info_right_item_img {
        display: block;
      }
    }
    .solution_logistics_info_right_item_text {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .solution_logistics_info_right_item_text_title {
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      color: #000;
    }
    .solution_logistics_info_right_item_text_desc {
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
      color: #333;
    }
  }
}

//
.solution_advisor {
  background: #fff;
  padding: 100px 0;
  .solution_advisor_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 120px;
  }
  .solution_advisor_list {
    display: flex;
    gap: 40px;
    .solution_advisor_list_item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .solution_advisor_list_item_img {
      display: block;
      width: 96%;
      object-fit: cover;
    }
    .solution_advisor_list_item_text {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #2e9adb;
      padding: 10px 20px;
      color: #fff;
    }
    .solution_advisor_list_item_text_name {
      font-size: 40px;
      line-height: 50px;
      font-weight: 700;
    }
    .solution_advisor_list_item_text_site {
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
    }
  }
}
</style>
