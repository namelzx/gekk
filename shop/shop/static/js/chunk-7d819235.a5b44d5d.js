(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d819235"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,a){var o=l(),s=t-o,r=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=r;var l=Math.easeInOutQuad(c,o,s,e);n(l),c<e?i(t):a&&"function"===typeof a&&a()};u()}},3123:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("b775");function n(){return Object(i["a"])({url:"/qiniu/upload/token",method:"get"})}},6724:function(t,e,a){"use strict";a("8d41");var i="@@wavesContext";function n(t,e){function a(a){var i=Object.assign({},e.value),n=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),s=l.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",l.appendChild(s)),n.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=n.color,s.className="waves-ripple z-active",!1}}return t[i]?t[i].removeHandle=a:t[i]={removeHandle:a},a}var l={bind:function(t,e){t.addEventListener("click",n(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[i].removeHandle,!1),t.addEventListener("click",n(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[i].removeHandle,!1),t[i]=null,delete t[i]}},o=function(t){t.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(o)),l.install=o;e["a"]=l},"8d41":function(t,e,a){},a17e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n      Search\n    ")]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("\n      添加\n    ")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"分类id",prop:"id",align:"center","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"图标",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.ico,width:"70px",height:"70px"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"分类名称",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"排序","min-width":"50px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.sort))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"分类状态",width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("statusFilter")(e.row.status)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"添加时间","min-width":"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.create_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",align:"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v("\n          修改\n        ")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.handleModifyStatus(e.row,"deleted")}}},[t._v("\n          删除\n        ")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[a("el-input",{model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序"}},[a("el-input",{model:{value:t.temp.sort,callback:function(e){t.$set(t.temp,"sort",e)},expression:"temp.sort"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否启用"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.StatusMap,(function(t,e){return a("el-option",{key:t.index,attrs:{label:t.name,value:t.index}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"首页展示"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status_hm,callback:function(e){t.$set(t.temp,"status_hm",e)},expression:"temp.status_hm"}},t._l(t.HomeMap,(function(t,e){return a("el-option",{key:t.index,attrs:{label:t.name,value:t.index}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"分类图标",prop:"name"}},[a("Upload",{attrs:{imageUrl:t.temp.ico},on:{showParentComp:t.handelIco}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n        取消\n      ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("\n        确定\n      ")])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("Confirm")])],1)],1)],1)},n=[],l=(a("ac4d"),a("8a81"),a("ac6a"),a("db72")),o=a("2f62"),s=a("b775");function r(t){return Object(s["a"])({url:"/category/GetDataByList",method:"get",params:t})}function c(){return Object(s["a"])({url:"category/GetCategory",method:"get"})}function u(t){return Object(s["a"])({url:"/category/GetIdByDel",method:"get",params:{id:t}})}function d(t){return Object(s["a"])({url:"/category/PostDataBySave",method:"post",data:t})}var p=a("6724"),m=(a("ed08"),a("333d")),f=a("97b4"),v={name:"ComplexTable",components:{Pagination:m["a"],Upload:f["a"]},directives:{waves:p["a"]},filters:{statusFilter:function(t){var e={1:"启用",2:"禁用",deleted:"danger"};return e[t]},typeFilter:function(t){return calendarTypeKeyValue[t]}},data:function(){return{tableKey:0,list:[],total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,name:"",sort:0,ico:"",status:2,status_hm:2},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},StatusMap:[{index:2,name:"禁用"},{index:1,name:"启用"}],HomeMap:[{index:2,name:"不展示"},{index:1,name:"展示"}],dialogPvVisible:!1,pvData:[],rules:{name:[{required:!0,message:"名称必须输入",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList(),c().then((function(t){console.log(t)}))},computed:Object(l["a"])({},Object(o["b"])(["shop_id"])),methods:{handelIco:function(t){this.temp.ico=t},getList:function(){var t=this;this.listLoading=!0,this.listQuery.shop_id=this.shop_id,r(this.listQuery).then((function(e){t.list=e.data.data,console.log(t.list),t.total=e.data.total,setTimeout((function(){t.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){var a=this;u(t.id).then((function(e){a.list.splice(t,1),a.$message({type:"success",message:e.msg})}))},handleCreate:function(){var t=this;this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&(t.temp.shop_id=t.shop_id,d(t.temp).then((function(e){t.list.unshift(e.data),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(t){var e=this;this.temp=t,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);d(a).then((function(){var e=!0,a=!1,i=void 0;try{for(var n,l=t.list[Symbol.iterator]();!(e=(n=l.next()).done);e=!0){var o=n.value;if(o.id===t.temp.id){var s=t.list.indexOf(o);t.list.splice(s,1,t.temp);break}}}catch(r){a=!0,i=r}finally{try{e||null==l.return||l.return()}finally{if(a)throw i}}t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handleDelete:function(t){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;fetchPv(t).then((function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0}))}}},h=v,b=a("2877"),g=Object(b["a"])(h,i,n,!1,null,null,null);e["default"]=g.exports}}]);