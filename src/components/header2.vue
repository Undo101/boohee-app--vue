<template>
  <div class="header-search">
    <div class="back"  @click="goBack">
      <img src="../assets/images/back.png" alt="">
    </div>
    <input type="search" placeholder="请输入食物名称">
    <div class="scan">
      <img src="../assets/images/scan.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goBack:function () {
      history.go(-1);
    }
  }
}
</script>

<style scoped>
 .header-search{
     height:4rem;
     width: 100%;
     background-color: #F9F9F9;
     display: flex;
     vertical-align: middle;
     align-items: center;
 }
 .search-body,.examples,.others{
   background-color: #f0f0f0;
 }
 .search-body{
   font-size:1.2rem;
 }
 input{
   background: #f0f0f0 url(../assets/images/search1.png) no-repeat;
   background-size: 1.7rem;
   background-position: 1%; 
   padding-left: 2rem;
   height: 2.58rem;
   border-radius: .5rem;
   border:0px;
   width: 23rem;
   margin-left: 1rem
 }
 .scan {
   margin-left: 1rem;
 }
</style>
