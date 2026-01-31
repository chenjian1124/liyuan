<template>
  <section class="page">
    <!-- 服务 -->
    <Service type="workprocess" />
    <!-- 产品 -->
    <div class="product layout_container">
      <div class="product_list">
        <div class="product_list_item" id="internationalShipping">
          <div class="product_list_item_left">
            <div class="product_list_item_title">{{ t("work_1") }}</div>
            <div class="product_list_item_desc">
              {{ t("workprocess_content_1_title") }}
            </div>
            <div class="product_list_item_desc">
              {{ t("workprocess_content_1_desc") }}
            </div>
            <img src="@/assets/service/1.png" alt="product1" class="product_list_item_icon" />
          </div>
          <div class="product_list_item_right">
            <img src="@/assets/workprocess/1.png" alt="product1" class="product_list_item_img" />
          </div>
        </div>
        <div class="product_list_item" id="projectLogistics">
          <div class="product_list_item_right">
            <img src="@/assets/workprocess/2.png" alt="product1" class="product_list_item_img" />
          </div>
          <div class="product_list_item_left">
            <div class="product_list_item_title">{{ t("work_2") }}</div>
            <div class="product_list_item_desc">
              {{ t("workprocess_content_2_title") }}
            </div>
            <img src="@/assets/service/2.png" alt="product1" class="product_list_item_icon" />
          </div>
        </div>
        <div class="product_list_item" id="landTransportationServices">
          <div class="product_list_item_left">
            <div class="product_list_item_title">{{ t("work_3") }}</div>
            <div class="product_list_item_desc">
              {{ t("workprocess_content_3_title") }}
            </div>

            <img src="@/assets/service/3.png" alt="product1" class="product_list_item_icon" />
          </div>
          <div class="product_list_item_right">
            <img src="@/assets/workprocess/3.png" alt="product1" class="product_list_item_img" />
          </div>
        </div>
        <div class="product_list_item" id="customsClearanceServices">
          <div class="product_list_item_right">
            <img src="@/assets/workprocess/4.png" alt="product1" class="product_list_item_img" />
          </div>
          <div class="product_list_item_left">
            <div class="product_list_item_title">{{ t("work_4") }}</div>
            <div class="product_list_item_desc">
              {{ t("workprocess_content_4_title") }}
            </div>
            <img src="@/assets/service/4.png" alt="product1" class="product_list_item_icon" />
          </div>
        </div>
        <div class="product_list_item" id="warehousingServices">
          <div class="product_list_item_left">
            <div class="product_list_item_title">{{ t("work_5") }}</div>
            <div class="product_list_item_desc">
              {{ t("workprocess_content_5_title") }}
            </div>
            <img src="@/assets/service/5.png" alt="product1" class="product_list_item_icon" />
          </div>
          <div class="product_list_item_right">
            <img src="@/assets/workprocess/5.png" alt="product1" class="product_list_item_img" />
          </div>
        </div>
        <div class="product_list_item" id="internationalAirFreight">
          <div class="product_list_item_right">
            <img src="@/assets/workprocess/6.png" alt="product1" class="product_list_item_img" />
          </div>
          <div class="product_list_item_left">
            <div class="product_list_item_title">{{ t("work_6") }}</div>
            <div class="product_list_item_desc">
              {{ t("workprocess_content_6_title") }}
            </div>
            <img src="@/assets/service/6.png" alt="product1" class="product_list_item_icon" />
          </div>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <AboutUs />
  </section>
</template>

<script setup>
import Service from "@/components/Service.vue";
import AboutUs from "@/components/AboutUs.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="less" scoped>
.product_list_item {
  display: flex;
  justify-content: space-between;
  /* 桌面端：左右两列等高（以更高的一列为准） */
  align-items: stretch;

  .product_list_item_left {
    width: 50%;
    display: flex;
    padding: 40px;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    gap: 20px;

    .product_list_item_title {
      font-size: 40px;
      line-height: 50px;
      font-weight: 700;
      color: @title-color;
    }

    .product_list_item_desc {
      font-size: 24px;
      line-height: 24px;
      font-weight: 400;
      color: #3D3A39;
      font-family: "Source Han Sans CN";
    }

    .product_list_item_icon {
      width: 120px;
      object-fit: cover;
    }
  }

  .product_list_item_right {
    width: 50%;
    /* 让右侧容器跟随父级拉伸高度，图片才能 100% 撑满 */
    display: flex;

    .product_list_item_img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

/* 手机端适配 */
@media (max-width: 768px) {
  .product_list_item {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    margin-bottom: 28px;

    /* 统一都用“图在上，文在下”，避免左右穿插在手机端阅读困难 */
    .product_list_item_right {
      width: 100%;
      order: 1;
    }

    .product_list_item_left {
      width: 100%;
      order: 2;
      padding: 0;
      gap: 12px;

      .product_list_item_title {
        font-size: 22px;
        line-height: 30px;
      }

      .product_list_item_desc {
        font-size: 14px;
        line-height: 22px;
      }

      .product_list_item_icon {
        width: 96px;
      }
    }
  }
}
</style>
