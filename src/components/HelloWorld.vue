<template>

  <div id="sleader">
    <h3>{{msg}}</h3>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <ul><li v-for="list in lists" class="lis">{{list.name}}</li></ul>
    <el-button @click="tianchu" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>

</template>

<script>


  export default {
    name: 'HelloWorld',
    data () {
      return  {
          lists:[{'name':"汽车"},{'name':"火车"},{'name':"货车"}],
          msg :"这是一个demo"
      }
    },

    ready: function() {
      this.$http.get('test.json', function(data) {
        this.$set('json', data);
        console.log(data)
      }).error(function(data, status, request) {
        console.log('fail' + status + "," + request);
      })
    },
    methods: {
      tianchu :function () {
        alert(1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
    color: #42b983;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

