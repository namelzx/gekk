(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c6a4a93"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function l(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(t,e,n){var i=o(),r=t-i,s=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=s;var o=Math.easeInOutQuad(u,i,r,e);l(o),u<e?a(t):n&&"function"===typeof n&&n()};c()}},"1e8c":function(t,e,n){},"634a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{ref:"form",attrs:{model:t.listQuery,"label-width":"80px"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"订单编号:"}},[n("el-input",{attrs:{placeholder:"请输入订单编号"},model:{value:t.listQuery.order_no,callback:function(e){t.$set(t.listQuery,"order_no",e)},expression:"listQuery.order_no"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"订单状态:"}},[n("el-select",{attrs:{placeholder:"订单状态"},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"用户姓名:"}},[n("el-input",{attrs:{placeholder:"请输入收货人姓名"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"用户手机:"}},[n("el-input",{attrs:{placeholder:"请输入收货人手机号"},model:{value:t.listQuery.mobile,callback:function(e){t.$set(t.listQuery,"mobile",e)},expression:"listQuery.mobile"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"下单时间:"}},[n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.listQuery.time,callback:function(e){t.$set(t.listQuery,"time",e)},expression:"listQuery.time"}})],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索\n        ")])],1),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("导出订单\n        ")])],1)],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"订单号",prop:"id","min-width":"180",fixed:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.order_no))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"下单时间","min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.create_time))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品名称","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.goods.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"佣金","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.comm_sum?n("span",[t._v(t._s(e.row.comm_sum))]):n("span",[t._v("0")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"付款状态","min-width":"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status<5?n("div",[e.row.status>1?n("el-tag",{attrs:{type:"success"}},[t._v("已付款")]):n("el-tag",{attrs:{type:"info"}},[t._v("未付款")])],1):n("div",[n("el-tag",{attrs:{type:"danger"}},[t._v("订单取消")])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"发货状态","min-width":"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status<5?n("div",[e.row.status<3?n("el-tag",{attrs:{type:"info"}},[t._v("待发货")]):n("el-tag",{attrs:{type:"success"}},[t._v("已发货")])],1):n("div",[n("el-tag",{attrs:{type:"danger"}},[t._v("订单取消")])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"收货状态","min-width":"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status<5?n("div",[e.row.status<4?n("el-tag",{attrs:{type:"info"}},[t._v("待收货")]):n("el-tag",{attrs:{type:"success"}},[t._v("已收货")])],1):n("div",[n("el-tag",{attrs:{type:"danger"}},[t._v("订单取消")])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"买家","min-width":"120px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.get_user?n("span",[t._v(t._s(e.row.get_user.nickName))]):n("span",[t._v("用户已被删除")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"收货地址/商铺","min-width":"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.isadd?n("div",[t._v(t._s(e.row.address.areaMsg))]):n("div",[t._v(t._s(e.row.shop.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",fixed:"right",align:"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("router-link",{attrs:{to:"/order/detail/"+a.id}},[n("el-button",{attrs:{type:"text",size:"mini"}},[t._v("查看")])],1)]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},l=[],o=n("db72"),i=n("f8b7"),r=n("6724"),s=n("ed08"),u=n("333d"),c=n("2f62"),d={name:"ComplexTable",components:{Pagination:u["a"]},directives:{waves:r["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},statusText:function(t){var e={1:"未支付",2:"已支付",3:"已确认",4:"已发货",5:"已收货"};return e[t]}},computed:Object(o["a"])({},Object(c["b"])(["shop_id"])),data:function(){return{options:[{value:"0",label:"全部"},{value:"1",label:"待付款"},{value:"2",label:"待发货"},{value:"3",label:"待收货"},{value:"4",label:"已完成"},{value:"5",label:"已取消"}],value:"",tableKey:0,list:null,total:0,listLoading:!1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1}},created:function(){},methods:{getList:function(){var t=this;this.listLoading=!0,this.listQuery.shop_id=this.shop_id,Object(i["a"])(this.listQuery).then((function(e){t.list=e.data.data,t.total=e.data.total,setTimeout((function(){t.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作Success",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,n=t.order;"id"===e&&this.sortByID(n)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},handleDelete:function(t){var e=this;GetIdByDel(t.id).then((function(n){e.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3});var a=e.list.indexOf(t);e.list.splice(a,1)}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Object(i["c"])(this.listQuery).then((function(e){t.downLoad(e.data)}))},downLoad:function(t){var e=this;Promise.all([n.e("chunk-e69e90f4"),n.e("chunk-581b2547")]).then(n.bind(null,"4bf8d")).then((function(n){var a=["Id","下单时间","下单店铺","商品名称","属性","价格","数量"],l=["id","create_time","shopname","name","suk_name","price","num"],o=e.formatJson(l,t);n.export_json_to_excel({header:a,data:o,filename:e.filename,autoWidth:e.autoWidth,bookType:e.bookType}),e.downloadLoading=!1}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return console.log(t),"create_time"===t?Object(s["c"])(e[t]):e[t]}))}))}}},p=d,m=(n("9a2b"),n("2877")),f=Object(m["a"])(p,a,l,!1,null,null,null);e["default"]=f.exports},6724:function(t,e,n){"use strict";n("8d41");var a="@@wavesContext";function l(t,e){function n(n){var a=Object.assign({},e.value),l=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),o=l.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var i=o.getBoundingClientRect(),r=o.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(i.width,i.height)+"px",o.appendChild(r)),l.type){case"center":r.style.top=i.height/2-r.offsetHeight/2+"px",r.style.left=i.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(n.pageY-i.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(n.pageX-i.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=l.color,r.className="waves-ripple z-active",!1}}return t[a]?t[a].removeHandle=n:t[a]={removeHandle:n},n}var o={bind:function(t,e){t.addEventListener("click",l(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[a].removeHandle,!1),t.addEventListener("click",l(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[a].removeHandle,!1),t[a]=null,delete t[a]}},i=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(i)),o.install=i;e["a"]=o},"8d41":function(t,e,n){},"9a2b":function(t,e,n){"use strict";var a=n("1e8c"),l=n.n(a);l.a},f8b7:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return u}));var a=n("b775");function l(t){return Object(a["a"])({url:"/order/GetDataByList",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/order/PostDataByCancel",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/order/GetIdByDetails",method:"get",params:{id:t}})}function r(t){return Object(a["a"])({url:"/order/postCourier",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/order/GetOrderByDownload",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/order/postOrderClose",method:"post",data:t})}}}]);