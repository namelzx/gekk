<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="搜索商品" style="width: 200px;" class="filter-item"
                @keyup.enter.native="handleFilter"/>
      <el-select v-model="listQuery.status" clearable class="filter-item" @change="handleFilter" placeholder="选择商品状态">
        <el-option
          v-for="item in opstatus"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <router-link :to="'/goods/create'">
        <el-button v-waves class="filter-item" type="primary" icon="el-icon-plus" >
          创建商品
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
      @sort-change="sortChange"
    >
      <el-table-column label="商品id" prop="id" sortable="custom" align="center" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品图片" width="150px" align="center">
        <template slot-scope="scope">
       <img :src=" scope.row.images_url">
        </template>
      </el-table-column>
      <el-table-column label="商品名称" min-width="150px"   align="center">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="实际销量" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sales }}</span>
        </template>
      </el-table-column>

      <el-table-column label="商品排序" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sort }}</span>
        </template>
      </el-table-column>

      <el-table-column label="商品状态" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status |statusText}}</span>
        </template>
      </el-table-column>
      <el-table-column label="添加时间" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>


      <el-table-column label="操作" fixed="right"
                       align="center" min-width="150">
        <template slot-scope="{row}">
          <router-link :to="'/integral/edit/'+row.id">

            <el-button type="text" size="mini">
              修改
            </el-button>
          </router-link>

          <el-button type="text" size="mini" @click="handleDelete(row)">
            删除
          </el-button>
          <el-button type="text" size="mini" @click="handelUp(row)">
            {{ row.status|statusedit}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="getList"/>
  </div>
</template>

<script>
  import {GetDataByList, GetIdByDel, PostDataBySave,PostDataByUp} from '@/api/intGoods'
  import waves from '@/directive/waves' // waves directive
  import {parseTime} from '@/utils'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { mapGetters } from "vuex";



  export default {
    name: 'ComplexTable',
    components: {Pagination},
    directives: {waves},
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'info',
          deleted: 'danger'
        }
        return statusMap[status]
      },
      statusText(status){
        const statusMap = {
          1: '上架',
          2: '下架',
        }
        return statusMap[status]
      },
      statusedit(status){
        const statusMap = {
          1: '下架',
          2: '上架',
        }
        return statusMap[status]
      }
    },
     computed: {
    ...mapGetters([
      'shop_id'
    ])
  },
    data() {
      return {
        opstatus:[
          {
            value:1,
            label:'上架'
          },
          {
            value:2,
            label:'下架'
          },
        ],
        tableKey: 0,
        list: null,
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


        temp: {
          id: undefined,
          importance: 1,
          remark: '',
          timestamp: new Date(),
          title: '',
          type: '',
          status: 'published'
        },
        category:[],
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },
        dialogPvVisible: false,


      }
    },
    created() {
      this.getList()


    },
    methods: {
      getList() {
        this.listLoading = true
        this.listQuery.shop_id=this.shop_id
        GetDataByList(this.listQuery).then(response => {
          this.list = response.data.data
          this.total = response.data.total

          // Just to simulate the time of the request
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
        this.$message({
          message: '操作Success',
          type: 'success'
        })
        row.status = status
      },
      sortChange(data) {
        const {prop, order} = data
        if (prop === 'id') {
          this.sortByID(order)
        }
      },
      sortByID(order) {
        if (order === 'ascending') {
          this.listQuery.sort = '+id'
        } else {
          this.listQuery.sort = '-id'
        }
        this.handleFilter()
      },
      handleDelete(row) {
        GetIdByDel(row.id).then(res=>{
          this.$notify({
            title: 'Success',
            message: 'Delete Successfully',
            type: 'success',
            duration: 2000
          })
          const index = this.list.indexOf(row)
          this.list.splice(index, 1)
        })

      },
      handelUp(row){
        if(row.status===1){
          row.status=2
        }else{
          row.status=1
        }
        var temp={
          status:row.status,
          id:row.id
        }
        PostDataByUp(temp).then(res=>{
          this.$notify({
            title: 'Success',
            message: '更新成功',
            type: 'success',
            duration: 2000
          })
        })
      }
    }
  }
</script>
<style>

  img{
    width: 100px;
    height: 100px;
  }
</style>
