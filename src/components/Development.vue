<template>
  <div class="development">
    <div class="map_bg_left"></div>
    <div class="map_bg_right"></div>
    <div class="development_content">
      <div class="development_content_line">
        
      </div>
      <!-- ship -->
      <img src="@/assets/development/ship.png" alt="ship" class="development_content_ship" />
      <!-- 2009 -->
      <div class="item_2009 item">
        <span class="year text-right">2009</span>
        <span class="round orange"></span>
        <div class="desc">
          <img src="@/assets/development/orange-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20">
            <p>公司成立</p>
          </div>
        </div>
      </div>
      <!-- 2010 -->
      <div class="item_2010 item">
        <div class="desc">
          <img src="@/assets/development/blue-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20">
            <p>成功加入</p>
            <p>WCA FAMILY</p>
          </div>
        </div>
        <span class="round blue"></span>
        <span class="year">2010</span>
      </div>
      <!-- 2014 -->
      <div class="item_2014 item">
        <span class="year text-right">2014</span>
        <span class="round green"></span>
        <div class="desc">
          <img src="@/assets/development/green-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20">
            <p>青岛子公司</p>
            <p>成立</p>
          </div>
        </div>
      </div>
       <!-- 2017 -->
       <div class="item_2017 item">
        <div class="desc">
          <img src="@/assets/development/orange-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20">
            <p>宁波子公司</p>
            <p>成立</p>
          </div>
        </div>
        <span class="round orange"></span>
        <span class="year">2017</span>
      </div>
      <!-- 2018 -->
      <div class="item_2018 item">
        <span class="year text-right">2018</span>
        <span class="round blue"></span>
        <div class="desc">
          <img src="@/assets/development/blue-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20">
            <p>天津子公司</p>
            <p>成立</p>
          </div>
        </div>
      </div>
      <!-- 2021 -->
      <div class="item_2021 item">
        <div class="desc">
          <img src="@/assets/development/green-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20">
            <p>成功加入</p>
            <p>WCA PROJECTS</p>
            <p>首次在上海</p>
            <p>WBX展亮相</p>
          </div>
        </div>
        <span class="round green"></span>
        <span class="year">2021</span>
      </div>
     <!-- 2023 -->
     <div class="item_2023 item">
        <span class="year text-right">2023</span>
        <span class="round orange"></span>
        <div class="desc">
          <img src="@/assets/development/orange-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20">
            <p>哈尔滨单证中心</p>
            <p>成立</p>
          </div>
        </div>
      </div>
       <!-- 2024 -->
       <div class="item_2024 item">
        <div class="desc">
          <img src="@/assets/development/blue-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20">
            <p>参加第28界</p>
            <p>南美洲多式</p>
            <p>联运展</p>
          </div>
        </div>
        <span class="round blue"></span>
        <span class="year">2024</span>
      </div>
      <!-- 2025 -->
      <div class="item_2025 item">
        <span class="year text-right">2025</span>
        <span class="round green"></span>
        <div class="desc">
          <img src="@/assets/development/green-right.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-l-20 " >
            <p>通过ISO管理体系</p>
            <p>认证</p>
            <p>广州子公司成立</p>
            <p>立远恒通</p>
            <p>墨西哥分站成立</p>
          </div>
        </div>
      </div>
       <!-- 2026 -->
       <div class="item_2026 item">
        <div class="desc">
          <img src="@/assets/development/orange-left.png" alt="orange-right" class="desc-img" />
          <div class="desc-content p-r-20" style="font-size: 46px;">
            <p>新挑战！</p>
           
          </div>
        </div>
        <span class="round orange"></span>
        <span class="year">2026</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="less" scoped>
  .development {
    position: relative;
    height: 3900px;
    margin-bottom: 300px;
    .development_content_line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 1px;
      height: 100%;
      background-color: #000;
    }
    .development_content_ship{
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 10px;
      margin: auto;
      width: 200px;
      transform: translateX(50%);
    }

    .item{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      .year{
        font-size: 32px;
        font-weight: 700;
        color: #000;
        width: 280px;
       
      }
      .round{
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .desc{
        width: 280px;
       display: flex;
       align-items: center;
       justify-content: center;
       position: relative;
       .desc-img{
        display: block;
        width: 100%;
        object-fit: cover;

       }
       .desc-content{
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        width: 280px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       }
      }
      .p-l-20{
        padding-left: 35px;
      }
      .p-r-20{
        padding-right: 35px;
      }
      .text-right{
        text-align: right;
      }
      .orange{
        background-color: @orange;
      }
      .blue{
        background-color: #2e9adb;
      }
      .green{
        background-color: #41d62b;
      }
      .orange-right{
        background: url("@/assets/development/orange-right.png") no-repeat;
      }
      .orange-left{
        background: url("@/assets/development/orange-left.png") no-repeat ;
      }
      .blue-right{
        background: url("@/assets/development/blue-right.png") no-repeat center center;
        background-size: 100% 100%;
      }
      .blue-left{
        background: url("@/assets/development/blue-left.png") no-repeat center center;
        background-size: 100% 100%;
      }
      .green-right{
        background: url("@/assets/development/green-right.png") no-repeat center center;
        background-size: 100% 100%;
      }
      .green-left{
        background: url("@/assets/development/green-left.png") no-repeat center center;
        background-size: 100% 100%;
      }
    }

    .item_2009{
      top: 200px;
    }
    .item_2010{
      top: 600px;
    }
    .item_2014{
      top: 1000px;
    }
    .item_2017{
      top: 1400px;
    }
    .item_2018{
      top: 1800px;
    }
    .item_2021{
      top: 2200px;
    }
    .item_2023{
      top: 2600px;
    }
    .item_2024{
      top: 3000px;
    }
    .item_2025{
      top: 3400px;
    }
    .item_2026{
      top: 3800px;
    }
  }


.map_bg_left{
  position: absolute;
  left: 0;
  top: 0;
  width: 1400px;
  height: 700px;
  background: url("@/assets/development/map.png") no-repeat center center;
  background-size: 100% 100%;
}
.map_bg_right{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1400px;
  height: 700px;
  background: url("@/assets/development/map.png") no-repeat bottom center;
  background-size: 100% 100%;
}
  

</style>
            