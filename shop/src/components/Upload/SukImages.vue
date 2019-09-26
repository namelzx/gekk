<template>
  <div class="upload-container">
    <el-upload
      class="avatar-uploader"
      :action="apiUrl+'/upload'"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

  </div>
</template>

<script>
  import {getToken} from '@/api/qiniu'
  export default {
    name: 'SingleImageUpload',
    props: {
      imageUrl:String,
      index:Number,
      value: {
        type: String,
        default: '',
      }
    },
    data() {
      return {
        apiUrl: process.env.VUE_APP_BASE_API,
        dataObj: {token: '', key: ''}
      }
    },

    methods: {
      handleAvatarSuccess(res, file) {
        var temp={
          index:this.index,
          images_url:res.path,
        }
        this.$emit('showParentComp', temp)

      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
      }
    }
  }
</script>

<style lang="scss" >
  @import "~@/styles/mixin.scss";
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 180px;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 178px;

  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
