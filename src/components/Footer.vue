<template>
  <div class="footer container">
    <div class="footer_content">
      <div class="footer_item">
        <p class="desc">上海立远恒通物流发展有限公司</p>
        <p class="desc">上海市虹口区周家嘴路887号上滨生活广场1102-1107室</p>
        <p class="desc">总机: 021-60252388</p>
      </div>
      <div class="footer_item">
        <div class="title">首页</div>
      </div>
      <div class="footer_item" v-for="item in 3" :key="item">
        <div class="title">产品服务</div>
        <div class="link">国际海运</div>
        <div class="link">项目物流</div>
      </div>
      <div class="footer_item">
        <div class="title">产品服务</div>
        <div class="remark">为您提供一站式解决方案，更多信息等您来取！</div>
        <input type="text" placeholder="请输入您的邮箱" class="input" />
        <div class="btn">订阅</div>
      </div>
    </div>
    <div class="footer_bottom">
      Copyright © 2026 INNOVATION LOGISTICS. All Rights Reserved.
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  padding: 0 40px;
  background-color: #424f65;
  .footer_content {
    padding-top: 90px;
    padding-bottom: 20px;
    display: flex;
    .footer_item {
      width: 16.666%;
      display: flex;
      flex-direction: column;
      .desc {
        margin-bottom: 20px;
        font-size: 12px;
        color: #fff;
        line-height: 18px;
        font-weight: 400;
      }
      .title {
        margin-bottom: 10px;
        font-size: 22px;
        line-height: 28px;
        font-weight: 600;
        color: @orange;
        cursor: pointer;
      }
      .link {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 16px;
        cursor: pointer;
        &:hover {
          color: @orange;
        }
      }
      .remark {
        width: 80%;
        margin-bottom: 20px;
        font-size: 18px;
        color: #fff;
        line-height: 24px;
        font-weight: 400;
      }
      .input {
        width: 80%;
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 0;
        font-size: 14px;
        color: #041c2f;
        line-height: 14px;
        margin-bottom: 16px;
        // focus 样式
        &:focus {
          border: 1px solid @orange;
        }
        &:focus-visible {
          outline: none;
        }
      }
    }
  }
}
.footer_bottom {
  padding: 20px 0;
  text-align: center;
  font-size: 16px;
  color: #fff;
  line-height: 18px;
  font-weight: 400;
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
  width: 80px;
  text-align: center;
  transition: background-color 0.18s ease, transform 0.18s ease;
  &:hover {
    background: #034460;
    color: #fff;
    transform: translateY(-1px);
  }
}
</style>
