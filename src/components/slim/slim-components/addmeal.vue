<template>
    <div class="wrapper">
        <addmealHeader></addmealHeader>
        <router-view></router-view>
        <div class="camera">
            <img src="../../../assets/images/camera.png" alt="">
            <span>拍照记录</span>
        </div>
    </div>
</template>
<script>
import addmealHeader from '@/components/slim/slim-components/addmealHeader'
export default {
  components:{
      addmealHeader
  }
}
</script>
<style scoped>
.contain{
    margin-top: .516666rem;
    width: 100%;
    height: 52.71666rem;
}
.camera{
   width: 100%;
   height: 3rem;
   background-color: #fff;
   margin-bottom: 2rem;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .camera img{
   width: 2.5rem;
   height: 2.5rem;
   display: block;
 }
 .camera span{
   display: block;
   color: red;
   font-size: 1.5rem;
   margin-left: .4rem
 }
</style>
