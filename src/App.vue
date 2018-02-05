<template>
  <div id="app">
    <router-view></router-view>
    <div id="menu" style="height: 45px;text-align: center">
      <router-link to="/HelloWorld">首页</router-link>
      <router-link to="/Header">信息</router-link>
      <router-link to="/Watch">表格</router-link>


    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#menu{
  position: absolute;
  bottom:20px;
  width: 99%;
}
  a{

  padding:1%;
    font-size:1rem;
    color: #fff;
    text-decoration: none;
    background-color: #909399;
    border-color: #909399;
    height:30px;
    text-align: center;
    line-height: 30px;
    width: 60px;
  }
</style>
