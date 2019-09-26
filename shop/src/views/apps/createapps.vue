<template>
  <article-detail :is-edit="false"/>
</template>

<script>
  import ArticleDetail from './components/AppsDetail'

  export default {
    name: 'CreateForm',
    components: { ArticleDetail }
  }
</script>

