(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e6c6c65"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,n){var l=s(),r=t-l,o=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=o;var s=Math.easeInOutQuad(u,l,r,e);i(s),u<e?a(t):n&&"function"===typeof n&&n()};c()}},6724:function(t,e,n){"use strict";n("8d41");var a="@@wavesContext";function i(t,e){function n(n){var a=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),s=i.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var l=s.getBoundingClientRect(),r=s.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(l.width,l.height)+"px",s.appendChild(r)),i.type){case"center":r.style.top=l.height/2-r.offsetHeight/2+"px",r.style.left=l.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(n.pageY-l.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(n.pageX-l.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=i.color,r.className="waves-ripple z-active",!1}}return t[a]?t[a].removeHandle=n:t[a]={removeHandle:n},n}var s={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[a].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[a].removeHandle,!1),t[a]=null,delete t[a]}},l=function(t){t.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(l)),s.install=l;e["a"]=s},"8d41":function(t,e,n){},"99a8":function(t,e,n){"use strict";var a=n("aa84"),i=n.n(a);i.a},aa84:function(t,e,n){},cace:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索买家姓名"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入收货人手机号"},model:{value:t.listQuery.mobile,callback:function(e){t.$set(t.listQuery,"mobile",e)},expression:"listQuery.mobile"}}),t._v(" "),n("el-select",{staticClass:"filter-item",attrs:{placeholder:"订单状态"},on:{change:t.handleFilter},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),n("el-date-picker",{staticClass:"filter-item",attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.listQuery.time,callback:function(e){t.$set(t.listQuery,"time",e)},expression:"listQuery.time"}}),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n        搜索\n      ")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,fit:"",border:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"订单号",prop:"id","min-width":"200",fixed:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.order_no))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"下单时间","min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.create_time))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品名称","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.goods?n("span",[t._v(t._s(e.row.goods.name))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"佣金","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.comm_sum?n("span",[t._v(t._s(e.row.comm_sum))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"付款状态","min-width":"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status<5?n("div",[e.row.status>1?n("el-tag",{attrs:{type:"success"}},[t._v("已付款")]):n("el-tag",{attrs:{type:"info"}},[t._v("未付款")])],1):n("div",[n("el-tag",{attrs:{type:"danger"}},[t._v("订单取消")])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"发货状态","min-width":"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status<5?n("div",[e.row.status<3?n("el-tag",{attrs:{type:"info"}},[t._v("待发货")]):n("el-tag",{attrs:{type:"success"}},[t._v("已发货")])],1):n("div",[n("el-tag",{attrs:{type:"danger"}},[t._v("订单取消")])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"收货状态","min-width":"100px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status<9?n("div",[e.row.status<4?n("el-tag",{attrs:{type:"info"}},[t._v("待收货")]):n("el-tag",{attrs:{type:"success"}},[t._v("已收货")])],1):n("div",[n("el-tag",{attrs:{type:"danger"}},[t._v("订单取消")])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"买家","min-width":"120px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.get_user?n("span",[t._v(t._s(e.row.get_user.nickName))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"收货地址/商铺","min-width":"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.isadd?n("div",[t._v(t._s(e.row.address.areaMsg))]):n("div",[e.row.shop?n("span",[t._v("\n"+t._s(e.row.shop.name)+"\n\n            ")]):t._e()])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"订单备注","min-width":"180px",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.adesc))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",fixed:"right",align:"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover"}},[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.adesc,callback:function(e){t.adesc=e},expression:"adesc"}}),t._v(" "),n("el-button",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handelDesc(a)}}},[t._v("保存\n            ")]),t._v(" "),n("el-button",{attrs:{slot:"reference",type:"text",size:"mini"},slot:"reference"},[t._v("\n              备注\n            ")])],1),t._v(" "),n("router-link",{attrs:{to:"/order/detail/"+a.id}},[n("el-button",{attrs:{type:"text",size:"mini"}},[t._v("\n              编辑\n            ")])],1)]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},i=[],s=n("db72"),l=n("bd86"),r=n("f8b7"),o=n("6724"),u=(n("ed08"),n("333d")),c=n("2f62"),d={name:"ComplexTable",components:{Pagination:u["a"]},directives:{waves:o["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},statusText:function(t){var e=Object(l["a"])({1:"未支付",2:"已支付",3:"已确认",4:"已发货"},"4","已收货");return e[t]}},computed:Object(s["a"])({},Object(c["b"])(["shop_id"])),data:function(){return{adesc:"",options:[{value:"0",label:"全部"},{value:"1",label:"待付款"},{value:"2",label:"待发货"},{value:"3",label:"待收货"},{value:"4",label:"已完成"},{value:"5",label:"已取消"}],value:"",tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1}},created:function(){this.listQuery.status=this.$route.path.substring(14,20),this.getList()},methods:{handelDesc:function(t){var e=this,n={id:t.id,adesc:this.adesc};Object(r["d"])(n).then((function(n){t.adesc=e.adesc,e.adesc=""}))},getList:function(){var t=this;this.listLoading=!0,this.listQuery.shop_id=this.shop_id,Object(r["a"])(this.listQuery).then((function(e){t.list=e.data.data,t.total=e.data.total,setTimeout((function(){t.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作Success",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,n=t.order;"id"===e&&this.sortByID(n)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},handleDelete:function(t){var e=this;GetIdByDel(t.id).then((function(n){e.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3});var a=e.list.indexOf(t);e.list.splice(a,1)}))},handleCancel:function(t){var e=this;console.log(t);var n={id:t.id,status:9};if(9===t.status)return this.$notify({title:"信息提示",message:"订单已取消",type:"success",duration:2e3}),!1;t.status=9,Object(r["d"])(n).then((function(t){e.$notify({title:"信息提示",message:t.msg,type:"success",duration:2e3})}))}}},p=d,f=(n("99a8"),n("2877")),m=Object(f["a"])(p,a,i,!1,null,"249dcd0e",null);e["default"]=m.exports},f8b7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"f",(function(){return u}));var a=n("b775");function i(t){return Object(a["a"])({url:"/order/GetDataByList",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/order/PostDataByCancel",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/order/GetIdByDetails",method:"get",params:{id:t}})}function r(t){return Object(a["a"])({url:"/order/postCourier",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/order/GetOrderByDownload",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/order/postOrderClose",method:"post",data:t})}}}]);