<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-select v-model="form.courier_id" filterable placeholder="选择快递公司">
          <el-option
            v-for="item in op"
            :key="item.id"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>

      </el-col>
      <el-col :span="6">

        <el-input v-model="form.out_courier_no" placeholder="输入订单号"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button style="margin-left: 30px" type="primary" @click="onCourier">保存</el-button>
      </el-col>
    </el-row>

  </div>
</template>


<script>
  import {all} from '@/api/courier'

  export default {
    name: "logis",
    props:{
      order_id:Number
    },
    data() {
      return {
        form: {

        },
        op: [],
      }
    },
    created() {
      all().then(res => {
        console.log(res)
        this.op = res.data;
      })
    },
    methods: {

      onCourier(){
        this.$emit('onCourier',this.form)
      }
    }
  }
</script>

<style scoped>

</style>
