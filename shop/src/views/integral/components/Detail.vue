<template>
  <div class="createPost-container">
    <el-form ref="postForm" :rules="rules" :model="postForm" class="form-container">
      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          保存
        </el-button>
      </sticky>
      <div class="createPost-main-container">
        <divider title="基本信息"/>
        <div>
          <el-form-item style="margin-bottom: 40px;" label-width="100px" label="商品名称:" prop="name">
            <el-input
              v-model="postForm.name"
              :rows="1"
              type="textarea"
              class="article-textarea"
              autosize
              placeholder="Please enter the content"
            />
          </el-form-item>
          <el-row :gutter="20">
            <el-col :span="7">
              <el-form-item label-width="100px" label="兑换积分:">
                 <el-input v-model="postForm.integral" placeholder="输入积分"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <el-form-item label-width="100px" label="商品主图:">
                <SukImages :imageUrl="postForm.images_url" @showParentComp="HandelImages"/>
              </el-form-item>
            </el-col>

          </el-row>
        </div>

        <divider title="轮播图管理"/>
        <div>
          <ListImage :list="banner" @showParentComp="HandelBanner" @RemoveParentComp="handleRemove"/>
        </div>
        <divider title="商品介绍"/>

        <el-form-item prop="content" style="margin-bottom: 30px;">
          <Tinymce ref="editor" v-model="postForm.content" :height="400"/>
        </el-form-item>

      </div>
    </el-form>
  </div>
</template>

<script>
  import Tinymce from '@/components/Tinymce'
  import Upload from '@/components/Upload/SingleImage3'

  import SukImages from '@/components/Upload/SukImages'
  import MDinput from '@/components/MDinput'
  import Sticky from '@/components/Sticky' // 粘性header组件
  import {validURL} from '@/utils/validate'
  import {fetchArticle} from '@/api/article'
  import {searchUser} from '@/api/remote-search'
  import Warning from './Warning'
  import Divider from './Dropdown/Divider'
  import {CommentDropdown, PlatformDropdown, SourceUrlDropdown} from './Dropdown'
  import ListImage from '@/components/Upload/ListImage'
  import {GetCategoryIdByItems, GetIdByDetails, PostDataBySave} from '@/api/intGoods'

import { mapGetters } from "vuex";

  const defaultForm = {
    name: '', // 商品名称
    category_id: '', // 商品分类
    brand_id: '', // 所属品牌
    specifications: '', // 规格
    total_price: '', // 总价
    monthly: '', // 月租
    deposit: '', // 押金
    images_url: '',// 封面图
    is_renew: 1,//是否可续租 默认可续租
    is_op: 1,//是否可续租 默认可续租
    sukindx: 0,//所选择的suk 这个用于选择图库

    goods_suk: [
      {
        tag: '',//规格
        images_url: '',//suk图片

        inventory: '',//库存


      }
    ],

  }

  export default {
    name: 'ArticleDetail',
    components: {
      Divider,
      Tinymce,
      MDinput,
      Upload,
      Sticky,
      Warning,
      CommentDropdown,
      PlatformDropdown,
      SourceUrlDropdown,
      // CoverImage,
      ListImage,
      SukImages
    },
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          1: '',
          2: 'info',
        }
        return statusMap[status]
      },
    },
     computed: {
   
  },
    data() {
      const validateRequire = (rule, value, callback) => {
        console.log(value)
        if (value === '') {
          this.$message({
            message: rule.message + '为必选',
            type: 'error'
          })
          callback(new Error(rule.field + '为必传项'))
        } else {
          callback()
        }
      }

      const validateSuk = (sukrules, value, callback) => {
        if (value === '') {
          this.$message({
            message: sukrules.message + '为必选',
            type: 'error'
          })
          callback(new Error(sukrules.field + '为必传项'))
        } else {
          callback()
        }
      }
      const validateSourceUri = (rule, value, callback) => {
        if (value) {
          if (validURL(value)) {
            callback()
          } else {
            this.$message({
              message: '外链url填写不正确',
              type: 'error'
            })
            callback(new Error('外链url填写不正确'))
          }
        } else {
          callback()
        }
      }
      return {

        photoVisible: false,//获取图片库
        banner: [],

        specifications: [], // 规格参数
        category: [],
        postForm: Object.assign({}, defaultForm),
        loading: false,
        userListOptions: [],
        brand: [],
        rules: {
          image_uri: [{validator: validateRequire}],
        },
        tempRoute: {},

        photo: [],

      }
    },
    computed: {
      displayTime: {
        get() {
          return (+new Date(this.postForm.display_time))
        },
        set(val) {
          this.postForm.display_time = new Date(val)
        }
      },
       ...mapGetters([
      'shop_id'
    ])
    },
    created() {
      if (this.isEdit) {
        const id = this.$route.params && this.$route.params.id
        this.fetchData(id)
      } else {
        this.postForm = Object.assign({}, defaultForm)
      }


      this.tempRoute = Object.assign({}, this.$route)
    },
    methods: {
      handelPhoto(row, index) {
        GetLibrary().then(res => {
          this.photo = res.data
        })

        this.sukindx = index
        this.photoVisible = true;
      },
      handelChoiceImage(e) {
        this.postForm.goods_suk[this.sukindx].images_url = e.url
        this.photoVisible = false
      },

      //suk图片上传
      HandelSukImages(temp) {
        this.postForm.goods_suk[temp.index].images_url = temp.images_url
      },
      handelSUK() {
        this.postForm.goods_suk.push({
          tag: '',//规格
          images_url: '',//suk图片
          inventory: '',//库存
        })
      },
      onServer(status, type) {
        console.log(type)
        if (type === 'is_renew') {
          if (status === 1) {
            this.postForm.is_renew = 2
          } else {
            this.postForm.is_renew = 1
          }
        } else {
          if (status === 1) {
            this.postForm.is_op = 2
          } else {
            this.postForm.is_op = 1
          }
        }
      },
      handleRemove(e) {

        this.banner = e
      },
      HandelBanner(e) {
        console.log(e)
        this.banner.push({
          name: e.name,
          url: e.response.path,
          uid: e.uid
        })
      },
      HandelImages(e) {
        this.postForm.images_url = e.images_url
      },
      handelinfotype(e) {
        console.log(e)
        var that = this
        var num = this.specifications[e].infotype
        console.log(num)
        that.specifications[e].infotype.push({
          name: '',
          info: ''// 内容
        })
      },

      fetchData(id) {
        GetIdByDetails(id).then(response => {
          this.postForm = response.data
          this.banner = response.banner
          this.setTagsViewTitle()
          this.setPageTitle()
        }).catch(err => {
          console.log(err)
        })
      },
      setTagsViewTitle() {
        const title = 'Edit Article'
        const route = Object.assign({}, this.tempRoute, {title: `${title}-${this.postForm.id}`})
        this.$store.dispatch('tagsView/updateVisitedView', route)
      },
      setPageTitle() {
        const title = '编辑商品'
        document.title = `${title} - ${this.postForm.id}`
      },
      submitForm() {
        this.$refs.postForm.validate(valid => {

          if (valid) {
            this.postForm.shop_id=this.shop_id
            var temp = {
              temp: this.postForm,
              banner: this.banner
            }

            PostDataBySave(temp).then(res => {
              this.$notify({
                title: '成功',
                message: res.msg,
                type: 'success',
                duration: 2000
              })
            })

            this.loading = false
          } else {
            return false
          }
        })
      },
      draftForm() {
        if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
          this.$message({
            message: '请填写必要的标题和内容',
            type: 'warning'
          })
          return
        }
        this.$message({
          message: '保存成功',
          type: 'success',
          showClose: true,
          duration: 1000
        })
      },
      getRemoteUserList(query) {
        searchUser(query).then(response => {
          if (!response.data.items) return
          this.userListOptions = response.data.items.map(v => v.name)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .box-card {
    margin-bottom: 30px;
  }

  .le {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

    .le-item {
      width: 16.6%;

      .le-name {
        width: 50%;
      }
    }
  }

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

  .createPost-container > > > .el-image img {
    width: 100px;
    height: 100px;
  }
</style>
