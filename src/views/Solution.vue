<template>
  <section class="page">
    <div class="solution_bg">
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
    </div>
    <!-- 业务 -->
    <Business style="padding-top: 100px" />
    <!--化工品 -->
    <div class="solution_chemical">
      <div class="layout_container solution_chemical_content">
        <Title
          title="化工品物流"
          desc="专业守护每一程，安全运送每一滴化工品。"
        />
        <div class="solution_chemical_title">
          <span class="text-orange">专业、安全、全球覆盖</span>的运输解决方案
        </div>
        <div class="solution_chemical_desc">
          立远恒通在化工品与危险品物流及仓储操作方面拥有深厚经验，尤其在锂电池运输的加固方案及医药化工品处理领域表现出专业优势。通过成熟的技术和严格的操作流程，我们为客户提供安全可靠的物流及仓储解决方案，确保货物在运输和存储过程中的安全无损。
        </div>
        <img
          src="@/assets/solution/chemica.png"
          alt="chemical"
          class="solution_chemical_img"
        />
      </div>
    </div>
    <!-- 汽车 -->
    <div class="solution_car">
      <div class="layout_container solution_car_content">
        <Title
          title="汽车物流"
          desc="提供端到端的一站式解决方案，包括起运港装箱、国际海运以及目的港拆箱。"
        />
        <div class="solution_car_title">
          <span class="text-orange"
            >全程高效、专业，确保运输每个环节的顺畅衔接。</span
          >
        </div>
        <div class="solution_car_desc">
          立远恒通专注于汽车运输服务，采用主流的滚装（RO-RO）方式以及框架运输模式，提供灵活高效的解决方案。
          图中展示的是中远海特的专利产品。<br />
          在汽车运输领域，我司拥有一支经验丰富、技术过硬的专业运输团队，确保每次运输任务安全可靠、高效完成。
        </div>
        <div class="solution_car_list">
          <div class="solution_car_list_item">
            <img
              src="@/assets/solution/car1.png"
              alt="car"
              class="solution_car_list_item_img"
            />
            <div class="solution_car_list_item_title">
              立远恒通为中远海特的专利产品，使用汽车运输框架进行运输
            </div>
          </div>
          <div class="solution_car_list_item">
            <img
              src="@/assets/solution/car2.png"
              alt="car"
              class="solution_car_list_item_img"
            />
            <div class="solution_car_list_item_title">
              立远恒通为车企运输电车到智利
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 物流 -->
    <div class="solution_logistics">
      <div class="layout_container solution_logistics_content">
        <Title title="物流智道" desc="先进灵活，功能全面。" />
        <div class="solution_logistics_info">
          <div class="solution_logistics_info_left">
            <img
              src="@/assets/solution/logistics.png"
              alt="logistics"
              class="solution_logistics_info_left_img"
            />
            <div class="solution_logistics_info_left_text">
              <div class="solution_logistics_info_left_text_title">
                互联融合·科技创新
              </div>
              <div class="solution_logistics_info_left_text_desc">
                沉淀行业数十年经验,将智能技术融入国际物流服务引领服务变革。
              </div>
            </div>
          </div>
          <div class="solution_logistics_info_right">
            <div
              class="solution_logistics_info_right_item"
              v-for="i in 4"
              :key="i"
            >
              <div class="solution_logistics_info_right_item_icon">
                <img
                  src="@/assets/solution/logistics_icon1.png"
                  alt="logistics"
                  class="solution_logistics_info_right_item_img"
                />
              </div>
              <div class="solution_logistics_info_right_item_text">
                <div class="solution_logistics_info_right_item_text_title">
                  数据可视化
                </div>
                <div class="solution_logistics_info_right_item_text_desc">
                  展示时间、地点、货物类型、运输方等纬度帮助用户进行综合分析。用户可以根据需要选择不同的数据维度进行组合和比较，使系统能够适应不同用户和不同业务场景的需求。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 顾问 -->
    <div class="solution_advisor">
      <div class="layout_container solution_advisor_content">
        <Title title="专业顾问" desc="我们专业的团队，为您提供最优质的服务" />
        <div class="solution_advisor_list">
          <div class="solution_advisor_list_item" v-for="i in 4" :key="i">
            <img
              src="@/assets/solution/advisor1.png"
              alt="advisor"
              class="solution_advisor_list_item_img"
            />
            <div class="solution_advisor_list_item_text">
              <div class="solution_advisor_list_item_text_name">Jason李杰</div>
              <div class="solution_advisor_list_item_text_site">
                立远恒通 宁波
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <AboutUs />
  </section>
</template>

<script setup>
import Title from "@/components/Title.vue";
import Business from "@/components/Business.vue";
import AboutUs from "@/components/AboutUs.vue";
</script>

<style lang="less" scoped>
.solution_bg {
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

//
.solution_chemical {
  // 一半白色，一半灰色
  background: linear-gradient(to bottom, #f5f5f5 75%, #424f65 25%);
  padding-top: 100px;
  .solution_chemical_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
  .solution_chemical_title {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    color: #000;
  }
  .solution_chemical_desc {
    max-width: 1000px;
    font-size: 20px;
    line-height: 24px;
    color: #333;
    text-align: center;
  }
  .solution_chemical_img {
    width: 100%;
    object-fit: cover;
  }
}

//
.solution_car {
  background: #fff;
  padding-top: 100px;
  padding-bottom: 100px;
  .solution_car_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
  .solution_car_title {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    color: #000;
  }
  .solution_car_desc {
    max-width: 1000px;
    font-size: 20px;
    line-height: 30px;
    color: #333;
    text-align: center;
  }
  .solution_car_list {
    display: flex;
    gap: 40px;
    .solution_car_list_item {
      flex: 1;
    }
    .solution_car_list_item_img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
    .solution_car_list_item_title {
      background-color: #424f65;
      padding: 20px;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
    }
  }
}

//
.solution_logistics {
  background: #f5f5f5;
  padding: 100px 0;
  .solution_logistics_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
  .solution_logistics_info {
    display: flex;
    gap: 100px;
  }
  .solution_logistics_info_left {
    flex: 1;
    display: flex;
    flex-direction: column;

    .solution_logistics_info_left_img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
    .solution_logistics_info_left_text {
      display: flex;
      flex-direction: column;
      padding: 32px 0;
      background-color: @orange;
      color: #fff;
      text-align: center;
    }
    .solution_logistics_info_left_text_title {
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      color: #fff;
    }
    .solution_logistics_info_left_text_desc {
      font-size: 20px;
      line-height: 24px;
      color: #fff;
    }
  }
  .solution_logistics_info_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
    .solution_logistics_info_right_item {
      display: flex;
      gap: 40px;
    }
    .solution_logistics_info_right_item_icon {
      width: 100px;
      height: 100px;
      background-color: @orange;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      .solution_logistics_info_right_item_img {
        display: block;
      }
    }
    .solution_logistics_info_right_item_text {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .solution_logistics_info_right_item_text_title {
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      color: #000;
    }
    .solution_logistics_info_right_item_text_desc {
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
      color: #333;
    }
  }
}

//
.solution_advisor {
  background: #fff;
  padding: 100px 0;
  .solution_advisor_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 120px;
  }
  .solution_advisor_list {
    display: flex;
    gap: 40px;
    .solution_advisor_list_item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .solution_advisor_list_item_img {
      display: block;
      width: 96%;
      object-fit: cover;
    }
    .solution_advisor_list_item_text {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #2e9adb;
      padding: 10px 20px;
      color: #fff;
    }
    .solution_advisor_list_item_text_name {
      font-size: 40px;
      line-height: 50px;
      font-weight: 700;
    }
    .solution_advisor_list_item_text_site {
      font-size: 24px;
      line-height: 32px;
      font-weight: 400;
    }
  }
}
</style>
