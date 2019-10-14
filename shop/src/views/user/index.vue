<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="搜索名称" style="width: 200px;" class="filter-item"
                @keyup.enter.native="handleFilter"/>

     

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('table.search') }}
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      @sort-change="sortChange"
    >
      <el-table-column label="序号" prop="id" align="center" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>


      <el-table-column label="微信昵称" prop="id" align="center" min-width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="微信头像" prop="id" align="center" min-width="80">
        <template slot-scope="scope">
          <img :src="scope.row.avatarUrl">
          <!--<span>{{ scope.row.id }}</span>-->
        </template>
      </el-table-column>


      <el-table-column label="注册时间" prop="id" align="center" min-width="130">
        <template slot-scope="scope">
          <span>{{scope.row.create_time}}</span>
        </template>
      </el-table-column>


      <el-table-column label="操作" align="center" min-width="100" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          暂无操作
          <!--<el-button type="text" size="small" @click="handleUpdate(row)">{{row.status|Filter}}</el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="getList"/>

  </div>
</template>

<script>
  import waves from '@/directive/waves' // waves directive
  import {parseTime} from '@/utils'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  import {GetDataByList, PostDataBySave} from '@/api/user'

import { mapGetters } from "vuex";

  // arr to obj, such as { CN : "China", US : "USA" }


  export default {
    name: 'ComplexTable',
    components: {Pagination},
    directives: {waves},
    filters: {
      statusFilter(status) {
        const statusMap = {
          1: '通过',
          2: '审核中',
        }
        return statusMap[status]
      },
      Filter(status) {
        const statusMap = {
          1: '取消通过',
          2: '通过',
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
        list: null,
        total: 0,
        shop:[],
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

      }
    },
     computed: {
  
    ...mapGetters(["shop_id"])
  },
    created() {
      this.getList()
      GetShopByList().then(res => {
        this.shop = res.data
      })
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
      handleUpdate(row) {
        let temp = {
          id: row.id,
          status: row.status,
          user_id:row.user_id
        }
        if (temp.status === 2) {
          temp.status = 1
          row.status = 1
        } else {
          temp.status = 2
          row.status = 2
        }
        PostDataBySave(temp).then(res => {
          console.log(res)
        })

      },
      handleDelete(row) {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        })
        const index = this.list.indexOf(row)
        this.list.splice(index, 1)
      },

    }
  }
</script>
<style scoped>

  img {
    width: 40px;
    height: 40px;
  }
</style>
