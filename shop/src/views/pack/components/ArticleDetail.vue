<template>
  <div class="createPost-container">
    <!--图片选择-->
    <el-form ref="postForm" :rules="rules" :model="postForm" class="form-container">
      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          保存
        </el-button>
      </sticky>
      <div class="createPost-main-container">
        <div>
          <el-form-item style="margin-bottom: 40px;" label-width="100px" label="标题:" prop="name">
            <el-input
              v-model="postForm.title"
              :rows="1"
              type="textarea"
              class="article-textarea"
              autosize
              placeholder="Please enter the content"
            />
          </el-form-item>
        </div>
        <divider title="规则内容"/>

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

  import {GetCategory} from '@/api/brand'

  import { GetIdByDetails, PostDataBySave} from '@/api/pack'
import { mapGetters } from "vuex";


  const defaultForm = {
    title: '', // 商品名称
    content: '', // 商品分类
    type: 1, //

  }

  export default {
    name: 'ArticleDetail',
    components: {
      Divider,
      Tinymce,
      MDinput,
      Sticky,
      Warning,
      CommentDropdown,
      PlatformDropdown,
      SourceUrlDropdown,
   
     
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
    data() {
      return {
        rulesa:[],
        postForm: Object.assign({}, defaultForm),

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
    ...mapGetters(["shop_id"])

    },
   
    created() {
      if (this.isEdit) {
        const id = this.$route.params && this.$route.params.id
        this.fetchData(id)
      } else {
        this.postForm = Object.assign({}, defaultForm)
      }
      rulesa().then(res=>{
        this.rulesa=res.data
      })
    },
    methods: {
      fetchData(id) {
        GetIdByDetails(id).then(response => {

          this.postForm=response.data

          this.setPageTitle()
        }).catch(err => {
          console.log(err)
        })
      },

      setPageTitle() {
        const title = '编辑商品'
        document.title = `${title} - ${this.postForm.id}`
      },
      submitForm() {
        this.$refs.postForm.validate(valid => {

          if (valid) {
            this.postForm.shop_id=this.shop_id
            PostDataBySave(this.postForm).then(res => {
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

 .createPost-container >>>.el-image img{
    width: 100px;
    height: 100px;
  }
</style>
