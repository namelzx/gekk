(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f7499d8"],{2423:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"d",(function(){return i})),a.d(e,"e",(function(){return l}));var o=a("b775");function n(t){return Object(o["a"])({url:"/article/GetDataByList",method:"get",params:t})}function r(t){return Object(o["a"])({url:"/article/GetIdByDetails",method:"get",params:{id:t}})}function s(t){return Object(o["a"])({url:"/article/GetIdByDel",method:"get",params:{id:t}})}function i(t){return Object(o["a"])({url:"/article/PostDataBySave",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/article/PostDataByUp",method:"post",data:t})}},"28c7":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createPost-container"},[a("el-form",{ref:"postForm",staticClass:"form-container",attrs:{rules:t.rules,model:t.postForm}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"createPost-main-container"},[a("divider",{attrs:{title:"基本信息"}}),t._v(" "),a("div",[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"商品名称:",prop:"name"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"所属分类:"}},[a("el-select",{staticClass:"filter-item",attrs:{prod:"category_id",placeholder:"选择所属分类"},model:{value:t.postForm.category_id,callback:function(e){t.$set(t.postForm,"category_id",e)},expression:"postForm.category_id"}},t._l(t.category,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"运费:"}},[a("el-input",{attrs:{placeholder:"输入运费"},model:{value:t.postForm.freight,callback:function(e){t.$set(t.postForm,"freight",e)},expression:"postForm.freight"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"积分:"}},[a("el-input",{attrs:{placeholder:"输入积分"},model:{value:t.postForm.integral,callback:function(e){t.$set(t.postForm,"integral",e)},expression:"postForm.integral"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"商品主图:"}},[a("SukImages",{attrs:{imageUrl:t.postForm.images_url},on:{showParentComp:t.HandelImages}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"价格:"}},[a("el-input",{attrs:{placeholder:"输入价格"},model:{value:t.postForm.price,callback:function(e){t.$set(t.postForm,"price",e)},expression:"postForm.price"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"划线价格:"}},[a("el-input",{attrs:{placeholder:"输入划线价格"},model:{value:t.postForm.line_price,callback:function(e){t.$set(t.postForm,"line_price",e)},expression:"postForm.line_price"}})],1)],1)],1)],1),t._v(" "),a("divider",{attrs:{title:"商品SUK"}}),t._v(" "),a("div",[a("div",t._l(t.postForm.goods_suk,(function(e,o){return a("el-card",{key:o,staticClass:"box-card"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"颜色名称:",prop:"goods_suk"}},[a("el-input",{attrs:{placeholder:"如:颜色"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"sukitem.name"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"SUK图片:",prod:"category_id"}},[a("SukImages",{attrs:{imageUrl:e.images_url,index:o},on:{showParentComp:t.HandelSukImages}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"出售价:"}},[a("el-input",{attrs:{type:"number",placeholder:"出售价格"},model:{value:e.price,callback:function(a){t.$set(e,"price",a)},expression:"sukitem.price"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"划线价:"}},[a("el-input",{attrs:{type:"number",placeholder:"划线价格"},model:{value:e.line_price,callback:function(a){t.$set(e,"line_price",a)},expression:"sukitem.line_price"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px",label:"库存:"}},[a("el-input",{attrs:{type:"number",placeholder:"库存量"},model:{value:e.inventory,callback:function(a){t.$set(e,"inventory",a)},expression:"sukitem.inventory"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{"label-width":"100px"}},[a("el-button",{attrs:{type:"text"}},[t._v("添加选择项")])],1)],1)],1)],1)})),1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handelSUK}},[t._v("添加SUK")])],1),t._v(" "),a("divider",{attrs:{title:"轮播图管理"}}),t._v(" "),a("div",[a("ListImage",{attrs:{list:t.banner},on:{showParentComp:t.HandelBanner,RemoveParentComp:t.handleRemove}})],1),t._v(" "),a("divider",{attrs:{title:"商品介绍"}}),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[a("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)],1)],1)],1)},n=[],r=(a("7f7f"),a("db72")),s=a("8256"),i=a("70a2"),l=a("abaf"),c=a("1aba"),u=a("b804"),p=(a("61f7"),a("2423"),a("828d")),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[t._v("\n  Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support\n  caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching\n  effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all\n  pages directly. See details\n  "),a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[t._v("Document")])])}],f=a("2877"),h={},b=Object(f["a"])(h,d,m,!1,null,null,null),g=b.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider"},[a("div",{staticClass:"b"},[t._v("  ")]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.title))])])},_=[],y={name:"Divider",props:{title:String}},w=y,k=(a("db8d"),Object(f["a"])(w,v,_,!1,null,"2bdd3b9c",null)),x=k.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[a("el-button",{attrs:{plain:""}},[t._v("\n    "+t._s(t.comment_disabled?"Comment: closed":"Comment: opened")+"\n    "),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-radio-group",{staticStyle:{padding:"10px"},model:{value:t.comment_disabled,callback:function(e){t.comment_disabled=e},expression:"comment_disabled"}},[a("el-radio",{attrs:{label:!0}},[t._v("\n          Close comment\n        ")]),t._v(" "),a("el-radio",{attrs:{label:!1}},[t._v("\n          Open comment\n        ")])],1)],1)],1)],1)},O=[],j={props:{value:{type:Boolean,default:!1}},computed:{comment_disabled:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},$=j,C=Object(f["a"])($,F,O,!1,null,null,null),S=C.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dropdown",{attrs:{"hide-on-click":!1,"show-timeout":100,trigger:"click"}},[a("el-button",{attrs:{plain:""}},[t._v("\n    Platfroms("+t._s(t.platforms.length)+")\n    "),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{staticClass:"no-border",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:t.platforms,callback:function(e){t.platforms=e},expression:"platforms"}},t._l(t.platformsOptions,(function(e){return a("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),1)],1)],1)},P=[],B={props:{value:{required:!0,default:function(){return[]},type:Array}},data:function(){return{platformsOptions:[{key:"a-platform",name:"a-platform"},{key:"b-platform",name:"b-platform"},{key:"c-platform",name:"c-platform"}]}},computed:{platforms:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},I=B,U=Object(f["a"])(I,D,P,!1,null,null,null),E=U.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[a("el-button",{attrs:{plain:""}},[t._v("\n    Link\n    "),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{staticClass:"no-padding no-border",staticStyle:{width:"400px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"label-width":"0px",prop:"source_uri"}},[a("el-input",{attrs:{placeholder:"Please enter the content"},model:{value:t.source_uri,callback:function(e){t.source_uri=e},expression:"source_uri"}},[a("template",{slot:"prepend"},[t._v("\n          URL\n        ")])],2)],1)],1)],1)},L=[],R={props:{value:{type:String,default:""}},computed:{source_uri:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},T=R,V=Object(f["a"])(T,G,L,!1,null,null,null),H=V.exports,K=a("31cb"),A=a("9add"),q=a("2f62"),z=a("c40e"),J={name:"",category_id:"",brand_id:"",specifications:"",total_price:"",monthly:"",deposit:"",images_url:"",is_renew:1,is_op:1,sukindx:0,goods_suk:[{tag:"",images_url:"",inventory:""}]},M={name:"ArticleDetail",components:{Divider:x,Tinymce:s["a"],MDinput:c["a"],Upload:i["a"],Sticky:u["a"],Warning:g,CommentDropdown:S,PlatformDropdown:E,SourceUrlDropdown:H,ListImage:K["a"],SukImages:l["a"]},props:{isEdit:{type:Boolean,default:!1}},filters:{statusFilter:function(t){var e={1:"",2:"info"};return e[t]}},data:function(){var t=this,e=function(e,a,o){console.log(a),""===a?(t.$message({message:e.message+"为必选",type:"error"}),o(new Error(e.field+"为必传项"))):o()};return{photoVisible:!1,banner:[],specifications:[],category:[],postForm:Object.assign({},J),loading:!1,userListOptions:[],brand:[],rules:{image_uri:[{validator:e}]},tempRoute:{},photo:[]}},computed:Object(r["a"])({},Object(q["b"])(["shop_id"])),created:function(){var t=this;if(this.isEdit){var e=this.$route.params&&this.$route.params.id;this.fetchData(e)}else this.postForm=Object.assign({},J);Object(A["a"])().then((function(e){t.category=e.data})),this.tempRoute=Object.assign({},this.$route)},methods:{handelPhoto:function(t,e){var a=this;GetLibrary().then((function(t){a.photo=t.data})),this.sukindx=e,this.photoVisible=!0},handelChoiceImage:function(t){this.postForm.goods_suk[this.sukindx].images_url=t.url,this.photoVisible=!1},HandelSukImages:function(t){this.postForm.goods_suk[t.index].images_url=t.images_url},handelSUK:function(){this.postForm.goods_suk.push({tag:"",images_url:"",inventory:""})},onServer:function(t,e){console.log(e),"is_renew"===e?this.postForm.is_renew=1===t?2:1:this.postForm.is_op=1===t?2:1},handleRemove:function(t){this.banner=t},HandelBanner:function(t){console.log(t),this.banner.push({name:t.name,url:t.response.path,uid:t.uid})},HandelImages:function(t){this.postForm.images_url=t.images_url},handelinfotype:function(t){console.log(t);var e=this,a=this.specifications[t].infotype;console.log(a),e.specifications[t].infotype.push({name:"",info:""})},fetchData:function(t){var e=this;Object(z["d"])(t).then((function(t){e.postForm=t.data,e.banner=t.banner,e.setTagsViewTitle(),e.setPageTitle()})).catch((function(t){console.log(t)}))},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="编辑商品";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;this.postForm.shop_id=this.shop_id,this.$refs.postForm.validate((function(e){if(!e)return!1;var a={temp:t.postForm,banner:t.banner};Object(z["e"])(a).then((function(e){t.$notify({title:"成功",message:e.msg,type:"success",duration:2e3})})),t.loading=!1}))},draftForm:function(){0!==this.postForm.content.length&&0!==this.postForm.title.length?this.$message({message:"保存成功",type:"success",showClose:!0,duration:1e3}):this.$message({message:"请填写必要的标题和内容",type:"warning"})},getRemoteUserList:function(t){var e=this;Object(p["a"])(t).then((function(t){t.data.items&&(e.userListOptions=t.data.items.map((function(t){return t.name})))}))}}},N=M,W=(a("31a1"),Object(f["a"])(N,o,n,!1,null,"515fb248",null));e["a"]=W.exports},3123:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a("b775");function n(){return Object(o["a"])({url:"/qiniu/upload/token",method:"get"})}},"31a1":function(t,e,a){"use strict";var o=a("5ec1"),n=a.n(o);n.a},"5ec1":function(t,e,a){},"6df9":function(t,e,a){},"828d":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var o=a("b775");function n(t){return Object(o["a"])({url:"/search/user",method:"get",params:{name:t}})}function r(t){return Object(o["a"])({url:"/transaction/list",method:"get",params:t})}},"9add":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a("b775");function n(){return Object(o["a"])({url:"category/GetCategory",method:"get"})}},c40e:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"f",(function(){return l})),a.d(e,"b",(function(){return c}));var o=a("b775");function n(t){return Object(o["a"])({url:"/goods/GetDataByList",method:"get",params:t})}function r(t){return Object(o["a"])({url:"/goods/GetIdByDetails",method:"get",params:{id:t}})}function s(t){return Object(o["a"])({url:"/goods/GetIdByDel",method:"get",params:{id:t}})}function i(t){return Object(o["a"])({url:"/goods/PostDataBySave",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/goods/PostDataByUp",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/goods/GetGoodsByUp",method:"get",params:{shop_id:t}})}},db8d:function(t,e,a){"use strict";var o=a("6df9"),n=a.n(o);n.a}}]);