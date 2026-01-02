<template>
  <div class="business">
    <div class="layout_container bg_word">
      <div class="business_content">
        <Title title="业务覆盖范围" desc="业务覆盖全球，服务全面" />
        <div class="business_content_flex">
          <div class="business_content_left">
            <img :src="Bs" alt="bs" class="business_content_left_img" />
            <div class="business_content_left_text">
              <span class="title">立远恒通集团资质</span>
              <span class="desc">中国外经贸委批准的一级货运代理</span>
              <span class="desc"
                >中国交通部注册的无船承运人(NVOCC-NV00824)</span
              >
              <span class="desc">美国联邦海事委员会(FMC)注册企业</span>
              <span class="desc"
                >WCA Inter Global&WCA Projects会员(#70521)</span
              >
              <span class="desc"
                >已通过ISO9001质量管理体系、ISO14001环境管理体系</span
              >
              <span class="desc">ISO45001职业健康安全管理体系认证</span>
            </div>
          </div>
          <div class="business_content_right">
            <div class="business_content_right_item" v-for="i in 5" :key="i">
              <img
                :src="Svg1"
                alt="Svg1"
                class="business_content_right_item_img"
              />
              <span class="business_content_right_item_text">OOG项目物流</span>
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
import Svg1 from "@/assets/business/1.svg";
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
      color: #034460;
      transition: color 0.2s ease;
    }
  }
}
</style>
