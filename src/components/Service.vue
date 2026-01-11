<template>
  <div class="service">
    <div class="service-bg"></div>
    <div class="layout_container">
      <div class="home_service" v-if="type === 'home'">
        <Title :title="t('service_title')" :desc="t('service_desc')" />
        <div class="btn">{{ t("service_more") }}</div>
      </div>
      <div class="work_process_service" v-if="type === 'workprocess'">
        <Title
          title="产品服务"
          desc="为客户提供多方位的优质服务，是我们的宗旨"
        />
      </div>

      <div class="service-content">
        <div class="service-content-item" v-for="i in 6" :key="i">
          <div class="servive_box">
            <div class="service_box_icon">
              <img class="icon" :src="ServiceImg[i]" />
            </div>
            <span class="title">
              {{ t(`work_${i}`) }}
            </span>
            <span class="desc">{{ t(`work_${i}_desc`) }}</span>
            <More />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "@/assets/logo.svg";
import Service1 from "@/assets/service/1.png";
import Service2 from "@/assets/service/2.png";
import Service3 from "@/assets/service/3.png";
import Service4 from "@/assets/service/4.png";
import Service5 from "@/assets/service/5.png";
import Service6 from "@/assets/service/6.png";
import More from "@/components/More.vue";
import Title from "@/components/Title.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
  type: {
    type: String,
    default: "home",
  },
});

const ServiceImg = [
  "",
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
  Service6,
];
</script>

<style lang="less" scoped>
.service {
  margin: 100px 0 0;
  position: relative;
  .service-bg {
    height: 50%;
    background-color: #424f65;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .layout_container {
    position: relative;
    z-index: 2;
  }
  .home_service {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
  }
  .work_process_service {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
  }
}

.service-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .service-content-item {
    width: 33.33%;
    padding: 0 10px;
    margin-bottom: 30px;
    cursor: pointer;
  }
  .servive_box {
    background-color: #fff;
    padding: 40px;
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #ff9124;
    transition: transform 220ms ease, box-shadow 220ms ease,
      border-color 220ms ease;
    .service_box_icon {
      height: 100px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon {
      width: 100px;
      height: 100px;
      transition: transform 220ms ease;
    }
    .title {
      font-size: 22px;
      line-height: 32px;
      color: #034460;
      font-weight: 600;
      margin-bottom: 15px;
      transition: color 220ms ease;
    }
    .desc {
      font-size: 14px;
      line-height: 24px;
      color: #041c2f;
      margin-bottom: 35px;
      height: 72px;
    }
  }

  /* 仅在支持 hover 的设备上启用：避免移动端误触发 */
  @media (hover: hover) and (pointer: fine) {
    .service-content-item:hover {
      .servive_box {
        transform: translateY(-6px);
        border-color: rgba(3, 68, 96, 0.18);
        box-shadow: 0 16px 40px rgba(3, 68, 96, 0.18);
      }

      .title {
        color: #02384f;
      }

      .icon {
        transform: scale(1.04);
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
</style>
