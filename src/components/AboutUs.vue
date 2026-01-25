<template>
  <div class="about-us">
    <div class="layout_container">
      <div class="about-us-content">
        <div class="about-us-content-left">
          <Title :title="t('about_us_title')" :desc="t('about_us_desc')" />
          <div class="input_item">
            <input
              type="text"
              :placeholder="t('about_us_name')"
              class="input"
              v-model="formData.name"
            />
            <input
              type="text"
              :placeholder="t('about_us_email')"
              class="input"
              v-model="formData.email"
            />
          </div>
          <div class="input_item">
            <input
              type="text"
              :placeholder="t('about_us_weight')"
              class="input"
              v-model="formData.weight"
            />
            <input
              type="text"
              :placeholder="t('about_us_size')"
              class="input"
              v-model="formData.size"
            />
          </div>
          <div class="input_item">
            <textarea
              :placeholder="t('about_us_message')"
              class="textarea"
              v-model="formData.message"
            ></textarea>
          </div>
          <a class="btn" @click="sendEmail">{{ t("about_us_btn") }}</a>
        </div>
        <div class="about-us-content-right">
          <img
            :src="AboutUsImg"
            alt="AboutUsImg"
            class="about-us-content-right-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Title.vue";
import AboutUsImg from "@/assets/map.png";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const formData = ref({
  name: "",
  email: "",
  weight: "",
  size: "",
  message: "",
});

const sendEmail = () => {
  // 发送邮件到info@innovationlogistics.com
  window.location.href = `mailto:info@innovationlogistics.com?subject=关于我们&body=${formData.value.name}\n${formData.value.email}\n${formData.value.weight}\n${formData.value.size}\n${formData.value.message}`;
};
</script>

<style lang="less" scoped>
.about-us {
  // 一半白色，一半灰色
  padding-top: 100px;
  background: linear-gradient(to bottom, #f5f5f5 50%, #424f65 50%);
}
.about-us-content {
  background-color: #fff;
  padding: 40px;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  .about-us-content-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    width: 48%;
    .input_item {
      width: 100%;
      display: flex;
      gap: 20px;
      .input {
        flex: 1;
        border: 0;
        outline: 0;
        box-shadow: none;
        color: @title-color;
        background-color: #f5f5f5;
        height: 30px;
        padding-left: 10px;
        font-size: 12px;
      }
      .textarea {
        flex: 1;
        border: 0;
        outline: 0;
        box-shadow: none;
        color: @title-color;
        background-color: #f5f5f5;
        height: 30px;
        padding: 10px;
        font-size: 12px;
        min-height: 100px;
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
    }
    .btn:hover {
      background: #034460;
      color: #fff;
      transform: translateY(-1px);
    }
  }
  .about-us-content-right {
    width: 48%;
    .about-us-content-right-img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }
}

/* 手机端适配 */
@media (max-width: 768px) {
  .about-us {
    padding-top: 56px;
    background: linear-gradient(to bottom, #f5f5f5 70%, #424f65 30%);
  }
  .about-us-content {
    padding: 18px;
    flex-direction: column;
    gap: 18px;
    .about-us-content-left,
    .about-us-content-right {
      width: 100%;
    }
    .about-us-content-left {
      gap: 18px;
      .input_item {
        flex-direction: column;
        gap: 10px;
      }
    }
  }
}
</style>
