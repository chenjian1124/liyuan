<template>
  <section class="page">
    <div class="layout_container solution_content">
      <Title
        title="OOG项目物流"
        desc="专业高效，确保超限货物安全、及时地到达目的地。"
      />
      <div class="content">
        <div class="content_left">
          <div class="content_left_title">
            OOG特种箱凭借卓越性能和可靠品质，成为全球物流运输的关键助力。无论是在繁忙的港口，还是偏远的航线，OOG特种箱始终以高效、安全的服务，为全球贸易与经济增长注入新动力。
          </div>
          <div class="content_left_title">
            立远恒通依托先进设备、精准装载与加固技术，以及多年的行业深耕经验，全面保障OOG项目物流的高效执行与运输安全。
          </div>
        </div>
        <div class="content_right">
          <div class="content_right_list" v-for="i in 2" :key="i">
            <div class="content_right_list_item">
              <img
                src="@/assets/solution/1.png"
                alt="solution1"
                class="content_right_list_item_img"
              />
              <div class="content_right_list_item_content">
                <div class="content_right_list_item_title">丰富运输经验</div>
                <div class="content_right_list_item_desc">
                  拥有多年超限货物运输经验，深度理解各类OOG项目的复杂需求，助您轻松应对运输难题。
                </div>
              </div>
            </div>
            <div class="content_right_list_item">
              <img
                src="@/assets/solution/1.png"
                alt="solution1"
                class="content_right_list_item_img"
              />
              <div class="content_right_list_item_content">
                <div class="content_right_list_item_title">丰富运输经验</div>
                <div class="content_right_list_item_desc">
                  拥有多年超限货物运输经验，深度理解各类OOG项目的复杂需求，助您轻松应对运输难题。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 业务 -->
    <Business />
  </section>
</template>

<script setup>
import Title from "@/components/Title.vue";
import Business from "@/components/Business.vue";
</script>

<style lang="less" scoped>
.page {
  background: url("@/assets/solution/bg.png") no-repeat center center;
  background-size: cover;
}
.solution_content {
  padding-top: 100px;
}

.content {
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  .content_left {
    width: 45%;
    padding-right: 80px;
    .content_left_title {
      font-size: 32px;
      line-height: 40px;
      font-weight: 400;
      margin-bottom: 40px;
      color: #3d3a39;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .content_right {
    width: 55%;
    .content_right_list {
      display: flex;
      gap: 40px;
      margin-bottom: 40px;
    }
    .content_right_list_item {
      flex: 1;
      .content_right_list_item_img {
        display: block;
        width: 100%;
        object-fit: cover;
      }
      .content_right_list_item_content {
        background-color: #424f65;
        color: #fff;
        height: 170px;
        padding: 20px;
        .content_right_list_item_title {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #fff;
        }
        .content_right_list_item_desc {
          font-size: 14px;
          line-height: 24px;
          color: #fff;
        }
      }
    }
  }
}
</style>
