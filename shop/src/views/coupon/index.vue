<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="搜索名称" style="width: 200px;" class="filter-item"
                @keyup.enter.native="handleFilter"/>

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
 <router-link :to="'createcoupon'">
      <el-button v-waves class="filter-item" type="primary" >
        添加
      </el-button>
 </router-link>

    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"

    >
      <el-table-column label="优惠卷id" prop="id" align="center" min-width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>


      <el-table-column label="名称" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!--| parseTime('{y}-{m}-{d} {h}:{i}')-->
      <el-table-column label="优惠卷金额" min-width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sub_price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最低消费" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.low_price}}</span>
        </template>
      </el-table-column>
      <el-table-column label="发放总量" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.total}}</span>
        </template>
      </el-table-column>
      <el-table-column label="添加时间" min-width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>


      <el-table-column label="操作" fixed="right"
                       align="center" min-width="150">
        <template slot-scope="scope">
                    <router-link :to="'/coupon/couponedit/'+scope.row.id">

          <el-button type="text" size="mini" >
            修改
          </el-button>
                    </router-link>

          <el-button type="text" size="mini" @click="handleModifyStatus(scope.row,'deleted')">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="getList"/>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="120px"
               style="width: 400px; margin-left:50px;">


        <el-form-item label="优惠卷名称" prop="name">
          <el-input v-model="temp.name"/>
        </el-form-item>

        <el-form-item label="优惠卷金额">
          <el-input v-model="temp.sub_price"/>
        </el-form-item>
        <el-form-item label="最低消费">
          <el-input v-model="temp.low_price"/>

        </el-form-item>

        <el-form-item label="发放总量">
          <el-input v-model="temp.total"/>

        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确定
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel"/>
        <el-table-column prop="pv" label="Pv"/>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {GetDataByList, GetIdByDel, PostDataBySave} from '@/api/coupon'
  import waves from '@/directive/waves' // waves directive
  import {parseTime} from '@/utils'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  import Upload from '@/components/Upload/UploadImage' // secondary package based on el-pagination
import { mapGetters } from "vuex";

  export default {
    name: 'ComplexTable',
    components: {Pagination, Upload},
    directives: {waves},
        computed: {
 
    ...mapGetters(["shop_id"])
  },
    filters: {
      statusFilter(status) {
        const statusMap = {
          1: '启用',
          2: '禁用',
          deleted: 'danger'
        }
        return statusMap[status]
      },
      typeFilter(type) {
        return calendarTypeKeyValue[type]
      }
    },
    data() {
      return {
        tableKey: 0,
        list: [],
        total: 0,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          importance: undefined,
          title: undefined,
          type: undefined,
          sort: '+id'
        },
        importanceOptions: [1, 2, 3],
        sortOptions: [{label: 'ID Ascending', key: '+id'}, {label: 'ID Descending', key: '-id'}],
        statusOptions: ['published', 'draft', 'deleted'],
        showReviewer: false,
        temp: {
          id: undefined,
          name: '',
          sort: 0,
          ico: '',
          status: 2,
          status_hm: 2,
        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },

        StatusMap: [
          {
            index: 2,
            name: '禁用'
          },
          {
            index: 1,
            name: '启用'
          }
        ],
        HomeMap: [
          {
            index: 2,
            name: '不展示'
          },
          {
            index: 1,
            name: '展示'
          }
        ],
        dialogPvVisible: false,
        pvData: [],
        rules: {
          name: [{required: true, message: '名称必须输入', trigger: 'blur'}]
        },
        downloadLoading: false
      }
    },
    created() {
      this.getList()

    },
    methods: {
      handelIco(e) {
        this.temp.ico = e
      },
      getList() {
        this.listLoading = true
        this.listQuery.shop_id=this.shop_id
        GetDataByList(this.listQuery).then(response => {
          this.list = response.data.data
          console.log(this.list)
          this.total = response.data.total

          setTimeout(() => {
            this.listLoading = false
          }, 1.5 * 1000)
        })
      },
      handleFilter() {
        this.listQuery.page = 1
        this.getList()
      },
      handleModifyStatus(row, status) {
        GetIdByDel(row.id).then(res => {
          this.list.splice(row, 1);
          this.$message({
            type: "success",
            message: res.msg
          });
        })

      },


      handleCreate() {
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      createData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            PostDataBySave(this.temp).then(res => {
              this.list.unshift(res.data)
              this.dialogFormVisible = false
              this.$notify({
                title: 'Success',
                message: 'Created Successfully',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      },
      handleUpdate(row) {
        this.temp = row // copy obj
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      updateData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            const tempData = Object.assign({}, this.temp)

            PostDataBySave(tempData).then(() => {
              for (const v of this.list) {
                if (v.id === this.temp.id) {
                  const index = this.list.indexOf(v)
                  this.list.splice(index, 1, this.temp)
                  break
                }
              }
              this.dialogFormVisible = false
              this.$notify({
                title: 'Success',
                message: 'Update Successfully',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      },
      handleDelete(row) {
        this.$notify({
          title: 'Success',
          message: 'Delete Successfully',
          type: 'success',
          duration: 2000
        })
        const index = this.list.indexOf(row)
        this.list.splice(index, 1)
      },
      handleFetchPv(pv) {
        fetchPv(pv).then(response => {
          this.pvData = response.data.pvData
          this.dialogPvVisible = true
        })
      },

    }
  }
</script>
