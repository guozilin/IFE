<template>
  <div id="app">
      <div id="cover"></div>
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Todo from './todo/todo.vue'
import Footer from './todo/footer.jsx'
export default {
    components:{
        Header,
        Footer,
        Todo,
    }
}

</script>

<style lang="stylus" scoped>
// scoped 绑定作用域的作用，下面的样式只在该组建内生效
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .4
  z-index -1
}
</style>
