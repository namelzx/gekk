<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">
      <sticky :z-index="10" :class-name="'sub-navbar draft'">
        <el-button v-loading="loading" type="warning" @click="submitForm">保存</el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="name">
              <MDinput v-model="postForm.name" :maxlength="100" name="name" required>Title</MDinput>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="10">
                  <el-form-item label-width="120px" label="店铺定位位置:" prop="location">
                    <el-input placeholder="输入店铺位置" v-model="postForm.location" clearable></el-input>
                  </el-form-item>

                  <el-form-item label-width="120px" label="联系电话:" prop="phone">
                    <el-input placeholder="输入联系电话" v-model="postForm.phone" clearable></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <el-form-item label-width="120px" label="营业时间:">
                    <el-time-select
                      placeholder="起始时间"
                      v-model="postForm.startTime"
                      :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
                    ></el-time-select>
                    <el-time-select
                      placeholder="结束时间"
                      v-model="postForm.endTime"
                      :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: endTime
    }"
                    ></el-time-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label-width="120px" label="所在城市:">
                    <el-select
                      v-model="postForm.povinces_code"
                      placeholder="请选择省份"
                      @change="handelProvinces"
                    >
                      <el-option
                        v-for="item in Provinces"
                        :key="item.area_code"
                        :label="item.area_name"
                        :value="item.area_code"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-select v-model="postForm.city_code" placeholder="请选择城市" @change="handelCity">
                    <el-option
                      v-for="item in City"
                      :key="item.area_code"
                      :label="item.area_name"
                      :value="item.area_code"
                    ></el-option>
                  </el-select>
                </el-col>

                <el-col :span="5">
                  <el-select v-model="postForm.area_code" placeholder="请选择城市">
                    <el-option
                      v-for="item in Area"
                      :key="item.area_code"
                      :label="item.area_name"
                      :value="item.area_code"
                    ></el-option>
                  </el-select>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="10">
                  <el-form-item label-width="120px" label="店铺Logo:" prop="logo">
                    <LoginImages :logo="postForm.logo" @handelImages="handelLogin"></LoginImages>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="10">
                  <el-form-item label-width="120px" label="店铺是否开启:">
                    <el-switch
                      v-model="postForm.status"
                      active-color="#13ce66"
                      inactive-color="#909399"
                      active-value="1"
                      inactive-value="2"
                    ></el-switch>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="10" prop="shopname">
                  <el-form-item label-width="120px" label="登录账号:" prop="shopname">
                    <el-input placeholder="输入店铺账号" v-model="postForm.shopname" clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label-width="120px" label="登录密码:" prop="password">
                    <el-input placeholder="输入登录密码" v-model="postForm.password" clearable></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import Upload from "@/components/Upload/SingleImage3";
import MDinput from "@/components/MDinput";
import Sticky from "@/components/Sticky"; // 粘性header组件
import { validURL } from "@/utils/validate";
import { fetchArticle } from "@/api/article";
import { searchUser } from "@/api/remote-search";
// import Warning from './Warning'
// import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'
import LoginImages from "@/components/Upload/LoginImages";

import { GetIdBydetailed, PostDataByAdd } from "@/api/shop";

import { getArea, getCity, getProvinces } from "@/api/city";
import { mapGetters } from "vuex";

const defaultForm = {
  name: "", //店铺名称-->
  shopname: "", // 登录名称-->
  password: "", // 登录密码-->
  location: "", // 店铺地址-->
  status: 1, // 店铺状态-->
  logo: "", // logo-->
  phone: undefined, // 联系电话-->
  startTime: "",
  endTime: ""
};
export default {
  name: "ArticleDetail",
  components: { Tinymce, MDinput, Upload, Sticky, LoginImages },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["shop_id"])
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === "") {
        this.$message({
          message: rule.field + "为必传项",
          type: "error"
        });
        callback(new Error(rule.field + "为必传项"));
      } else {
        callback();
      }
    };
    return {
      Provinces: [],
      City: [],
      Area: [],
      postForm: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      rules: {
        name: [{ validator: validateRequire }],
        shopname: [{ validator: validateRequire }],
        password: [{ validator: validateRequire }],
        location: [{ validator: validateRequire }],
        phone: [{ validator: validateRequire }]
      }
    };
  },
  created() {
    const id = this.shop_id;
    this.fetchData(id);
    getProvinces().then(res => {
      this.Provinces = res.data;
    });
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    handelProvinces(e) {
      this.City = [];
      this.postForm.city_code = "";
      this.Area = [];
      this.postForm.area_code = "";
      getCity(e).then(res => {
        this.City = res.data;
      });
    },
    handelCity(e) {
      this.Area = [];
      this.postForm.area_code = "";
      getArea(e).then(res => {
        this.Area = res.data;
      });
    },
    handelLogin(e) {
      this.postForm.logo = e;
    },
    fetchData(id) {
      var that = this;
      GetIdBydetailed(id)
        .then(response => {
          this.postForm = response.data;
          this.setTagsViewTitle();
          getCity(this.postForm.povinces_code).then(res => {
            this.City = res.data;
          });
          getArea(this.postForm.city_code).then(res => {
            this.Area = res.data;
          });
          // set page title
          this.setPageTitle();
        })
        .catch(err => {
          console.log(err);
        });
    },
    setTagsViewTitle() {
      const title = "编辑";
      const route = Object.assign({}, this.tempRoute, {
        title: `${title}-${this.postForm.name}`
      });
      this.$store.dispatch("tagsView/updateVisitedView", route);
    },
    setPageTitle() {
      const title = "编辑";
      document.title = `${title} - ${this.postForm.name}`;
    },
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          PostDataByAdd(this.postForm).then(res => {
            this.loading = true;
            if (res.status === 20004) {
              this.$message({
                message: res.message,
                type: "warning"
              });
              this.postForm.status="2"
              return;
            }
            this.$notify({
              title: "成功",
              message: res.message,
              type: "success",
              duration: 2000
            });
            this.loading = false;
            //   this.$router.go(-1);//返回上一层
          });
        } else {
          return false;
        }
      });
    },

    getRemoteUserList(query) {
      searchUser(query).then(response => {
        if (!response.data.items) return;
        this.userListOptions = response.data.items.map(v => v.name);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

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
</style>
