<template>
  <div class="createPost-container">
    <el-form ref="postForm" :rules="rules" :model="postForm" class="form-container">
      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.status">
        <el-button
          v-loading="loading"
          style="margin-left: 10px;"
          type="success"
          @click="submitForm"
        >保存</el-button>
      </sticky>
      <div class="createPost-main-container">
        <divider title="优惠卷信息" />
        <div>
          <el-form-item style="margin-bottom: 40px;" label-width="100px" label="标题" prop="name">
            <el-input
              v-model="postForm.name"
              :rows="1"
              type="textarea"
              class="article-textarea"
              autosize
            />
          </el-form-item>
          <el-form-item style="margin-bottom: 40px;" label-width="100px" label="发放总量" prop="total">
            <el-col :span="6">
              <el-input v-model="postForm.total" placeholder="请输入总量"></el-input>
            </el-col>
          </el-form-item>
          <el-row>
            <el-form-item style="margin-bottom: 40px;" label-width="100px" label="面值" prop="total">
              <el-col :span="6">
                <el-input v-model="postForm.sub_price" placeholder="不超过2000元"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item
              style="margin-bottom: 40px;"
              label-width="100px"
              label="最低金额"
              prop="total"
            >
              <el-col :span="6">
                <el-input v-model="postForm.low_price" placeholder="不限制金额可填写0"></el-input>
              </el-col>
            </el-form-item>
          </el-row>

           <el-row>
            <el-form-item
              style="margin-bottom: 40px;"
              label-width="100px"
              label="使用时间"
              prop="total"
            >
              <el-col :span="6">
                <el-date-picker
      v-model="postForm.start_time"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00']">
    </el-date-picker>
              </el-col>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item
              style="margin-bottom: 40px;"
              label-width="100px"
              label="使用范围"
              prop="total"
            >
              <el-radio-group v-model="postForm.scope">
                <el-radio :label="1">全店使用</el-radio>
                <el-radio :label="2">单商品使用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-row>
        </div>
        <div v-if="isGoods">
          <el-button type="primary" @click="handelSUK">选择商品</el-button>
          <el-table :data="selectedData" style="width: 100%">
            <el-table-column prop="date" label="商品图标" width="180">
              <template slot-scope="scope">
                <img class="img" :src="scope.row.images_url" />
              </template>
            </el-table-column>
            <el-table-column prop="name" label="商品名称" min-width="180"></el-table-column>
            <el-table-column prop="address" label="操作">
              <template slot-scope="scope">
                <i class="el-icon-delete" @click="handelDelete(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-form>

    <el-dialog
      title="选择已上架的商品"
      :close-on-click-modal="true"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="商品图标" width="180">
          <template slot-scope="scope">
            <img class="img" :src="scope.row.images_url" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称" min-width="180"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-radio
              @change="handelGoods(scope.row)"
              v-model="postForm.goods_id"
              :label="scope.row.id"
            >
              <div style="display: none;">1</div>
            </el-radio>
          </template>
        </el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import Upload from "@/components/Upload/SingleImage3";
import { mapGetters } from "vuex";

import SukImages from "@/components/Upload/SukImages";

import MDinput from "@/components/MDinput";
import Sticky from "@/components/Sticky"; // 粘性header组件
import { validURL } from "@/utils/validate";
import { searchUser } from "@/api/remote-search";
import Warning from "./Warning";
import Divider from "./Dropdown/Divider";
import {
  CommentDropdown,
  PlatformDropdown,
  SourceUrlDropdown
} from "./Dropdown";
import ListImage from "@/components/Upload/ListImage";
  import {GetDataByList, GetIdByDel, PostDataBySave,GetIdByDetails} from '@/api/coupon'

// import { GetCategory } from "@/api/brand";
import { GetGoodsByUp } from "@/api/goods";


const defaultForm = {
  name: "", // 商品名称
  scope: 1,
  goods_id: undefined //当选择单选商品优惠卷的时候启用
};

export default {
  name: "ArticleDetail",
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
        1: "",
        2: "info"
      };
      return statusMap[status];
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        this.$message({
          message: rule.message + "为必选",
          type: "error"
        });
        callback(new Error(rule.field + "为必传项"));
      } else {
        callback();
      }
    };

    const validateSuk = (sukrules, value, callback) => {
      if (value === "") {
        this.$message({
          message: sukrules.message + "为必选",
          type: "error"
        });
        callback(new Error(sukrules.field + "为必传项"));
      } else {
        callback();
      }
    };
    const validateSourceUri = (rule, value, callback) => {
      if (value) {
        if (validURL(value)) {
          callback();
        } else {
          this.$message({
            message: "外链url填写不正确",
            type: "error"
          });
          callback(new Error("外链url填写不正确"));
        }
      } else {
        callback();
      }
    };
    return {
      value1:'',
      tableData: [],
      selectedData: [],
      dialogVisible: false,
      category: [],
      postForm: Object.assign({}, defaultForm),
      loading: false,
      brand: [],
      selected: [],
      rules: {
        image_uri: [{ validator: validateRequire }]
      },
      isGoods: false
    };
  },
  computed: {
    displayTime: {
      get() {
        return +new Date(this.postForm.display_time);
      },
      set(val) {
        this.postForm.display_time = new Date(val);
      }
    },
    ...mapGetters(["shop_id"])
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    } else {
      this.postForm = Object.assign({}, defaultForm);
    }
    console.log(this.shop_id)
    GetGoodsByUp(this.shop_id).then(res => {
      this.tableData = res.data;
    });

    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    handelSUK() {
      this.dialogVisible = true;
    },
    handelGoods(row) {
      this.dialogVisible = false;
      this.selectedData.push(row);
    },
    handleClose() {
      this.dialogVisible = false;
    },
    handelDelete(row) {
      this.selectedData = [];
      this.postForm.goods_id = undefined;
    },

    fetchData(id) {
      GetIdByDetails(id)
        .then(response => {
          this.postForm = response.data;
          this.selectedData = response.goods;
          this.setTagsViewTitle();
          this.setPageTitle();
        })
        .catch(err => {
          console.log(err);
        });
    },
    setTagsViewTitle() {
      const title = "Edit Article";
      const route = Object.assign({}, this.tempRoute, {
        title: `${title}-${this.postForm.id}`
      });
      this.$store.dispatch("tagsView/updateVisitedView", route);
    },
    setPageTitle() {
      const title = "编辑商品";
      document.title = `${title} - ${this.postForm.id}`;
    },
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          if (this.postForm.scope === 2) {
            //当是选择当商品使用的时候。判断一下商品是否选择
            if (this.postForm.goods_id === undefined) {
              this.$message.error("使用单商品，请先选择商品再提交");
              return;
            }
          }
         
          PostDataBySave(this.postForm).then(res => {
            this.$notify({
              title: "成功",
              message: res.msg,
              type: "success",
              duration: 2000
            });
          });

          this.loading = false;
        } else {
          return false;
        }
      });
    },
    draftForm() {
      if (
        this.postForm.content.length === 0 ||
        this.postForm.title.length === 0
      ) {
        this.$message({
          message: "请填写必要的标题和内容",
          type: "warning"
        });
        return;
      }
      this.$message({
        message: "保存成功",
        type: "success",
        showClose: true,
        duration: 1000
      });
    },
    getRemoteUserList(query) {
      searchUser(query).then(response => {
        if (!response.data.items) return;
        this.userListOptions = response.data.items.map(v => v.name);
      });
    }
  },
  watch: {
    "postForm.scope"(val) {
      if (val === 2) {
        this.isGoods = true;
      } else {
        this.isGoods = false;
      }
    }
  }
};
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

.img {
  width: 100px;
  height: 100px;
}
.tdivider {
  margin-bottom: 10px;
  border-bottom: 1px solid;
}

.lease {
  width: 30px;
  padding: 0;
}

.createPost-container >>> .el-image img {
  width: 100px;
  height: 100px;
}
</style>
