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
        <div ref="biListEl" class="bi_list">
          <div class="bi_list_item" v-for="(item, index) in biList" :key="item.year">
            <div class="bi_list_item_bg">
              <img :src="item.img" alt="Bi1" class="bi_list_item_img" />
              <div class="bi_list_item_bg_text">
                <span class="bi_list_item_bg_text_text">{{ biDisplayText[index] }} <span style="font-size: 18px; ">票</span></span>
                <span class="bi_list_item_bg_text_desc">{{ t(item.desc) }}</span>
              </div>
            </div>
            <span class="bi_list_item_text">{{ item.year }}</span>
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
          <div ref="globalNetworkListEl" class="global_network_list">
            <div
              class="global_network_list_item"
              v-for="(item, index) in globalNetworkList"
              :key="item.text"
            >
              <img
                :src="item.img"
                alt="Global1"
                class="global_network_list_item_img"
              />
              <span class="global_network_list_item_text">{{
                globalNetworkDisplayText[index]
              }}</span>
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
          <Title :title="t('news_title')" />
        </div>
        <div class="news_list">
          <div class="news_list_item" v-for="item in newsList" :key="item">
            <img :src="item.img" alt="News1" class="news_list_item_img" />
            <div class="news_list_item_content">
              <span class="news_list_item_text">{{ t(item.text) }}</span>
              <More :text="t('more')" textcolor="#fff" />
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
            {{ t("network_title1")
            }}<span class="text-orange">{{ t("network_title2") }}</span
            >{{ t("network_title3")
            }}<span class="text-orange">{{ t("network_title4") }}</span>
          </div>
          <div class="network_desc">
            {{ t("network_desc1") }}
            <br />
            {{ t("network_desc2") }}
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
import CustomerSwiper from "@/components/Customer.vue";
import Service from "@/components/Service.vue";
import Business from "@/components/Business.vue";
import Title from "@/components/Title.vue";
import Global1 from "@/assets/global/1.svg";
import News1 from "@/assets/news/1.png";
import News2 from "@/assets/news/2.png";
import News3 from "@/assets/news/3.png";
import More from "@/components/More.vue";

import GlobalNetwork1 from "@/assets/network/1.png";
import GlobalNetwork2 from "@/assets/network/2.png";
import GlobalNetwork3 from "@/assets/network/3.png";
import GlobalNetwork4 from "@/assets/network/4.png";

import Bi2022 from "@/assets/bi/2022.png";
import Bi2023 from "@/assets/bi/2023.png";
import Bi2024 from "@/assets/bi/2024.png";
import Bi2025 from "@/assets/bi/2025.png";


const { t } = useI18n();
const biList = [{
  year: 2022,
  img: Bi2022,
  text: "36,985",
  desc: "bi_desc_1",
}, {
  year: 2023,
  img: Bi2023,
  text: "57,303",
  desc: "bi_desc_2",
}, {
  year: 2024,
  img: Bi2024,
  text: "85,955",
  desc: "bi_desc_3",
}, {
  year: 2025,
  img: Bi2025,
  text: "95,888",
  desc: "bi_desc_4",
}];

// BI看板数字跳动效果（进入可视区触发一次）
const biListEl = ref(null);
const biDisplayText = ref(
  biList.map(() => "0")
);

const hasStartedBiCountUp = ref(false);
const biRafIds = [];
let biObserver = null;

const parseNumberWithComma = (text) => {
  const raw = String(text ?? "");
  // 兼容 "36,985" / "36985" 等格式
  const onlyNum = raw.replace(/,/g, "");
  const num = Number.parseInt(onlyNum, 10);
  return Number.isFinite(num) ? num : 0;
};

const formatIntegerWithComma = (num) => {
  const safe = Number.isFinite(num) ? Math.max(0, Math.floor(num)) : 0;
  // 使用 toLocaleString 生成千分位分隔
  return safe.toLocaleString();
};

const startBiCountUp = () => {
  if (hasStartedBiCountUp.value) return;
  hasStartedBiCountUp.value = true;

  biList.forEach((item, index) => {
    const targetNum = parseNumberWithComma(item.text);
    const from = 0;
    const duration = 1200 + index * 150;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic：前快后慢，更自然
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.floor(from + (targetNum - from) * eased);
      biDisplayText.value[index] = formatIntegerWithComma(current);

      if (t < 1) {
        biRafIds[index] = requestAnimationFrame(tick);
      }
    };

    biRafIds[index] = requestAnimationFrame(tick);
  });
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

// 全球网络数字增长效果（进入可视区触发一次）
const globalNetworkListEl = ref(null);
const globalNetworkDisplayText = ref(
  globalNetworkList.map((item) => {
    const match = String(item.text).match(/^(\d+)(.*)$/);
    const suffix = match?.[2] ?? "";
    return `0${suffix}`;
  })
);

const hasStartedGlobalNetworkCountUp = ref(false);
const globalNetworkRafIds = [];
let globalNetworkObserver = null;

const parseNumberText = (text) => {
  const match = String(text).match(/^(\d+)(.*)$/);
  return {
    num: match ? Number(match[1]) : 0,
    suffix: match?.[2] ?? "",
  };
};

const startGlobalNetworkCountUp = () => {
  if (hasStartedGlobalNetworkCountUp.value) return;
  hasStartedGlobalNetworkCountUp.value = true;

  globalNetworkList.forEach((item, index) => {
    const { num: targetNum, suffix } = parseNumberText(item.text);
    const from = 0;
    const duration = 1200 + index * 150;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic：前快后慢，更自然
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.floor(from + (targetNum - from) * eased);
      globalNetworkDisplayText.value[index] = `${current}${suffix}`;

      if (t < 1) {
        globalNetworkRafIds[index] = requestAnimationFrame(tick);
      }
    };

    globalNetworkRafIds[index] = requestAnimationFrame(tick);
  });
};

onMounted(() => {
  // 不支持 IntersectionObserver 的环境就直接执行
  if (typeof IntersectionObserver === "undefined") {
    startBiCountUp();
  } else {
    biObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          startBiCountUp();
          biObserver?.disconnect();
          biObserver = null;
        }
      },
      { threshold: 0.25 }
    );

    if (biListEl.value) {
      biObserver.observe(biListEl.value);
    } else {
      // 兜底：ref 没拿到时直接执行
      startBiCountUp();
    }
  }

  // 不支持 IntersectionObserver 的环境就直接执行
  if (typeof IntersectionObserver === "undefined") {
    startGlobalNetworkCountUp();
    return;
  }

  globalNetworkObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting) {
        startGlobalNetworkCountUp();
        globalNetworkObserver?.disconnect();
        globalNetworkObserver = null;
      }
    },
    { threshold: 0.25 }
  );

  if (globalNetworkListEl.value) {
    globalNetworkObserver.observe(globalNetworkListEl.value);
  } else {
    // 兜底：ref 没拿到时直接执行
    startGlobalNetworkCountUp();
  }
});

onBeforeUnmount(() => {
  biObserver?.disconnect();
  biObserver = null;
  biRafIds.forEach((id) => {
    if (id) cancelAnimationFrame(id);
  });

  globalNetworkObserver?.disconnect();
  globalNetworkObserver = null;
  globalNetworkRafIds.forEach((id) => {
    if (id) cancelAnimationFrame(id);
  });
});

const newsList = [
  {
    img: News1,
    text: "news_title_1",
  },
  {
    img: News2,
    text: "news_title_2",
  },
  {
    img: News3,
    text: "news_title_3",
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
      cursor: pointer;
      .bi_list_item_bg {
        width: 256px;
        height: 256px;
        position: relative;
        .bi_list_item_bg_text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70%;
          height: 70%;
          background-color: #424f65;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          .bi_list_item_bg_text_text {
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
            color: #fff;
          }
          .bi_list_item_bg_text_desc {
            font-size: 16px;
            line-height: 22px;
            font-weight: 400;
            color: #fff;
          }
        }
      }
      &:hover {
        .bi_list_item_text {
          color: @orange;
        }
        .bi_list_item_bg {
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
      color: @title-color;
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
    gap: 40px;
    .news_list_item {
      flex: 1;
      margin-bottom: 30px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #424f65;
      .news_list_item_img {
        width: 100%;
        object-fit: cover;
      }
      .news_list_item_content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        min-height: 100px;
        gap: 10px;
      }
      .news_list_item_text {
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        color: #fff;
        min-height: 48px;
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

/* 手机端适配 */
@media (max-width: 768px) {
  .bi {
    padding-bottom: 56px;
    .bi_title {
      padding: 56px 0 24px;
    }
    .bi_list {
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 16px;
      .bi_list_item_img {
        width: 120px;
        height: 120px;
      }
      .bi_list_item_text {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  .one_belt_one_road {
    height: auto;
    min-height: 520px;
    .one_road-position {
      padding: 72px 16px 40px;
      .one_belt_one_road_text {
        margin-top: 120px;
        min-width: 0;
        max-width: 100%;
        .one_belt_one_road_text_text {
          font-size: 24px;
          line-height: 32px;
        }
        .one_belt_one_road_text_desc {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }

  .global_network {
    padding-top: 24px;
    .global_bg {
      padding-top: 72px;
      padding-bottom: 72px;
      .global_network_content {
        gap: 28px;
      }
      .global_network_title {
        font-size: 24px;
        line-height: 32px;
      }
      .global_network_desc {
        font-size: 14px;
        line-height: 22px;
      }
      .global_network_list {
        flex-wrap: wrap;
        gap: 14px;
        .global_network_list_item {
          width: 100%;
          min-height: 0;
          padding: 18px;
        }
        .global_network_list_item_img {
          width: 56px;
          height: 56px;
        }
        .global_network_list_item_text {
          font-size: 28px;
          line-height: 34px;
        }
        .global_network_list_item_desc {
          font-size: 14px;
          line-height: 20px;
          text-align: center;
        }
      }
    }
  }

  .news {
    padding-top: 24px;
    .news_list {
      flex-direction: column;
      padding: 24px 0 40px;
      gap: 16px;
    }
  }

  .network {
    padding-top: 56px;
    background: linear-gradient(to bottom, #f5f5f5 88%, #424f65 12%);
    .network_content {
      padding: 0;
      gap: 18px;
    }
    .network_title {
      font-size: 32px;
    }
    .network_desc {
      font-size: 14px;
      line-height: 22px;
      padding: 0 8px;
    }
  }
}
</style>
