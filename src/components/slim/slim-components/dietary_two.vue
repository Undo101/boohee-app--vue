<template>
  <div class="wraper">
    <headr></headr>
    <div class="contain">
      <div class="compute-meal">
       <div class="col-xs-4"><span>摄入</span><div class="numleft">0</div></div>
       <div class="col-xs-4"><span>还可以吃/千卡</span><div class="nummid">{{fat}}</div><span>摄入未达标</span></div>
       <div class="col-xs-4"><span>运动</span><div class="numright">0</div></div>
      </div>
      <div class="add-meal">
        <!--<img src="../../../assets/photo/dietary_bg.png" alt="">-->
        <span class="add_remind">还没有记录<br>请点击屏幕下方按钮来添加</span>
      </div>
    </div>
    <div class="footnav">
        <div class="addmeal_sel" v-for="selecter in selecters">
          <router-link to="/addmeal">
            <img :src="selecter.url"></img>
            <span class="white">{{selecter.meal}}</span>
          </router-link>
        </div>
    </div>
  </div>
</template>
<script>
import headr from '@/components/header3'
// import {mapState} from 'vuex'
export default {
  data () {
    return {
      fat:this.$store.state.fat,
      selecters:[
        {meal:'+早餐',url:'../../../../static/images/bread.png'},
        {meal:'+午餐',url:'../../../../static/images/rice.png'},
        {meal:'+晚餐',url:'../../../../static/images/dinner.png'},
        {meal:'+加餐',url:'../../../../static/images/coffe.png'},
        {meal:'+运动',url:'../../../../static/images/run.png'}
      ]
    }
  },
  components:{
    headr
  }
}
</script>
<style lang="css" scoped>
  .wraper{
  padding-top:4rem; 
  display: flex;
  justify-content: center;
}
 .compute-meal{
   height: 11.25rem;
   width: 100%;
   background-color: #62cc74;
   color: #fff;
   font-size:1.25rem;
   text-align: center; 
 }
 .compute-meal span{
   display: block;
   margin-top: 1.625rem;
 }
 .numleft,.numright{
   margin-top: 1rem;
   font-size: 1.5rem;
 }
 .nummid{
   margin-top: 1rem;
   font-size: 2rem;
   margin-left:-1rem;
   margin-right:-1rem;  
   border-left: 1px solid #fff;
   border-right: 1px solid #fff;
 } 
 .add-meal{
   height: 35.8rem;
   background: url(../../../assets/photo/dietary_bg.png) no-repeat;
   background-size: 10.75rem 8.0833rem;
   background-position: 50% 20%;
   background-color: #f8f8f8;
   display: flex;
   justify-content: center;
 }
 .add_remind{
  margin-top:14.2rem; 
  color: #5d5d5d;
  font-size: 1.2rem;
  text-align: center;
 }
 .footnav{
   height:4.58333rem;
   position:fixed;
   bottom:0;
   /*box-shadow: 0 -3px 4px rgba(0,0,0,.03);*/
	 width:100%;
   background: #554743;
   overflow: hidden;
   justify-content: space-around;
   display: flex
 }
 .white{
   color: #fff;
 }
 .contain{
   width: 100%;
   height: 100%;
 }
</style>
