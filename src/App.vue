<template>
  <div id="app">
    <!-- exclude:不缓存的组件 Detail为组件的name命名 -->
    <keep-alive exclude="Detail"><router-view/></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
