<template>
  <div>
    <el-upload

      :action="apiUrl+'/upload'"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleAvatarSuccess"

      :file-list="list"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "ListImages",
      props:{
        list:Array,
      },
      data() {
        return {
          apiUrl: process.env.VUE_APP_BASE_API,

          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
          dialogImageUrl: '',
          dialogVisible: false
        };
      },
      methods: {
        handleAvatarSuccess(file,fileList){
          this.$emit('showParentComp', fileList)

        },
        handleRemove(file, fileList) {
          this.$emit('RemoveParentComp', fileList)

        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
      }
    }
</script>

<style scoped>

</style>
