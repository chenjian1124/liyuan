<template>
  <section class="page">
    <!-- 服务 -->
    <Service type="workprocess" />
    <!-- 产品 -->
    <div class="product layout_container">
      <div class="product_list">
        <div class="product_list_item" id="internationalShipping">
          <div class="product_list_item_left">
            <div class="product_list_item_title">国际海运</div>
            <div class="product_list_item_desc">
              立远恒通长期与CMA、MSK、MSC、HPL、COSCO、PIL、ONE、EMC等知名集装箱班轮公司合作，提供覆盖全球的多式联运服务，包括门到门的全流程解决方案。
            </div>
            <div class="product_list_item_desc">
              公司拥有无船承运资质，可签发提单或多式联运提单，客户仅需一次委托，货物即可全程一票直达。
            </div>
            <img
              src="@/assets/product/icon1.png"
              alt="product1"
              class="product_list_item_icon"
            />
          </div>
          <div class="product_list_item_right">
            <img
              src="@/assets/product/1.png"
              alt="product1"
              class="product_list_item_img"
            />
          </div>
        </div>
        <div class="product_list_item">
          <div class="product_list_item_right">
            <img
              src="@/assets/product/1.png"
              alt="product1"
              class="product_list_item_img"
            />
          </div>
          <div class="product_list_item_left">
            <div class="product_list_item_title">国际海运</div>
            <div class="product_list_item_desc">
              立远恒通长期与CMA、MSK、MSC、HPL、COSCO、PIL、ONE、EMC等知名集装箱班轮公司合作，提供覆盖全球的多式联运服务，包括门到门的全流程解决方案。
            </div>
            <img
              src="@/assets/product/icon1.png"
              alt="product1"
              class="product_list_item_icon"
            />
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
  align-items: center;
  .product_list_item_left {
    width: 50%;
    display: flex;
    padding: 0 40px;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    gap: 20px;
    .product_list_item_title {
      font-size: 40px;
      line-height: 32px;
      font-weight: 700;
      color: #034460;
    }
    .product_list_item_desc {
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
      color: #424f65;
    }
    .product_list_item_icon {
      width: 160px;
      object-fit: cover;
    }
  }
  .product_list_item_right {
    width: 50%;
    .product_list_item_img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
