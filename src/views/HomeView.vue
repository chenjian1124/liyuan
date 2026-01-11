<template>
  <section class="page">
    <!-- 轮播图 -->
    <MySwiper />
    <!-- 客户 -->
    <CustomerSwiper />
    <!-- 服务 -->
    <Service />
    <!-- 业务 -->
    <Business />
    <!-- BI看板 -->
    <div class="bi">
      <div class="layout_container">
        <div class="bi_title">
          <Title :title="t('bi_title')" :desc="t('bi_desc')" />
        </div>
        <div class="bi_list">
          <div class="bi_list_item" v-for="item in biList" :key="item">
            <img :src="getBiImg(item)" alt="Bi1" class="bi_list_item_img" />
            <span class="bi_list_item_text">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 一带一路 -->
    <div class="one_belt_one_road">
      <!-- <img :src="OneRoad" alt="OneRoad" class="one_belt_one_road_img" /> -->
      <div class="one_road-position">
        <div class="one_belt_one_road_title">
          <Title
            :title="t('one_belt_one_road_title')"
            :desc="t('one_belt_one_road_desc')"
            titlecolor="#fff"
            desccolor="#fff"
          />
        </div>
        <div class="one_belt_one_road_text">
          <span class="one_belt_one_road_text_text">{{
            t("one_belt_one_road_text")
          }}</span>
          <span class="one_belt_one_road_text_desc">{{
            t("one_belt_one_road_text_desc")
          }}</span>
        </div>
      </div>
    </div>
    <!-- 全球网络 -->
    <div class="global_network">
      <div class="layout_container global_bg">
        <div class="global_network_content">
          <div class="global_network_title">
            {{ t("global_network_title1")
            }}<span class="text-orange">{{ t("global_network_title2") }}</span
            >，<span class="text-orange">{{ t("global_network_title3") }}</span
            >{{ t("global_network_title4") }}，{{ t("global_network_title5")
            }}<span class="text-orange">{{ t("global_network_title6") }}</span>
          </div>
          <div class="global_network_desc">
            {{ t("global_network_desc") }}
          </div>
          <div class="global_network_list">
            <div
              class="global_network_list_item"
              v-for="item in globalNetworkList"
              :key="item.text"
            >
              <img
                :src="item.img"
                alt="Global1"
                class="global_network_list_item_img"
              />
              <span class="global_network_list_item_text">{{ item.text }}</span>
              <span class="global_network_list_item_desc">{{
                t(item.desc)
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 资讯 -->
    <div class="news">
      <div class="layout_container news_bg">
        <div class="news_title">
          <Title title="最新资讯" />
        </div>
        <div class="news_list">
          <div class="news_list_item" v-for="item in 3" :key="item">
            <img :src="News1" alt="News1" class="news_list_item_img" />
            <div class="news_list_item_content">
              <span class="news_list_item_text">新闻标题</span>
              <More text="查看细节" textcolor="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 网络 -->
    <div class="network">
      <div class="layout_container">
        <div class="network_content">
          <div class="network_title">
            网络<span class="text-orange">全国</span>，全球优化<span
              class="text-orange"
              >资源配置</span
            >
          </div>
          <div class="network_desc">
            遍及全球几十个国家，超过100家稳固合作代理，<br />
            覆盖120多个全球重点港口。立远集团物通世界，荟萃全球！
          </div>
          <div class="network_video">
            <video src="@/assets/video/footer.mov" autoplay muted loop></video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import MySwiper from "@/components/MySwiper.vue";
import CustomerSwiper from "@/components/CustomerSwiper.vue";
import Service from "@/components/Service.vue";
import Business from "@/components/Business.vue";
import Title from "@/components/Title.vue";
import Global1 from "@/assets/global/1.svg";
import News1 from "@/assets/news/1.png";
import More from "@/components/More.vue";

import GlobalNetwork1 from "@/assets/network/1.png";
import GlobalNetwork2 from "@/assets/network/2.png";
import GlobalNetwork3 from "@/assets/network/3.png";
import GlobalNetwork4 from "@/assets/network/4.png";

const { t } = useI18n();
const biList = [2022, 2023, 2024, 2025];

// Vite 的 import.meta.glob 返回的 key 是“实际文件路径”，不要用 ../assets 这种相对路径去拼
// 这里用 /src 绝对路径 glob，并把文件名（例如 2025）映射到图片 url，避免 key 不匹配导致加载不出来
const biImgModules = import.meta.glob("/src/assets/bi/*.svg", {
  eager: true,
  import: "default",
});

const biImgMap = Object.fromEntries(
  Object.entries(biImgModules).map(([path, url]) => {
    const fileName = path.split("/").pop() || "";
    const key = fileName.replace(".svg", ""); // 2022/2023/2024/2025
    return [key, url];
  })
);
const getBiImg = (item) => {
  return biImgMap[String(item)] || "";
};

const globalNetworkList = [
  {
    img: GlobalNetwork1,
    text: "100+",
    desc: "global_network_desc_1",
  },
  {
    img: GlobalNetwork2,
    text: "80+",
    desc: "global_network_desc_2",
  },
  {
    img: GlobalNetwork3,
    text: "8+",
    desc: "global_network_desc_3",
  },
  {
    img: GlobalNetwork4,
    text: "500+",
    desc: "global_network_desc_4",
  },
];
</script>

<style lang="less" scoped>
.bi {
  background-color: #fff;
  padding-bottom: 100px;
  .bi_title {
    padding: 100px 0;
    display: flex;
    justify-content: left;
  }
  .bi_list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    .bi_list_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      &:hover {
        .bi_list_item_text {
          color: @orange;
        }
        .bi_list_item_img {
          transform: scale(1.05);
        }
      }
    }
    .bi_list_item_img {
      width: 256px;
      height: 256px;
      object-fit: cover;
    }
    .bi_list_item_text {
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      color: #034460;
    }
  }
}

.one_belt_one_road {
  height: 1080px;
  background: url("@/assets/home/one-road.png") no-repeat center center;
  background-size: cover;
  border-bottom: 8px solid @orange;
  .one_road-position {
    height: 100%;
    padding: 130px 40px 0;
    display: flex;
    flex-direction: column;
    .one_belt_one_road_title {
      display: flex;
      justify-content: left;
    }
    .one_belt_one_road_text {
      margin-top: 300px;
      min-width: 500px;
      max-width: 800px;
      display: flex;
      flex-direction: column;
      justify-content: left;
      .one_belt_one_road_text_text {
        font-size: 40px;
        line-height: 48px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 20px;
      }
      .one_belt_one_road_text_desc {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        color: #fff;
      }
    }
  }
}
.global_network {
  padding-top: 50px;
  background-color: #fff;
  .global_bg {
    background: url("@/assets/home/global-bg.png") no-repeat top center;
    background-size: cover;
    padding-top: 160px;
    padding-bottom: 160px;
    .global_network_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 80px;
    }
    .global_network_title {
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      color: rgba(33, 37, 41, 1);
      text-align: center;
    }
    .global_network_desc {
      max-width: 800px;
      font-size: 24px;
      line-height: 30px;
      font-weight: 700;
      color: rgba(33, 37, 41, 1);
      text-align: center;
    }
    .global_network_list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .global_network_list_item {
        width: 23%;
        min-height: 256px;
        background-color: #fff;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        padding: 24px;
        position: relative;
        border-bottom: 8px solid #41d62b;
        border-radius: 6px 6px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
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
      }
      .global_network_list_item_img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
      .global_network_list_item_text {
        font-size: 40px;
        line-height: 48px;
        font-weight: 700;
        color: @orange;
      }
      .global_network_list_item_desc {
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
        color: rgba(33, 37, 41, 1);
      }
    }
  }
}

.news {
  background-color: #fff;
  padding-top: 50px;
  .news_title {
    display: flex;
    justify-content: left;
  }
  .news_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 0;
    .news_list_item {
      margin-bottom: 30px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #424f65;
      .news_list_item_img {
        height: 400px;
        object-fit: cover;
      }
      .news_list_item_content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100px;
        gap: 10px;
      }
      .news_list_item_text {
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        color: #fff;
        &:hover {
          color: @orange;
        }
      }
    }
  }
}

.network {
  // 背景色从上到下 一半为#041c2f 一半为#424f65
  padding-top: 100px;
  background: linear-gradient(to bottom, #f5f5f5 85%, #424f65 15%);

  .network_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 0 144px;
  }
  .network_title {
    font-size: 86px;
    line-height: 100%;
    font-weight: 700;
    text-align: center;
    color: #000;
  }
  .network_desc {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    text-align: center;
    color: #000;
  }

  .network_video {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    overflow: hidden;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
