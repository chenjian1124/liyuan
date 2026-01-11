<template>
  <section class="page">
    <div class="banner">
      <img src="@/assets/about/banner-bg.png" alt="banner" class="banner_img" />
      <div class="banner_content">
        <div class="banner_content_title">关于我们</div>
        <div class="banner_content_desc">
          立远恒通力争成为全球领先的综合物流解决方案提供商,<br />
          通过我们的专业知识和完善的服务网络,为客户提供无缝的、高效的和可靠的物流服务。
        </div>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="about_intro">
      <div class="layout_container">
        <div class="about_intro_content—_top">
          <div class="about_intro_content—_top_left">
            <div class="about_intro_content—_top_left_title">立远恒通简介</div>
            <div class="about_intro_content—_top_left_desc">
              <p>
                立远恒通集团是国家商务部批准的一级国际货运代理公司集团,同时也是交通运输部批准的具有无船承运业务经营资格的无船承运人。
              </p>
              <p>
                公司先后在青岛、宁波、天津、广州等地区成立了公司独资管理的分支机构,目前公司员工达500+余人,为国内外客户提供专业的物流服务。
              </p>
              <p>
                经过多年的发展,依托WCA的完善的服务网络,我们的服务覆盖拉丁美洲、北美洲、亚洲、欧洲和非洲市场,尤其在拉丁美洲航线上积累了非常丰富的经验并建立了强大的海外代理服务网络,公司目前是CMA/MSK/MSC/ONE/HPL/PIL/COSCO/OOCL/EMC/WHL/ZIM/HMM等多家船公司的战略合作伙伴,为客户提供稳定、高效、可靠、低碳的物流解决方案。
              </p>
            </div>
          </div>
          <div class="about_intro_content—_top_right">
            <img
              src="@/assets/about/intro.png"
              alt="intro_top_right"
              class="about_intro_content—_top_right_img"
            />
          </div>
        </div>
        <div class="about_intro_content—_bottom">
          <div class="about_intro_content—_bottom_item" v-for="i in 5" :key="i">
            <div class="about_intro_content—_bottom_item_title">公司愿景</div>
            <div class="about_intro_content—_bottom_item_desc">
              我们力争成为全球领先的综合物流解决方案提供商，通过我们的专业知识和完善的服务网络，为客户提供无缝的、高效的和可靠的物流服务。
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发展 -->
    <div class="about_development">
      <div class="layout_container">
        <div class="title_content"><Title title="发展历程" /></div>
      </div>
      <div class="about_development_content">
        <img
          src="@/assets/about/development.png"
          alt="development"
          class="about_development_content_img"
        />
      </div>
    </div>
    <!-- 代理地图 -->
    <div class="about_agent_map">
      <div class="layout_container">
        <div class="title_content"><Title title="全球代理地图" /></div>
        <img
          src="@/assets/about/agent_map.png"
          alt="agent_map"
          class="agent_map_img"
        />
      </div>
    </div>
    <!-- 客户 -->
    <CustomerSwiper />
    <AboutUs />
  </section>
</template>

<script setup>
import Title from "@/components/Title.vue";
import AboutUs from "@/components/AboutUs.vue";
import CustomerSwiper from "@/components/CustomerSwiperAbout.vue";
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
    gap: 60px;
    .about_intro_content—_top_left {
      width: 660px;
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
        color: #333;
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
</style>
