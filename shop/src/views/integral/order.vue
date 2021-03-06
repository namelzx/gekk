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

      <el-select
        prod="category_id"
        v-model="listQuery.category_id"
        class="filter-item"
        placeholder="选择所属分类"
        @change="handleFilter"
      >
        <el-option v-for="(item,index) in category" :key="item.id" :label="item.name" :value="item.id"/>
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <router-link :to="'/goods/create'">
        <el-button v-waves class="filter-item" type="primary" icon="el-icon-plus">
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
          <img :src=" scope.row.goods.images_url">
        </template>
      </el-table-column>
      <el-table-column label="商品名称" min-width="150px" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.goods.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="兑换数量" width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.goods.num }}</span>
        </template>
      </el-table-column>

      <el-table-column label="取货方式" width="110px" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.address">
          快递
          </span>
          <span v-else>
            门店自取
          </span>
        </template>
      </el-table-column>


      <el-table-column label="配送/取货地址" min-width="250px" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.address">
            {{scope.row.address.areaMsg}} {{scope.row.address.posterAddr}} <br/>
            {{scope.row.address.userName}}-{{scope.row.address.phone}}
          </span>
          <span v-else>
            门店自取
          </span>
        </template>
      </el-table-column>

      <el-table-column label="订单状态" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status |statusText}}</span>
        </template>
      </el-table-column>
      <el-table-column label="下单时间" min-width="155px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>


      <el-table-column label="操作" fixed="right"
                       align="center" min-width="150">
        <template slot-scope="{row}">
          <router-link :to="'/integral/orderedit/'+row.id">
            <el-button type="text" size="mini">
              修改
            </el-button>
          </router-link>

          <el-button type="text" size="mini" @click="handleDelete(row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="getList"/>
  </div>
</template>

<script>
  import {GetDataByList, GetIdByDel, PostDataBySave, PostDataByUp} from '@/api/intOrder'
  import waves from '@/directive/waves' // waves directive
  import {parseTime} from '@/utils'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  import {mapGetters} from "vuex";

  import {GetCategory} from '@/api/brand'


  export default {
    name: 'ComplexTable',
    components: {Pagination},
    directives: {waves},
    computed: {

      ...mapGetters(["shop_id"])
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'info',
          deleted: 'danger'
        }
        return statusMap[status]
      },
      statusText(status) {
        const statusMap = {
          1: '待付款',
          2: '待发货',
          3:'待收货',
          4:'交易完成',
          5:'订单取消',
        }
        return statusMap[status]
      },
      statusedit(status) {
        const statusMap = {
          1: '待付款',
          2: '待发货',
          3:'待收货',
          4:'交易完成',
          5:'订单取消',
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        opstatus: [
          {
            value: 1,
            label: '上架'
          },
          {
            value: 2,
            label: '下架'
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
        category: [],
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
        this.listQuery.shop_goods_id = this.shop_id
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
        GetIdByDel(row.id).then(res => {
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
      handelUp(row) {
        if (row.status === 1) {
          row.status = 2
        } else {
          row.status = 1
        }
        var temp = {
          status: row.status,
          id: row.id
        }
        PostDataByUp(temp).then(res => {
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

  img {
    width: 100px;
    height: 100px;
  }
</style>
