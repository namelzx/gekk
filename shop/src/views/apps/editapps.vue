<template>
  <article-detail :is-edit="true"/>
</template>

<script>
  import ArticleDetail from './components/AppsDetail'

  export default {
    name: 'CreateForm',
    components: { ArticleDetail }
  }
</script>

