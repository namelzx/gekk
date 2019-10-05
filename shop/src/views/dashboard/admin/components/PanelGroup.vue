<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="24" :sm="24" :lg="24">
      <div class="panel-title">
        <span>平台统计</span>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">商品总量</div>
          <count-to :start-val="0" :end-val="homeinfo.goods" :duration="2600" class="card-panel-num" />
        </div>
        <div class="card-panel-desc">当前商品总数量</div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">订单总量</div>
          <count-to :start-val="0" :end-val="homeinfo.order" :duration="3000" class="card-panel-num" />
        </div>
        <div class="card-panel-desc">当前订单总数量</div>
      </div>
    </el-col>
    <!-- <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">订单总量</div>
          <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
        </div>
        <div class="card-panel-desc">已支付订单总数量</div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="message" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">评价总量</div>
          <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
        </div>
        <div class="card-panel-desc">订单评价总数量</div>
      </div>
    </el-col> -->
  </el-row>
</template>

<script>
import CountTo from "vue-count-to";
export default {
  components: {
    CountTo
  },
  props:{
    homeinfo:{
      type:Object,
      default:{},
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit("handleSetLineChartData", type);
    }
  }
};
</script>
<style lang="scss" scoped>

.panel-group {
  margin-top: 18px;
  background: #f9f9f9;
  .panel-title {
    padding: 28px 0 20px;
    color: #333;
    font-size: 16px;
    span {
      padding-left: 10px;
      border-left: 4px solid #1890FF;
    }
  }
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 170px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3;
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 25px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 36px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 32px 26px 0;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
    .card-panel-desc {
      float: left;
      text-align: center;
      width: 100%;
      margin: 20px 0;
      color: #333;
      font-size: 12px;
    }
  }
}
</style>
