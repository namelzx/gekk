<template>
  <div class="dashboard-editor-container">
    <panel-group :homeinfo="homeinfo" />
    <real-time  :homeinfo="homeinfo"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PanelGroup from "./components/PanelGroup";
import RealTime from "./components/RealTime";

import {GetHomeByData} from "@/api/home";
export default {
  name: "DashboardAdmin",
  components: {
    PanelGroup,
    RealTime
  },
  computed: {
    ...mapGetters([
      'shop_id'
    ])
  },
 
  data() {
    return {
      homeinfo:{},
    };
  },
   created(){
    GetHomeByData(this.shop_id).then(res=>{
      this.homeinfo=res.data;

    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 0 32px;
  background-color: #fff;
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
