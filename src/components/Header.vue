<template>
  <div class="header">
    <div class="bar">
      <a href="tel:+021-60252388">电话: 021-60252388</a>
      <a href="mailto:innovation@htholding.cn">邮箱: innovation@htholding.cn</a>
    </div>
    <div class="container">
      <div class="main-header">
        <a href="/">
          <img :src="Logo" alt="logo" class="logo" />
        </a>
        <div class="nav">
          <ul class="nav-list">
            <li>
              <a href="/">首页</a>
            </li>
            <li>
              <a href="/" class="has-children">产品服务</a>
              <div class="children-list flex-row">
                <a
                  href="/"
                  class="children-item"
                  v-for="item in 10"
                  :key="item"
                >
                  <span class="children-item-title">国际海运</span>
                  <img
                    :src="Image11"
                    alt="arrow-right"
                    class="children-item-image"
                  />
                </a>
              </div>
            </li>
            <li class="relative">
              <a href="/" class="has-children">解决方案</a>
              <div class="children-list"></div>
            </li>
            <li class="relative">
              <a href="/" class="has-children">关于我们</a>
              <div class="children-list">
                <a
                  href="/"
                  class="children-item"
                  v-for="item in 5"
                  :key="item"
                  >{{ item }}</a
                >
              </div>
            </li>
            <li>
              <a href="/">联系我们</a>
            </li>
          </ul>
        </div>
        <div class="language">
          <img :src="Language" alt="language" />
          <div class="language-list">
            <span>中文</span>
            <span>/</span>
            <span>EN</span>
            <span>/</span>
            <span>ES</span>
          </div>
          <div class="btn">运价船期</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "@/assets/logo-w.svg";
import Language from "@/assets/language.svg";
import Image11 from "@/assets/img11.png";
</script>

<style lang="less" scoped>
.bar {
  padding: 13px;
  background-color: #041c2f;
  color: #fff;
  display: flex;
  gap: 20px;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    &:hover {
      color: #16ba8f;
    }
  }
}
.container {
  padding: 0 40px;
  background-color: #f5f5f5;
  .main-header {
    display: flex;
    align-items: center;
    height: 90px;
    position: relative;
  }
  .logo {
    min-height: 37px;
  }
  .nav {
    padding-left: 50px;
    .nav-list {
      display: flex;
      li {
        list-style: none;
        position: static !important;
        &:hover {
          .children-list {
            display: flex;
          }
        }
        a {
          font-family: epilogue, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: #041c2f;
          line-height: 28px;
          display: block;
          padding: 28px 18px 28px 15px;
          text-decoration: none;
          position: relative;
          &:hover {
            color: #ff9124;
          }
          .active {
            color: #ff9124;
          }
        }
        .has-children {
          // 下拉箭头
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 10px;
            height: 10px;
          }
        }
        .children-list {
          display: none;
          flex-wrap: wrap;
          flex-direction: column;
          gap: 15px;
          position: absolute;
          top: 100%;
          background-color: #fff;
          padding: 20px;
          border-top: 8px solid #ff9124;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
          &.flex-row {
            left: 0;
            right: 0;
            flex-direction: row;
          }
          .children-item {
            width: 240px;
            display: flex;
            flex-direction: column;
            padding: 0;
            &:hover {
              .children-item-title {
                color: #ff9124;
              }
            }
            .children-item-title {
              font-size: 18px;
              color: #034460;
              line-height: 28px;
              margin-bottom: 15px;
              font-weight: 500;
            }
            .children-item-image {
              width: 240px;
              height: 160px;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}
.language {
  display: flex;
  align-items: center;
  margin-left: auto;
  img {
    width: 14px;
    margin-right: 5px;
  }
  .language-list {
    line-height: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      font-size: 12px;
      color: #041c2f;
      cursor: pointer;
      &:hover {
        color: #ff9124;
      }
      &.active {
        color: #ff9124;
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
  &:hover {
    background: #034460;
    color: #fff;
  }
}
</style>
