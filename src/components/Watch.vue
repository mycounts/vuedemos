<template>
<div id="demo">
  <input v-model="firstName" type="text">
  <p>{{fullName}}</p>
</div>
</template>


<script>

  export default{

    data(){
      return {
        firstName: 'Foos',
        lastName: 'Bar',
        fullName: 'Foos Bar'
      }
    },
    watch: {
      firstName: function (val){
       this.fullName = val + ' ' + this.lastName;
//       console.log(val)
      },
      lastName: function (val) {
         this.fullName = this.firstName + ' ' + val
      }
    }
  }


</script>
