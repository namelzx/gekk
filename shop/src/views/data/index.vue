<template>
  <div class="app-container">


    <!-- 搜索 -->
    <div v-if="showSearch" class="filter-container">
      <el-form :inline="true" :model="listQuery" class="form-inline">
        <el-form-item label="">
          <el-date-picker v-model="listQuery.dateTime" type="daterange"
                          range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"
                          align="right" clearable size="small"/>
        </el-form-item>
        <el-form-item>
          <el-button v-waves type="primary" icon="el-icon-search" size="small" @click="handleFilter">搜索</el-button>
        </el-form-item>

      </el-form>
    </div>

    <!-- 操作 -->
    <el-row style="margin-bottom: 10px;">
      <el-col :xs="24" :sm="24" :lg="24">

        <el-tooltip content="搜索" placement="top">
          <el-button v-waves type="primary" icon="el-icon-search" circle @click="showSearch = !showSearch"/>
        </el-tooltip>
      </el-col>
    </el-row>


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

      <el-table-column label="店铺名称" fixed="left" width="150px" align="center">
        <template slot-scope="scope">
          {{ scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="店铺用户" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.user_count}}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品数量" align="center">

        <template slot-scope="scope">
          <router-link :to="'/data/goods/'+ scope.row.id">

            <span>{{scope.row.goods_count}}</span>
          </router-link>

        </template>
      </el-table-column>
      <el-table-column label="店铺订单" width="110px" align="center">
        <template slot-scope="scope">
          <router-link :to="'/data/order/'+ scope.row.id">

            <span>{{ scope.row.order_count }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column label="订单金额" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.order_sum }}</span>
        </template>
      </el-table-column>

      <el-table-column label="店铺佣金" width="110px" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.comm_sum">{{ scope.row.comm_sum }}</span>
          <span v-else>0</span>

        </template>
      </el-table-column>


    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="getList"/>
  </div>
</template>

<script>
  import {ShopInfo} from '@/api/data'
  import waves from '@/directive/waves' // waves directive
  import {parseTime} from '@/utils'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  import {GetCategory} from '@/api/brand'
  import {GetShopByList} from '@/api/common'

  import {getArea, getCity, getProvinces} from '@/api/city'

  import {mapGetters} from "vuex";

  export default {
    name: 'ComplexTable',
    components: {Pagination},
    directives: {waves},
    computed: {
      ...mapGetters([
        'shop_id'
      ])
    },
    filters: {},

    data() {
      return {

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
        showSearch: false,
        shop: [],
        Provinces: [],
        City: [],
        Area: [],


      }
    },
    created() {

      this.getList()
      this.listQuery.shop_id=this.shop_id
      GetShopByList().then(res => {
        this.shop = res.data
      })
      getProvinces().then(res => {
        this.Provinces = res.data
      })
    },
    methods: {

      handleFilterClear() {
        this.listQuery = {
          page: 1,
          limit: 10,

        }
        this.fetchList()
      },
      handelProvinces(e) {
        this.City = [];
        this.listQuery.city_code = '';
        this.Area = [];
        this.listQuery.area_code = '';
        getCity(e).then(res => {
          this.City = res.data
        })
      },
      handelCity(e) {
        this.Area = [];
        this.listQuery.area_code = '';
        getArea(e).then(res => {
          this.Area = res.data
        })
      },
      getList() {
        this.listLoading = true
        ShopInfo(this.listQuery).then(response => {
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
