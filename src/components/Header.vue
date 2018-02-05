<template>
  <div>

    <h1>
        {{message}}
    </h1>
    <div>

    </div>
    <div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
    <p>{{ msg }}</p>
    <button @click="reverseMessage">按钮</button>
  </div>
</template>
<script>

  export default{
      data : function(){
        return {
          msg:"Hello Vue.js!",
          radio: '1'
        }
      },
    methods: {
      reverseMessage: function () {

      }
    },
      props: {
        message: String  //定义传值的类型<br>    }
      }
 }
</script>
<style>

</style>
