<template>
  <div>
    <p>{{count}}</p>
    <button @click="myFu">点击</button>
  </div>
</template>

<script>
import { ref } from 'vue' 
export default {
  name: 'App',
  setup() {
    let count = ref(0);
    function myFu(){
      alert(123)
    }
    return{
      count,
      myFu
    }
  }
}
</script>

<style>
</style>
