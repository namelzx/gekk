<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="搜索买家姓名" style="width: 200px;" class="filter-item"
                @keyup.enter.native="handleFilter"/>
          <el-input v-model="listQuery.mobile"  class="filter-item"  style="width: 200px;"  placeholder="请输入收货人手机号"></el-input>
      <el-select v-model="listQuery.status" placeholder="订单状态" class="filter-item" @change="handleFilter">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker
        v-model="listQuery.time"
        class="filter-item"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      fit
      border
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="订单号" prop="id" min-width="200" fixed>
        <template slot-scope="scope">
          <span>{{ scope.row.order_no }}</span>
        </template>
      </el-table-column>
      <el-table-column label="下单时间" min-width="180px">
        <template slot-scope="scope">
          <span>{{scope.row.create_time}}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" min-width="200px">
        <template slot-scope="scope">
          <span>{{scope.row.goods.name}}</span>
        </template>
      </el-table-column>

      <el-table-column label="付款状态" min-width="100px" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.status<9">
            <el-tag type="success" v-if="scope.row.status>1">已付款</el-tag>
            <el-tag type="info" v-else>未付款</el-tag>
          </div>
          <div v-else>
            <el-tag type="danger">订单取消</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="发货状态" min-width="100px" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.status<9">
            <el-tag type="info" v-if="scope.row.status<3">待发货</el-tag>
            <el-tag type="success" v-else>已发货</el-tag>
          </div>
          <div v-else>
            <el-tag type="danger">订单取消</el-tag>
          </div>

        </template>
      </el-table-column>
      <el-table-column label=收货状态 min-width="100px" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.status<9">
            <el-tag type="info" v-if="scope.row.status<4">待收货</el-tag>
            <el-tag type="success" v-else>已收货</el-tag>
          </div>
          <div v-else>
            <el-tag type="danger">订单取消</el-tag>

          </div>
        </template>
      </el-table-column>
      <el-table-column label="买家" min-width="120px" align="center">
        <template slot-scope="scope">
          <!-- <span>{{scope.row.get_user.nickName}}</span> -->
        </template>
      </el-table-column>

       <el-table-column label="收货地址/商铺" min-width="180px" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.isadd===1">{{scope.row.address.areaMsg}}</div>
          <div v-else>{{scope.row.shop.name}}</div>
        </template>
      </el-table-column>

     

      <el-table-column label="订单备注" min-width="180px" align="center" fixed="right">
        <template slot-scope="scope">
          <span>{{scope.row.adesc}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right"
                       align="center" min-width="150">
        <template slot-scope="{row}">
          <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
          >

            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="adesc">
            </el-input>
            <el-button type="primary" @click="handelDesc(row)" style="float: right;margin-top: 5px" size="mini">保存
            </el-button>
            <el-button slot="reference" type="text" size="mini">
              备注
            </el-button>
          </el-popover>


          <router-link :to="'/order/detail/'+row.id">

            <el-button type="text" size="mini">
              编辑
            </el-button>
          </router-link>


        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="getList"/>
  </div>
</template>

<script>
  import {GetDataByList, PostDataByCancel, PostDataBySave} from '@/api/order'
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
      statusText(status) {
        const statusMap = {
          1: '未支付',
          2: '已支付',
          3: '已确认',
          4: '已发货',
          4: '已收货',
        }
        return statusMap[status]
      }
    },
      computed: {
  
    ...mapGetters(["shop_id"])
  },
    data() {
      return {
        adesc: '',
        options: [{
          value: '0',
          label: '全部'
        }, {
          value: '1',
          label: '待付款'
        }, {
          value: '2',
          label: '待发货'
        }, {
          value: '3',
          label: '待收货'
        }, {
          value: '4',
          label: '租用中'
        },
          {
            value: '5',
            label: '待结算'
          },
          {
            value: '6',
            label: '已预期'
          },
          {
            value: '8',
            label: '已归还'
          },
          {
            value: '9',
            label: '已取消'
          },
          {
            value: '10',
            label: '已退款'
          },
        ],
        value: '',
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

      this.listQuery.status = this.$route.path.substring(14, 20)


      this.getList()
    },
    methods: {
      handelDesc(row) {
        var temp = {
          id: row.id,
          adesc: this.adesc
        }
        PostDataByCancel(temp).then(res => {
          row.adesc = this.adesc;
          this.adesc = ''
        })

      },
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
      //订单取消
      handleCancel(row) {
        console.log(row);
        var temp = {
          id: row.id,
          status: 9
        }
        if (row.status === 9) {
          this.$notify({
            title: '信息提示',
            message: '订单已取消',
            type: 'success',
            duration: 2000
          })
          return false
        }
        row.status = 9;


        PostDataByCancel(temp).then(res => {
          this.$notify({
            title: '信息提示',
            message: res.msg,
            type: 'success',
            duration: 2000
          })
        })
      }
    }
  }
</script>
<style scoped>

  img {
    width: 100px;
    height: 100px;
  }

  .btn {
    float: right;
  }
</style>
