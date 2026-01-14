<template>
  <section class="page">
    <div class="banner">
      <img
        src="@/assets/contact/banner-bg.png"
        alt="banner"
        class="banner_img"
      />
      <div class="banner_content">
        <div class="banner_content_title">{{ t("contact_title") }}</div>
        <div class="banner_content_desc">
          {{ t("contact_desc") }}
        </div>
      </div>
    </div>
    <!--  办公地址 -->
    <div class="office_address">
      <div class="layout_container">
        <div class="office_address_content">
          <div class="title_content">
            <Title :title="t('office_address_title')" />
          </div>
        </div>
        <div class="office_address_list">
          <div
            :class="[
              `office_address_list_item_${item.type}`,
              'office_address_list_item',
            ]"
            v-for="item in list"
            :key="item.name"
            @mouseenter="showOffice(item.type)"
            @mouseleave="hideOffice(item.type)"
          >
            <div class="office_address_list_item_content">
              <img
                src="@/assets/contact/name.png"
                alt="office_address_list_item_content_img"
                class="office_address_list_item_content_img"
              />
              <div class="office_address_list_item_content_title">
                {{ item.name }}
              </div>
            </div>
            <div class="office_address_list_item_content">
              <img
                src="@/assets/contact/site.png"
                alt="office_address_list_item_content_img"
                class="office_address_list_item_content_img"
              />
              <div class="office_address_list_item_content_title">
                {{ item.addres }}
              </div>
            </div>
            <div class="office_address_list_item_content" v-if="item.tel">
              <img
                src="@/assets/contact/tel.png"
                alt="office_address_list_item_content_img"
                class="office_address_list_item_content_img"
              />
              <div class="office_address_list_item_content_title">
                {{ item.tel }}
              </div>
            </div>
          </div>
          <div class="office_map">
            <img
              src="@/assets/contact/map.png"
              alt="office_map"
              class="office_map_img"
            />
            <span
              class="office_map_text tjOffice"
              @mouseenter="showOffice('tjOffice')"
              @mouseleave="hideOffice('tjOffice')"
            >
              {{ t("offic_site4") }}</span
            >
            <span
              class="office_map_text qdOffice"
              @mouseenter="showOffice('qdOffice')"
              @mouseleave="hideOffice('qdOffice')"
            >
              {{ t("offic_site2") }}</span
            >
            <span
              class="office_map_text shOffice"
              @mouseenter="showOffice('shOffice')"
              @mouseleave="hideOffice('shOffice')"
            >
              {{ t("offic_site1") }}</span
            >
            <span
              class="office_map_text nbOffice"
              @mouseenter="showOffice('nbOffice')"
              @mouseleave="hideOffice('nbOffice')"
            >
              {{ t("offic_site3") }}</span
            >
            <span
              class="office_map_text gzOffice"
              @mouseenter="showOffice('gzOffice')"
              @mouseleave="hideOffice('gzOffice')"
            >
              {{ t("offic_site5") }}</span
            >
            <span
              class="office_map_text mxgOffice"
              @mouseenter="showOffice('mxgOffice')"
              @mouseleave="hideOffice('mxgOffice')"
            >
              {{ t("offic_site6") }}</span
            >
            <div class="office_map_info" v-if="imageSrc && officeInfoText">
              <img
                :src="imageSrc"
                alt="office_map_info_img"
                class="office_map_info_img"
              />
              <div class="office_map_info_title">
                {{ officeInfoText }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AboutUs />
  </section>
</template>

<script setup>
import Title from "@/components/Title.vue";
import { ref } from "vue";
import ShOffice from "@/assets/contact/shOffice.png";
import QdOffice from "@/assets/contact/qdOffice.png";
import NbOffice from "@/assets/contact/nbOffice.png";
import TjOffice from "@/assets/contact/tjOffice.png";
import GzOffice from "@/assets/contact/gzOffice.png";
import MxgOffice from "@/assets/contact/mxgOffice.png";
import AboutUs from "@/components/AboutUs.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const list = [
  {
    name: t("offic_name1"),
    addres: t("offic_address1"),
    tel: t("offic_tel1"),
    type: "shOffice",
  },
  {
    name: t("offic_name2"),
    addres: t("offic_address2"),
    tel: t("offic_tel2"),
    type: "qdOffice",
  },
  {
    name: t("offic_name3"),
    addres: t("offic_address3"),
    tel: t("offic_tel3"),
    type: "nbOffice",
  },
  {
    name: t("offic_name4"),
    addres: t("offic_address4"),
    tel: t("offic_tel4"),
    type: "tjOffice",
  },
  {
    name: t("offic_name5"),
    addres: t("offic_address5"),
    tel: t("offic_tel5"),
    type: "gzOffice",
  },
  {
    name: t("offic_name6"),
    addres: t("offic_address6"),
    type: "mxgOffice",
  },
];

const imageSrc = ref("");
const officeInfoText = ref("");

const image = {
  shOffice: ShOffice,
  qdOffice: QdOffice,
  nbOffice: NbOffice,
  tjOffice: TjOffice,
  gzOffice: GzOffice,
  mxgOffice: MxgOffice,
};
const officeInfo = {
  shOffice: t("offic_name1"),
  qdOffice: t("offic_name2"),
  nbOffice: t("offic_name3"),
  tjOffice: t("offic_name4"),
  gzOffice: t("offic_name5"),
  mxgOffice: t("offic_name6"),
};

const showOffice = (office) => {
  document.querySelector(`.${office}`).style.color = "#ff9124";
  document.querySelector(`.office_address_list_item_${office}`).style.color =
    "#ff9124";
  imageSrc.value = image[office];
  officeInfoText.value = officeInfo[office];
};

const hideOffice = (office) => {
  document.querySelector(`.${office}`).style.color = "#aeaeaf";
  document.querySelector(`.office_address_list_item_${office}`).style.color =
    "#000";
  imageSrc.value = "";
  officeInfoText.value = "";
};
</script>

<style lang="less" scoped>
.page {
  .banner {
    position: relative;
    width: 100%;
    height: 550px;
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

.office_address {
  background-color: #fff;
  padding-bottom: 100px;
  .title_content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 120px 0;
  }
  .office_address_list {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 40px;
    .office_address_list_item {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
      color: #000;
      cursor: pointer;
      .office_address_list_item_content {
        display: flex;
        align-items: center;
        gap: 10px;
        .office_address_list_item_content_img {
          width: 22px;
          height: 22px;
        }
        .office_address_list_item_content_title {
          font-size: 16px;
          line-height: 20px;
          font-weight: 400;
        }
      }
    }
  }
  .office_map {
    width: 900px;
    position: absolute;
    right: 0;
    bottom: 0;
    .office_map_img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
    .office_map_text {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      min-width: 38px;
      height: 22px;
      color: #fff;
      font-size: 18px;
      line-height: 20px;
      background: #fff;
      color: #aeaeaf;
      cursor: pointer;
    }
    .tjOffice {
      top: 221px;
      left: 549px;
    }
    .qdOffice {
      top: 243px;
      left: 549px;
    }
    .shOffice {
      top: 275px;
      left: 549px;
    }
    .nbOffice {
      top: 329px;
      left: 549px;
    }
    .gzOffice {
      top: 433px;
      left: 549px;
    }
    .mxgOffice {
      top: 389px;
      left: 698px;
      // width: 56px;
    }

    .office_map_info {
      width: 280px;
      position: absolute;
      top: 170px;
      left: 610px;
      background-color: @orange;
      padding: 10px;
      .office_map_info_img {
        display: block;
        width: 100%;
        object-fit: cover;
      }
      .office_map_info_title {
        font-size: 14px;
        line-height: 24px;
        color: #fff;
        font-weight: 700;
        text-align: center;
      }
    }
  }
}
</style>
