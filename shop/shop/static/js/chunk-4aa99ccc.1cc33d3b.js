(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aa99ccc"],{2423:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return l}));var a=n("b775");function o(t){return Object(a["a"])({url:"/article/GetDataByList",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/article/GetIdByDetails",method:"get",params:{id:t}})}function r(t){return Object(a["a"])({url:"/article/GetIdByDel",method:"get",params:{id:t}})}function i(t){return Object(a["a"])({url:"/article/PostDataBySave",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/article/PostDataByUp",method:"post",data:t})}},3123:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("b775");function o(){return Object(a["a"])({url:"/qiniu/upload/token",method:"get"})}},"45b8":function(t,e,n){},"828d":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("b775");function o(t){return Object(a["a"])({url:"/search/user",method:"get",params:{name:t}})}},a13f:function(t,e,n){"use strict";var a=n("45b8"),o=n.n(a);o.a},a952:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Detail",{attrs:{"is-edit":!1}})},o=[],s=n("cb2d"),r={name:"CreateForm",components:{Detail:s["a"]}},i=r,l=n("2877"),c=Object(l["a"])(i,a,o,!1,null,"5aec6e7b",null);e["default"]=c.exports},c0f9:function(t,e,n){"use strict";var a=n("d163"),o=n.n(a);o.a},cb2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"createPost-container"},[n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{rules:t.rules,model:t.postForm}},[n("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("保存")])],1),t._v(" "),n("div",{staticClass:"createPost-main-container"},[n("divider",{attrs:{title:"基本信息"}}),t._v(" "),n("div",[n("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"100px",label:"文章标题:",prop:"name"}},[n("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7}},[n("el-form-item",{attrs:{"label-width":"100px",label:"文章主图:"}},[n("SukImages",{attrs:{imageUrl:t.postForm.images_url},on:{showParentComp:t.HandelImages}})],1)],1)],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:15}},[n("el-form-item",{attrs:{"label-width":"100px",label:"描述:"}},[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.postForm.desc,callback:function(e){t.$set(t.postForm,"desc",e)},expression:"postForm.desc"}})],1)],1)],1)],1),t._v(" "),n("divider",{attrs:{title:"介绍"}}),t._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[n("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)],1)],1)],1)},o=[],s=(n("7f7f"),n("db72")),r=n("2f62"),i=n("8256"),l=n("70a2"),c=n("abaf"),u=n("1aba"),m=n("b804"),d=(n("61f7"),n("828d")),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[t._v("\n  Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support\n  caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching\n  effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all\n  pages directly. See details\n  "),n("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[t._v("Document")])])}],h=n("2877"),b={},g=Object(h["a"])(b,p,f,!1,null,null,null),v=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divider"},[n("div",{staticClass:"b"},[t._v("  ")]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.title))])])},w=[],y={name:"Divider",props:{title:String}},k=y,x=(n("a13f"),Object(h["a"])(k,_,w,!1,null,"eec77f5c",null)),F=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    "+t._s(t.comment_disabled?"Comment: closed":"Comment: opened")+"\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("el-radio-group",{staticStyle:{padding:"10px"},model:{value:t.comment_disabled,callback:function(e){t.comment_disabled=e},expression:"comment_disabled"}},[n("el-radio",{attrs:{label:!0}},[t._v("\n          Close comment\n        ")]),t._v(" "),n("el-radio",{attrs:{label:!1}},[t._v("\n          Open comment\n        ")])],1)],1)],1)],1)},j=[],$={props:{value:{type:Boolean,default:!1}},computed:{comment_disabled:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},C=$,D=Object(h["a"])(C,O,j,!1,null,null,null),S=D.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"hide-on-click":!1,"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    Platfroms("+t._s(t.platforms.length)+")\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-border",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:t.platforms,callback:function(e){t.platforms=e},expression:"platforms"}},t._l(t.platformsOptions,(function(e){return n("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),1)],1)],1)},P=[],T={props:{value:{required:!0,default:function(){return[]},type:Array}},data:function(){return{platformsOptions:[{key:"a-platform",name:"a-platform"},{key:"b-platform",name:"b-platform"},{key:"c-platform",name:"c-platform"}]}},computed:{platforms:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},B=T,I=Object(h["a"])(B,E,P,!1,null,null,null),L=I.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    Link\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-padding no-border",staticStyle:{width:"400px"},attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"label-width":"0px",prop:"source_uri"}},[n("el-input",{attrs:{placeholder:"Please enter the content"},model:{value:t.source_uri,callback:function(e){t.source_uri=e},expression:"source_uri"}},[n("template",{slot:"prepend"},[t._v("\n          URL\n        ")])],2)],1)],1)],1)},U=[],R={props:{value:{type:String,default:""}},computed:{source_uri:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},G=R,A=Object(h["a"])(G,V,U,!1,null,null,null),q=A.exports,z=n("2423"),H={name:"",images_url:""},J={name:"ArticleDetail",components:{Divider:F,Tinymce:i["a"],MDinput:u["a"],Upload:l["a"],Sticky:m["a"],Warning:v,CommentDropdown:S,PlatformDropdown:L,SourceUrlDropdown:q,SukImages:c["a"]},props:{isEdit:{type:Boolean,default:!1}},filters:{statusFilter:function(t){var e={1:"",2:"info"};return e[t]}},data:function(){var t=this,e=function(e,n,a){console.log(n),""===n?(t.$message({message:e.message+"为必选",type:"error"}),a(new Error(e.field+"为必传项"))):a()};return{photoVisible:!1,banner:[],specifications:[],category:[],postForm:Object.assign({},H),loading:!1,userListOptions:[],brand:[],rules:{image_uri:[{validator:e}]},tempRoute:{},photo:[]}},computed:Object(s["a"])({displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}}},Object(r["b"])(["shop_id"])),created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=Object.assign({},H);this.tempRoute=Object.assign({},this.$route)},methods:{handelPhoto:function(t,e){var n=this;GetLibrary().then((function(t){n.photo=t.data})),this.sukindx=e,this.photoVisible=!0},HandelImages:function(t){this.postForm.images_url=t.images_url},fetchData:function(t){var e=this;Object(z["c"])(t).then((function(t){e.postForm=t.data,e.banner=t.banner,e.setTagsViewTitle(),e.setPageTitle()})).catch((function(t){console.log(t)}))},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="编辑商品";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;this.$refs.postForm.validate((function(e){if(!e)return!1;t.postForm.shop_id=t.shop_id,Object(z["d"])(t.postForm).then((function(e){t.$notify({title:"成功",message:e.msg,type:"success",duration:2e3})})),t.loading=!1}))},draftForm:function(){0!==this.postForm.content.length&&0!==this.postForm.title.length?this.$message({message:"保存成功",type:"success",showClose:!0,duration:1e3}):this.$message({message:"请填写必要的标题和内容",type:"warning"})},getRemoteUserList:function(t){var e=this;Object(d["a"])(t).then((function(t){t.data.items&&(e.userListOptions=t.data.items.map((function(t){return t.name})))}))}}},M=J,N=(n("c0f9"),Object(h["a"])(M,a,o,!1,null,"011e8ec4",null));e["a"]=N.exports},d163:function(t,e,n){}}]);