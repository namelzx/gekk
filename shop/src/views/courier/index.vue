<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddRole">新增</el-button>

    <el-table :data="rolesList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="序号" width="220">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column align="center" label="快递名称" width="220">
        <template slot-scope="scope">{{ scope.row.label }}</template>
      </el-table-column>
      <el-table-column align="center" label="快递代码">
        <template slot-scope="scope">{{ scope.row.value}}</template>
      </el-table-column>
      <el-table-column align="center" label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'修改管理员':'添加管理员'">
      <el-form :model="role" label-width="80px" label-position="left">
        <el-form-item label="快递名称">
          <el-input v-model="role.label" placeholder="快递名称"/>
        </el-form-item>
        <el-form-item label="快递代码">
          <el-input v-model="role.value" placeholder="快递代码"/>
        </el-form-item>


      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmRole">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import path from "path";
  import {deepClone} from "@/utils";
  import {addRole, deleteRole, getRoles, getRoutes, updateRole} from "@/api/role";
  import {getDataByDetail, getIdByDel, postDataByAdd} from "@/api/courier";

  const defaultRole = {
    key: "",
    name: "",
    description: "",
    routes: []
  };

  export default {
    data() {
      return {
        role: Object.assign({}, defaultRole),
        routes: [],
        rolesList: [],
        dialogVisible: false,
        dialogType: "new",
        checkStrictly: false,

        listQuery: {
          page: 1,
          limit: 20
        }
      };
    },
    filters: {

    },
    computed: {
      routesData() {
        return this.routes;
      }
    },
    created() {
      this.getData();
    },
    methods: {
      async getRoutes() {
        const res = await getRoutes();
        this.serviceRoutes = res.data;
        this.routes = this.generateRoutes(res.data);
      },
      async getRoles() {
        const res = await getRoles();
        this.rolesList = res.data;
      },
      getData() {
        getDataByDetail(this.listQuery).then(res => {
          console.log(res);
          this.rolesList = res.data.data;
          console.log(this.rolesList);
        });
      },

      handleEdit(scope) {
        this.dialogType = "edit";
        this.dialogVisible = true;
        this.checkStrictly = true;
        this.role = deepClone(scope.row);
      },

      handleDelete({$index, row}) {
        this.$confirm("确定要删除?", "提醒", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(async () => {

            getIdByDel(row.id).then(res => {

            })
            console.log(row)
            this.rolesList.splice($index, 1);
            this.$message({
              type: "success",
              message: "删除成功"
            });
          })
          .catch(err => {
            console.error(err);
          });
      },

      handleAddRole() {
        this.role = Object.assign({}, defaultRole);

        this.dialogType = "new";
        this.dialogVisible = true;
      },
      async confirmRole() {
        postDataByAdd(this.role).then(res => {
          this.dialogVisible = false
          this.getData();
          this.$message({
            type: "success",
            message: "操作成功"
          });
        });
      },
      // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    }
  };
</script>

<style lang="scss" scoped>
  .app-container {
    .roles-table {
      margin-top: 30px;
    }

    .permission-tree {
      margin-bottom: 30px;
    }
  }
</style>
