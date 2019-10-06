<template>
  <div class="createPost-container">
    <div class="createPost-main-container">
      <divider title="订单信息" />
      <!--订单基本信息-->
      <div class="ant-card">
        <div class="ant-card-body">
          <div class="descriptionList">
            <div class="title">订单基本信息</div>
            <div class="ant-row">
              <div class="ant-col-md-8">
                <div class="term">订单编号:</div>
                <div class="detail">{{postForm.order_no}}</div>
              </div>

              <div class="ant-col-md-8">
                <div class="term">订单状态:</div>
                <div class="detail">{{postForm.status|statusText}}</div>
              </div>
              <div class="ant-col-md-8">
                <div class="term">发货方式:</div>
                <div class="detail">未发货</div>
              </div>
              <div class="ant-col-md-8">
                <div class="term">下单时间:</div>
                <div class="detail">{{postForm.create_time}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--用户信息-->

      <div class="ant-card">
        <div class="ant-card-body">
          <div class="descriptionList">
            <div class="title">收货信息</div>
            <div class="ant-row" v-if="postForm.isadd===1">
              <div class="ant-col-md-8">
                <div class="term">收货人姓名:</div>
                <div class="detail" v-if="postForm.address.userName">{{postForm.address.userName}}</div>
              </div>

              <div class="ant-col-md-8">
                <div class="term">收货人电话:</div>
                <div class="detail" v-if="postForm.address">{{postForm.address.phone}}</div>
              </div>
              <div class="ant-col-md-8">
                <div class="term">收货地址:</div>
                <div
                  class="detail"
                  v-if="postForm.address"
                >{{postForm.address.areaMsg}}</div>
              </div>
            </div>
            <div class="ant-row" v-else>
                <div class="ant-col-md-8">
                <div class="term">取货店铺:</div>
                <div class="detail" >{{postForm.shop.name}}<br/>{{postForm.shop.location}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--物流信息-->
      <div class="ant-card">
        <div class="ant-card-body">
          <div class="descriptionList">
            <div class="title">发货物流信息</div>
            <div class="ant-row">
              <div v-if="postForm.status>2">
                <div class="ant-col-md-8">
                  <div class="term">物流公司:</div>
                  <div
                    class="detail"
                    v-if="postForm.get_courier"
                  >{{postForm.get_courier.courier.label}}</div>
                </div>
                <div class="ant-col-md-8">
                  <div class="term">物流单号:</div>
                  <div class="detail">
                    <span v-if="postForm.get_courier">{{postForm.get_courier.out_courier_no}}</span>
                  </div>
                </div>
                <div class="ant-col-md-8">
                  <div class="term">发货时间:</div>
                  <div
                    class="detail"
                    v-if="postForm.get_courier"
                  >{{postForm.get_courier.create_time}}</div>
                </div>
                <div class="ant-col-md-8">
                  <div class="term">物流状态:</div>
                  <div class="detail" v-if="postForm.logis">{{postForm.logis.AcceptStation}}</div>
                </div>
              </div>
              <div v-else>
                <logis :order_id="postForm.id" @onCourier="onCourier"></logis>
              </div>
            </div>
          </div>
        </div>
      </div>

      <divider title="商品信息" />

      <!--订单信息-->
      <div class="goods-info" v-if="postForm.get_goods">
        <el-table :data="postForm.get_goods" border stripe style="width: 100%">
          <el-table-column prop label="商品图片" width="180"  align="center">
            <template slot-scope="scope">

              <img class="img" :src="scope.row.images_url" />
            </template>
          </el-table-column>
          <el-table-column prop="name"  align="center" label="商品名称" width="180"></el-table-column>
          <el-table-column prop="price"  align="center" label="商品价格"></el-table-column>
          <el-table-column prop="num"  align="center" label="商品数量"></el-table-column>
         
          <el-table-column prop="suk_name"  align="center" label="商品属性"></el-table-column>
        </el-table>
      </div>

      <divider title="资金情况" />

      <div class="goods-heade">
        <div class="head-info">实付金额</div>
        <div class="head-info">运费</div>
        <div class="head-info">优惠金额</div>
        <div class="head-info">优惠卷名称</div>
        <div class="head-info">订单总金额</div>
        <div class="head-info">订单状态</div>
      </div>
      <!--订单信息-->
      <div class="goods-info">
        <div class="head-info" >{{postForm.actualPrice}}</div>
        <div class="head-info">{{postForm.freight}}</div>

        <div class="head-info">
          <span v-if="postForm.get_user_coupon">{{postForm.get_user_coupon.get_counpon.sub_price}}</span>
          <span v-else>未使用优惠卷</span>
        </div>
        <div class="head-info">
          <span v-if="postForm.get_user_coupon"
          >{{postForm.get_user_coupon.get_counpon.sub_price}}元优惠卷</span>
          <span v-else>未使用优惠卷</span>
        </div>
        <div class="head-info">{{postForm.totalPrice}}</div>

        <div class="head-info">{{postForm.status|statusText}}</div>
      </div>


    </div>
  </div>
</template>


<script>
  import Sticky from '@/components/Sticky' // 粘性header组件

import Divider from "./Divider";
import logis from "./logis";
import { GetIdByDetails, postCourier, postOrderClose } from "@/api/order";
import { parseTime } from "@/utils";

export default {
  name: "Detail",
  components: {
    Divider,
    logis,
    Sticky
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    calculate(e) {
      return e;
    },
    statusText(status) {
      const statusMap = {
        1: "未支付",
        2: "待商家发货",
        3: "已发货",
        4: "已取消",
        5: "已收货"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      kd: [
        {
          value: "ANXL",
          label: "安迅物流"
        },
        {
          value: "AJWL",
          label: "安捷物流"
        },
        {
          value: "AJWL",
          label: "安捷物流"
        }
      ],
      postForm: {}
    };
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    } else {
      this.postForm = Object.assign({}, defaultForm);
    }
  },
  methods: {
    Settlement() {
      const h = this.$createElement;
      var price =
        this.postForm.get_goods.deposit -
        this.postForm.com_price -
        this.postForm.default_price;
      var text =
        "请谨慎操作，确认后扣除赔偿金" +
        this.postForm.com_price +
        " " +
        "损坏金额" +
        this.postForm.default_price +
        "元。  " +
        " " +
        " 将退还用户:" +
        price +
        "元押金";
      this.$msgbox({
        title: "谨慎操作",
        message: h("p", null, [h("span", { style: "color: red" }, text)]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            var temp = {
              id: this.postForm.id,
              com_price: this.postForm.com_price,
              default_price: this.postForm.default_price
            };
            postOrderClose(temp).then(res => {
              console.log(res);
            });
            console.log("结算成功");
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: "info",
          message: "action: " + action
        });
      });
    },
    onCourier(e) {
      e.order_id = this.postForm.id;
      postCourier(e).then(res => {
        console.log(res);
        this.fetchData(this.postForm.id);
      });
      this.$notify({
        title: "成功",
        message: "更新订单成功",
        type: "success"
      });
    },
    fetchData(id) {
      GetIdByDetails(id).then(res => {
        this.postForm = res.data;
        console.log(    this.postForm )
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.goods-heade {
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  /*border-top: none;*/
  border-right: none;

  .head-info {
    height: 60px;
    width: 20%;
    text-align: center;
    line-height: 40px;
    font-weight: 500;
    font-size: 14px;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fafafa;
    min-height: 80px;

    .name {
      text-align: left;
    }

    .info-item {
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 0;
      margin-bottom: 30px;

      .item-name {
        height: 20px;
      }
    }
  }
}

.goods-info {
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-top: none;
  border-right: none;

  .goodsname {
    text-align: justify;
    display: flex;
    flex-direction: row !important;
    padding-top: 10px;
    padding-bottom: 10px;

    .img {
      img {
        width: 80px;
        height: 80px;
      }
    }

    .name {
      text-align: initial;
      margin-left: 10px;
    }
  }
   img {
        width: 80px;
        height: 80px;
      }

  .head-info {
    width: 20%;
    text-align: center;
    min-height: 80px;

    /*line-height: 40px;*/
    /*font-weight: 500;*/

    font-size: 13px;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgba(0, 0, 0, 0.65);

    .name {
      text-align: initial;
      margin-left: 10px;
    }

    .info-item {
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 0;
      margin-bottom: 30px;

      .item-name {
        height: 20px;
      }
    }
  }
}

@import "~@/styles/mixin.scss";

.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea /deep/ {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}

.tdivider {
  margin-bottom: 10px;
  border-bottom: 1px solid;
}

.lease {
  width: 30px;
  padding: 0;
}

.ant-card {
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  position: relative;
  background: #fff;
  border-radius: 2px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  .ant-card-body {
    padding: 24px;
    zoom: 1;

    .descriptionList {
      margin-bottom: 32px;

      .title {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        margin-bottom: 16px;
      }

      .ant-row {
        margin-bottom: -16px;
        overflow: hidden;

        .term {
          line-height: 22px;
          padding-bottom: 16px;
          margin-right: 8px;
          color: rgba(0, 0, 0, 0.85);
          white-space: nowrap;
          display: table-cell;
        }

        .detail {
          line-height: 22px;
          width: 100%;
          padding-bottom: 16px;
          color: rgba(0, 0, 0, 0.65);
          display: table-cell;
        }
      }
    }
  }
}

.ant-row {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  position: relative;
  height: auto;
  margin-right: 0;
  margin-left: 0;
  zoom: 1;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  .ant-col-md-8 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 33.33333333%;
    float: left;
    font-size: 15px;
  }
}
</style>
