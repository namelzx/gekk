(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f4a1de2"],{"05f1":function(t,e,n){"use strict";var o=n("578f"),a=n.n(o);a.a},2423:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return l}));var o=n("b775");function a(t){return Object(o["a"])({url:"/article/GetDataByList",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/article/GetIdByDetails",method:"get",params:{id:t}})}function i(t){return Object(o["a"])({url:"/article/GetIdByDel",method:"get",params:{id:t}})}function r(t){return Object(o["a"])({url:"/article/PostDataBySave",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/article/PostDataByUp",method:"post",data:t})}},"281c":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"createPost-container"},[n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{rules:t.rules,model:t.postForm}},[n("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("\n        保存\n      ")])],1),t._v(" "),n("div",{staticClass:"createPost-main-container"},[n("divider",{attrs:{title:"基本信息"}}),t._v(" "),n("div",[n("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"商品名称:",prop:"name"}},[n("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7}},[n("el-form-item",{attrs:{"label-width":"100px",label:"兑换积分:"}},[n("el-input",{attrs:{placeholder:"输入积分"},model:{value:t.postForm.integral,callback:function(e){t.$set(t.postForm,"integral",e)},expression:"postForm.integral"}})],1)],1)],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7}},[n("el-form-item",{attrs:{"label-width":"100px",label:"商品主图:"}},[n("SukImages",{attrs:{imageUrl:t.postForm.images_url},on:{showParentComp:t.HandelImages}})],1)],1)],1)],1),t._v(" "),n("divider",{attrs:{title:"轮播图管理"}}),t._v(" "),n("div",[n("ListImage",{attrs:{list:t.banner},on:{showParentComp:t.HandelBanner,RemoveParentComp:t.handleRemove}})],1),t._v(" "),n("divider",{attrs:{title:"商品介绍"}}),t._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[n("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)],1)],1)],1)},s=[],i=n("bd86"),r=(n("7f7f"),n("db72")),l=n("8256"),c=n("70a2"),u=n("abaf"),d=n("1aba"),m=n("b804"),p=(n("61f7"),n("2423"),n("828d")),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[t._v("\n  Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support\n  caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching\n  effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all\n  pages directly. See details\n  "),n("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[t._v("Document")])])}],g=n("2877"),b={},v=Object(g["a"])(b,f,h,!1,null,null,null),_=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divider"},[n("div",{staticClass:"b"},[t._v("  ")]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.title))])])},w=[],k={name:"Divider",props:{title:String}},O=k,F=(n("05f1"),Object(g["a"])(O,y,w,!1,null,"3658984c",null)),x=F.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    "+t._s(t.comment_disabled?"Comment: closed":"Comment: opened")+"\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("el-radio-group",{staticStyle:{padding:"10px"},model:{value:t.comment_disabled,callback:function(e){t.comment_disabled=e},expression:"comment_disabled"}},[n("el-radio",{attrs:{label:!0}},[t._v("\n          Close comment\n        ")]),t._v(" "),n("el-radio",{attrs:{label:!1}},[t._v("\n          Open comment\n        ")])],1)],1)],1)],1)},C=[],D={props:{value:{type:Boolean,default:!1}},computed:{comment_disabled:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},$=D,S=Object(g["a"])($,j,C,!1,null,null,null),I=S.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"hide-on-click":!1,"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    Platfroms("+t._s(t.platforms.length)+")\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-border",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:t.platforms,callback:function(e){t.platforms=e},expression:"platforms"}},t._l(t.platformsOptions,(function(e){return n("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),1)],1)],1)},B=[],G={props:{value:{required:!0,default:function(){return[]},type:Array}},data:function(){return{platformsOptions:[{key:"a-platform",name:"a-platform"},{key:"b-platform",name:"b-platform"},{key:"c-platform",name:"c-platform"}]}},computed:{platforms:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},E=G,L=Object(g["a"])(E,P,B,!1,null,null,null),T=L.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    Link\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-padding no-border",staticStyle:{width:"400px"},attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"label-width":"0px",prop:"source_uri"}},[n("el-input",{attrs:{placeholder:"Please enter the content"},model:{value:t.source_uri,callback:function(e){t.source_uri=e},expression:"source_uri"}},[n("template",{slot:"prepend"},[t._v("\n          URL\n        ")])],2)],1)],1)],1)},U=[],V={props:{value:{type:String,default:""}},computed:{source_uri:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},H=V,A=Object(g["a"])(H,R,U,!1,null,null,null),q=A.exports,z=n("31cb"),J=n("ba29"),K=n("2f62"),M={name:"",category_id:"",brand_id:"",specifications:"",total_price:"",monthly:"",deposit:"",images_url:"",is_renew:1,is_op:1,sukindx:0,goods_suk:[{tag:"",images_url:"",inventory:""}]},N=(o={name:"ArticleDetail",components:{Divider:x,Tinymce:l["a"],MDinput:d["a"],Upload:c["a"],Sticky:m["a"],Warning:_,CommentDropdown:I,PlatformDropdown:T,SourceUrlDropdown:q,ListImage:z["a"],SukImages:u["a"]},props:{isEdit:{type:Boolean,default:!1}},filters:{statusFilter:function(t){var e={1:"",2:"info"};return e[t]}},computed:{},data:function(){var t=this,e=function(e,n,o){console.log(n),""===n?(t.$message({message:e.message+"为必选",type:"error"}),o(new Error(e.field+"为必传项"))):o()};return{photoVisible:!1,banner:[],specifications:[],category:[],postForm:Object.assign({},M),loading:!1,userListOptions:[],brand:[],rules:{image_uri:[{validator:e}]},tempRoute:{},photo:[]}}},Object(i["a"])(o,"computed",Object(r["a"])({displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}}},Object(K["b"])(["shop_id"]))),Object(i["a"])(o,"created",(function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=Object.assign({},M);this.tempRoute=Object.assign({},this.$route)})),Object(i["a"])(o,"methods",{handelPhoto:function(t,e){var n=this;GetLibrary().then((function(t){n.photo=t.data})),this.sukindx=e,this.photoVisible=!0},handelChoiceImage:function(t){this.postForm.goods_suk[this.sukindx].images_url=t.url,this.photoVisible=!1},HandelSukImages:function(t){this.postForm.goods_suk[t.index].images_url=t.images_url},handelSUK:function(){this.postForm.goods_suk.push({tag:"",images_url:"",inventory:""})},onServer:function(t,e){console.log(e),"is_renew"===e?this.postForm.is_renew=1===t?2:1:this.postForm.is_op=1===t?2:1},handleRemove:function(t){this.banner=t},HandelBanner:function(t){console.log(t),this.banner.push({name:t.name,url:t.response.path,uid:t.uid})},HandelImages:function(t){this.postForm.images_url=t.images_url},handelinfotype:function(t){console.log(t);var e=this,n=this.specifications[t].infotype;console.log(n),e.specifications[t].infotype.push({name:"",info:""})},fetchData:function(t){var e=this;Object(J["c"])(t).then((function(t){e.postForm=t.data,e.banner=t.banner,e.setTagsViewTitle(),e.setPageTitle()})).catch((function(t){console.log(t)}))},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="编辑商品";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;this.$refs.postForm.validate((function(e){if(!e)return!1;t.postForm.shop_id=t.shop_id;var n={temp:t.postForm,banner:t.banner};Object(J["d"])(n).then((function(e){t.$notify({title:"成功",message:e.msg,type:"success",duration:2e3})})),t.loading=!1}))},draftForm:function(){0!==this.postForm.content.length&&0!==this.postForm.title.length?this.$message({message:"保存成功",type:"success",showClose:!0,duration:1e3}):this.$message({message:"请填写必要的标题和内容",type:"warning"})},getRemoteUserList:function(t){var e=this;Object(p["a"])(t).then((function(t){t.data.items&&(e.userListOptions=t.data.items.map((function(t){return t.name})))}))}}),o),W=N,Q=(n("c6a1"),Object(g["a"])(W,a,s,!1,null,"6132e5f2",null));e["a"]=Q.exports},"287e":function(t,e,n){},3123:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("b775");function a(){return Object(o["a"])({url:"/qiniu/upload/token",method:"get"})}},"578f":function(t,e,n){},"828d":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("b775");function a(t){return Object(o["a"])({url:"/search/user",method:"get",params:{name:t}})}},ba29:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return l}));var o=n("b775");function a(t){return Object(o["a"])({url:"/IntGoods/GetDataByList",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/IntGoods/GetIdByDetails",method:"get",params:{id:t}})}function i(t){return Object(o["a"])({url:"/IntGoods/GetIdByDel",method:"get",params:{id:t}})}function r(t){return Object(o["a"])({url:"/IntGoods/PostDataBySave",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/IntGoods/PostDataByUp",method:"post",data:t})}},c6a1:function(t,e,n){"use strict";var o=n("287e"),a=n.n(o);a.a}}]);