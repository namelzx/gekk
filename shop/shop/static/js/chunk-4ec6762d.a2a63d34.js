(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ec6762d"],{"0c6b":function(t,s,a){"use strict";var e=a("0caa"),i=a.n(e);i.a},"0caa":function(t,s,a){},"1ae4":function(t,s,a){"use strict";var e=a("259a"),i=a.n(e);i.a},"259a":function(t,s,a){},"9dd3":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article-detail",{attrs:{"is-edit":!0}})},i=[],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"createPost-container"},[a("div",{staticClass:"createPost-main-container"},[a("divider",{attrs:{title:"订单信息"}}),t._v(" "),a("div",{staticClass:"ant-card"},[a("div",{staticClass:"ant-card-body"},[a("div",{staticClass:"descriptionList"},[a("div",{staticClass:"title"},[t._v("订单基本信息")]),t._v(" "),a("div",{staticClass:"ant-row"},[a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("订单编号:")]),t._v(" "),a("div",{staticClass:"detail"},[t._v(t._s(t.postForm.order_no))])]),t._v(" "),a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("订单状态:")]),t._v(" "),1==t.postForm.isadd?a("div",{staticClass:"detail"},[t._v(t._s(t._f("statusText")(t.postForm.status)))]):t._e(),t._v(" "),2==t.postForm.isadd?a("div",{staticClass:"detail"},[t._v(t._s(t._f("statusShop")(t.postForm.status)))]):t._e()]),t._v(" "),a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("发货方式:")]),t._v(" "),1==t.postForm.isadd?a("div",{staticClass:"detail"},[t._v("物流")]):t._e(),t._v(" "),2==t.postForm.isadd?a("div",{staticClass:"detail"},[t._v("门店自取")]):t._e()]),t._v(" "),a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("下单时间:")]),t._v(" "),a("div",{staticClass:"detail"},[t._v(t._s(t.postForm.create_time))])])])])])]),t._v(" "),a("div",{staticClass:"ant-card"},[a("div",{staticClass:"ant-card-body"},[a("div",{staticClass:"descriptionList"},[a("div",{staticClass:"title"},[t._v("收货信息")]),t._v(" "),1===t.postForm.isadd?a("div",{staticClass:"ant-row"},[a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("收货人姓名:")]),t._v(" "),t.postForm.address.userName?a("div",{staticClass:"detail"},[t._v(t._s(t.postForm.address.userName))]):t._e()]),t._v(" "),a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("收货人电话:")]),t._v(" "),t.postForm.address?a("div",{staticClass:"detail"},[t._v(t._s(t.postForm.address.phone))]):t._e()]),t._v(" "),a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("收货地址:")]),t._v(" "),t.postForm.address?a("div",{staticClass:"detail"},[t._v(t._s(t.postForm.address.areaMsg))]):t._e()])]):a("div",{staticClass:"ant-row"},[a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("取货店铺:")]),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n                "+t._s(t.postForm.shop.name)+"\n                "),a("br"),t._v("\n                "+t._s(t.postForm.shop.location)+"\n              ")])])])])])]),t._v(" "),1===t.postForm.isadd?a("div",{staticClass:"ant-card"},[a("div",{staticClass:"ant-card-body"},[a("div",{staticClass:"descriptionList"},[a("div",{staticClass:"title"},[t._v("发货物流信息")]),t._v(" "),a("div",{staticClass:"ant-row"},[t.postForm.status>2?a("div",[a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("物流公司:")]),t._v(" "),t.postForm.get_courier?a("div",{staticClass:"detail"},[t._v(t._s(t.postForm.get_courier.courier.label))]):t._e()]),t._v(" "),a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("物流单号:")]),t._v(" "),a("div",{staticClass:"detail"},[t.postForm.get_courier?a("span",[t._v(t._s(t.postForm.get_courier.out_courier_no))]):t._e()])]),t._v(" "),a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("发货时间:")]),t._v(" "),t.postForm.get_courier?a("div",{staticClass:"detail"},[t._v(t._s(t.postForm.get_courier.create_time))]):t._e()]),t._v(" "),a("div",{staticClass:"ant-col-md-8"},[a("div",{staticClass:"term"},[t._v("物流状态:")]),t._v(" "),t.postForm.logis?a("div",{staticClass:"detail"},[t._v(t._s(t.postForm.logis.AcceptStation))]):t._e()])]):a("div",[a("logis",{attrs:{order_id:t.postForm.id},on:{onCourier:t.onCourier}})],1)])])])]):t._e(),t._v(" "),2===t.postForm.isadd?a("div",{staticClass:"ant-card"},[4!==t.postForm.status?a("div",{staticClass:"ant-card-body"},[a("div",{staticClass:"descriptionList"},[a("div",{staticClass:"title"},[t._v("输入取货码")]),t._v(" "),a("div",{staticClass:"ant-row"},[a("div",[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{placeholder:"输入取货码"},model:{value:t.claim_code,callback:function(s){t.claim_code=s},expression:"claim_code"}})],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary"},on:{click:t.onCode}},[t._v("保存")])],1)],1)])])]):t._e()]):t._e(),t._v(" "),a("divider",{attrs:{title:"商品信息"}}),t._v(" "),t.postForm.get_goods?a("div",{staticClass:"goods-info"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.postForm.get_goods,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"",label:"商品图片",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"img",attrs:{src:t.row.images_url}})]}}],null,!1,415267691)}),t._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:"商品名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",align:"center",label:"商品价格"}}),t._v(" "),a("el-table-column",{attrs:{prop:"num",align:"center",label:"商品数量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"suk_name",align:"center",label:"商品属性"}})],1)],1):t._e(),t._v(" "),a("divider",{attrs:{title:"资金情况"}}),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"goods-info"},[a("div",{staticClass:"head-info"},[t._v(t._s(t.postForm.actualPrice))]),t._v(" "),a("div",{staticClass:"head-info"},[t._v(t._s(t.postForm.freight))]),t._v(" "),a("div",{staticClass:"head-info"},[t.postForm.get_user_coupon?a("span",[t._v(t._s(t.postForm.get_user_coupon.get_counpon.sub_price))]):a("span",[t._v("未使用优惠卷")])]),t._v(" "),a("div",{staticClass:"head-info"},[t.postForm.get_user_coupon?a("span",[t._v(t._s(t.postForm.get_user_coupon.get_counpon.sub_price)+"元优惠卷")]):a("span",[t._v("未使用优惠卷")])]),t._v(" "),a("div",{staticClass:"head-info"},[t._v(t._s(t.postForm.totalPrice))]),t._v(" "),a("div",{staticClass:"head-info"},[t._v(t._s(t._f("statusText")(t.postForm.status)))])])],1)])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"goods-heade"},[a("div",{staticClass:"head-info"},[t._v("实付金额")]),t._v(" "),a("div",{staticClass:"head-info"},[t._v("运费")]),t._v(" "),a("div",{staticClass:"head-info"},[t._v("优惠金额")]),t._v(" "),a("div",{staticClass:"head-info"},[t._v("优惠卷名称")]),t._v(" "),a("div",{staticClass:"head-info"},[t._v("订单总金额")]),t._v(" "),a("div",{staticClass:"head-info"},[t._v("订单状态")])])}],c=a("b804"),l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"divider"},[a("div",{staticClass:"b"},[t._v("  ")]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.title))])])},n=[],d={name:"Divider",props:{title:String}},v=d,_=(a("0c6b"),a("2877")),u=Object(_["a"])(v,l,n,!1,null,"4378119c",null),m=u.exports,p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-select",{attrs:{filterable:"",placeholder:"选择快递公司"},model:{value:t.form.courier_id,callback:function(s){t.$set(t.form,"courier_id",s)},expression:"form.courier_id"}},t._l(t.op,(function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.id}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{placeholder:"输入订单号"},model:{value:t.form.out_courier_no,callback:function(s){t.$set(t.form,"out_courier_no",s)},expression:"form.out_courier_no"}})],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary"},on:{click:t.onCourier}},[t._v("保存")])],1)],1)],1)},f=[],C=(a("c5f6"),a("a22c")),h={name:"logis",props:{order_id:Number},data:function(){return{form:{},op:[]}},created:function(){var t=this;Object(C["a"])().then((function(s){console.log(s),t.op=s.data}))},methods:{onCourier:function(){this.$emit("onCourier",this.form)}}},b=h,g=Object(_["a"])(b,p,f,!1,null,"26915fde",null),F=g.exports,y=a("f8b7"),w=(a("ed08"),{name:"Detail",components:{Divider:m,logis:F,Sticky:c["a"]},props:{isEdit:{type:Boolean,default:!1}},filters:{calculate:function(t){return t},statusText:function(t){var s={1:"未支付",2:"待商家发货",3:"已发货",4:"已收货",5:"已取消"};return s[t]},statusShop:function(t){var s={1:"未支付",2:"等待客户取货",3:"已发货",4:"已取货",5:"已取消"};return s[t]}},data:function(){return{kd:[{value:"ANXL",label:"安迅物流"},{value:"AJWL",label:"安捷物流"},{value:"AJWL",label:"安捷物流"}],postForm:{},claim_code:""}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=Object.assign({},defaultForm)},methods:{onCode:function(){var t=this;if(this.claim_code===this.postForm.claim_code){var s={id:this.postForm.id,status:4};Object(y["d"])(s,(function(s){t.postForm.status=5,t.$message({message:"取货成功",type:"success"})}))}else this.$message({message:"取货码错误",type:"warning"})},Settlement:function(){var t=this,s=this.$createElement,a=this.postForm.get_goods.deposit-this.postForm.com_price-this.postForm.default_price,e="请谨慎操作，确认后扣除赔偿金"+this.postForm.com_price+" 损坏金额"+this.postForm.default_price+"元。    将退还用户:"+a+"元押金";this.$msgbox({title:"谨慎操作",message:s("p",null,[s("span",{style:"color: red"},e)]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(s,a,e){if("confirm"===s){var i={id:t.postForm.id,com_price:t.postForm.com_price,default_price:t.postForm.default_price};Object(y["f"])(i).then((function(t){console.log(t)})),console.log("结算成功")}else e()}}).then((function(s){t.$message({type:"info",message:"action: "+s})}))},onCourier:function(t){var s=this;t.order_id=this.postForm.id,Object(y["e"])(t).then((function(t){204!==t.status?s.fetchData(s.postForm.id):s.$message({message:t.msg,type:"warning"})}))},fetchData:function(t){var s=this;Object(y["b"])(t).then((function(t){s.postForm=t.data,console.log(s.postForm)}))}}}),O=w,j=(a("1ae4"),Object(_["a"])(O,o,r,!1,null,"ea714f0a",null)),$=j.exports,x={name:"EditForm",components:{ArticleDetail:$}},k=x,D=Object(_["a"])(k,e,i,!1,null,null,null);s["default"]=D.exports},a22c:function(t,s,a){"use strict";a.d(s,"a",(function(){return i}));var e=a("b775");function i(){return Object(e["a"])({url:"/courier/all",method:"get"})}},f8b7:function(t,s,a){"use strict";a.d(s,"a",(function(){return i})),a.d(s,"d",(function(){return o})),a.d(s,"b",(function(){return r})),a.d(s,"e",(function(){return c})),a.d(s,"c",(function(){return l})),a.d(s,"f",(function(){return n}));var e=a("b775");function i(t){return Object(e["a"])({url:"/order/GetDataByList",method:"get",params:t})}function o(t){return Object(e["a"])({url:"/order/PostDataByCancel",method:"post",data:t})}function r(t){return Object(e["a"])({url:"/order/GetIdByDetails",method:"get",params:{id:t}})}function c(t){return Object(e["a"])({url:"/order/postCourier",method:"post",data:t})}function l(t){return Object(e["a"])({url:"/order/GetOrderByDownload",method:"get",params:t})}function n(t){return Object(e["a"])({url:"/order/postOrderClose",method:"post",data:t})}}}]);