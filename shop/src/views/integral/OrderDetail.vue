<template>
  <Detail :is-edit="true"/>
</template>

<script>
  import Detail from './components/OrderDetail'

  export default {
    name: 'CreateForm',
    components: { Detail }
  }

</script>

<style scoped>

</style>
