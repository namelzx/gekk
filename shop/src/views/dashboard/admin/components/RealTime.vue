<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="24" :sm="24" :lg="24">
      <div class="panel-title">
        <span>实时概况</span>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="24" class="card-panel-col real-time-wrap">
      <div class="real-left">
        <div class="icon-wrap">
          <i class="el-icon-wallet"></i>
        </div>
        <div class="sell-cash">
          <p>销售额(元)</p>
          <p>{{homeinfo.daypricer}}</p>
          <p>昨日：{{homeinfo.yesterprice}}</p>
        </div>
        <div class="sell-order">
          <p>支付订单数量</p>
          <p>{{homeinfo.dayorder}}</p>
          <p>昨日： {{homeinfo.yesterorder}}</p>
        </div>
      </div>
      <div class="real-right">
        <div class="icon-wrap">
          <i class="el-icon-user"></i>
        </div>
        <div class="sell-cash">
          <p>新增用户数</p>
          <p>{{homeinfo.dayuser}}</p>
          <p>昨日： {{homeinfo.yesteruser}}</p>
        </div>
        <div class="sell-order">
          <p>积分订单</p>
          <p>{{homeinfo.dayintorder}}</p>
          <p>昨日： {{homeinfo.yesterintorder}}</p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    homeinfo:{
      type:Object,
      default:{},
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin: 18px 0;
  background: #f9f9f9;
  .panel-title {
    padding: 28px 0 20px;
    color: #333;
    font-size: 16px;
    span {
      padding-left: 10px;
      border-left: 4px solid #1890ff;
    }
  }
  .real-time-wrap {
    display: flex;
    .real-left {
      width: 50%;
      display: flex;
      .icon-wrap {
        font-size: 28px;
        line-height: 90px;
        color: #1890ff;
        width: 20%;
        text-align: center;
      }
      .sell-cash {
        width: 40%;
        font-size: 12px;
        p {
          margin: 10px 0;
          &:first-child {
            color: #444;
          }
          &:nth-child(2) {
            font-size: 18px;
          }
          &:last-child {
            color: #999;
          }
        }
      }
      .sell-order {
        width: 40%;
        font-size: 12px;
        p {
          margin: 10px 0;
          &:first-child {
            color: #444;
          }
          &:nth-child(2) {
            font-size: 18px;
          }
          &:last-child {
            color: #999;
          }
        }
      }
    }
    .real-right {
      width: 50%;
      display: flex;
      .icon-wrap {
        font-size: 28px;
        line-height: 90px;
        color: #1890ff;
        width: 20%;
        text-align: center;
      }
      .sell-cash {
        width: 40%;
        font-size: 12px;
        p {
          margin: 10px 0;
          &:first-child {
            color: #444;
          }
          &:nth-child(2) {
            font-size: 18px;
          }
          &:last-child {
            color: #999;
          }
        }
      }
      .sell-order {
        width: 40%;
        font-size: 12px;
        p {
          margin: 10px 0;
          &:first-child {
            color: #444;
          }
          &:nth-child(2) {
            font-size: 18px;
          }
          &:last-child {
            color: #999;
          }
        }
      }
    }
  }
  .card-panel-col {
    margin-bottom: 32px;
  }
}
</style>>
