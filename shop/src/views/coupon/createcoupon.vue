<template>
    <Detail :is-edit="false"/>
</template>

<script>
 import Detail from './components/Detail'

  export default {
    name: 'CreateForm',
    components: { Detail }
  }
  
</script>

<style scoped>

</style>
