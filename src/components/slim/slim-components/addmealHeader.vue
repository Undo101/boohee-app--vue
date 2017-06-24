<template>
    <div class="head-wraper">
      <div class="header-back">
      <router-link to="/slim-components/dietary_two">
      <div class="back" @click="goHealthone">
        <img src="../../../assets/images/back.png" alt="">
      </div>
      <div class="title">
          <!--<div>{{title}}</div>-->
      </div>
      </router-link>
    </div>
    <router-link to="/search">
     <div class="head-search">
        <div class="input">
            <div class="sear"></div>请介绍食物名称
        </div>
        <div class="scan">
          <img src="../../../assets/images/scan1.png" alt="">
        </div>
     </div>
    </router-link>
    <div class="head_content">
      <div class="outer-scroll">
        <div class="inner-scroll">
          <div class="content_bar">
            <div v-for="(choose,index) in chooses" >
              <router-link :to="choose.linkTo">
                <div class="notchoose" v-on:click="lightHigh(index)" :data-id="choose.id"  v-bind:class="{'choose':chooses[index].light}">{{choose.title}}</div>
              </router-link>   
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import headr from '@/components/header3'
import common from '@/components/slim/slim-components/common'
import other from '@/components/slim/slim-components/other'
import { mapActions} from 'vuex'
import { mapState } from 'vuex'
export default {
  mounted(){
    let chooses = this.$store.state.chooses
    this.chooses =chooses
  },
  data () {
    return {
      chooses:this.$store.state.chooses
    }
  },
  components:{
      headr,
      common,
      other
  },
  methods:{
    lightHigh(index){
      this.$store.dispatch('lightHigh',index)
      let id = this.$store.state.chooses.id
      if(id==1){
        console.log(event.target.dataset.id)
      }
      // let id = event.target.dataset.id
      // let Id = this.$store.state.chooses[index].id
      // if(id === Id){
      //   this.$store.state.chooses[index].isActive = true
      //   this.$store.state.chooses[index].light = true

      // }
      // console.log(Id)
      // console.log(event.target.dataset.id)
      // if(this.chooses[index].id===id){
      // }
    },
    goHealthone:function () {
      
    }
  },
  computed:{
    content () {
      return this.$store.state.common
    }
  }
}
</script>

<style lang="css" scoped>
.header-back{
    height:4rem;
    width: 100%;
    background-color: #F9F9F9;
    display: flex;
    vertical-align: middle;
    align-items: center;
    /*padding-top: 0;
    top: 0;*/
    border-bottom: 1px solid #d5d5d5;
 }
.title div{
    font-size: 1.7rem;
    font-weight: 580;
}
.head-wraper{
  height: 11.958333rem;
  display: flex;
  /*justify-content: center;*/
  flex-direction: column;
  position: fixed;
  width: 100%;  
}
.head-search{
  height:4.53rem;
  width: 100%;
  background-color: #F9F9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  /*border-bottom: 1px solid #f9f9f9;*/
  /*position: fixed;*/
 }
 .sear{
   background: #f0f0f0 url(../../../assets/images/search1.png) no-repeat;
   background-size: 100%;
   height: 2.1rem;
   width: 2.1rem;
   margin-top: .5rem;
 }
 .input{
   /*background: #f0f0f0 url(../../../assets/images/search1.png) no-repeat;*/
   background-size: 1.7rem;
   padding-left: 2rem;
   height: 3rem;
   border-radius: .5rem;
   background-color: #efeff4;
   border:0px;
   width: 25rem;
   margin-left: 1rem;
   font-size: 1.3rem;
   display: flex;
   justify-content: center;
   line-height: 3rem;
   color: #707070;
 }
 .scan {
   margin-left: 1rem;
 }
 .head_content{
  width: 100%;
  margin-top: 0;
 }
 .outer-scroll{
   height: 4.23rem;
   width: 100%;
   position: fixed;
   overflow-x: scroll;
   overflow-y:hidden;
   
 }
 .inner-scroll{
   height:4.23rem;
   margin-bottom: 2rem;
 }
 .content_bar{
  height:4.23rem;
  width: 120%;
  background-color: #F9F9F9;
  display: flex;
  justify-content: space-around;
  align-items: center;
 }
 .notchoose{
   min-width: 5rem;
   height: 4.53rem;
   line-height: 4.83rem;
   font-size: 1.35rem;
   font-weight: 570;
   color: black;
   display: flex;
   text-align: center;
   justify-content: center;
 }
 .choose{
   min-width: 5rem;
   height: 4.53rem;
   line-height: 4.53rem;
   font-size: 1.35rem;
   font-weight: 570;
   color: green;
   border-bottom: 5px solid green;
   display: flex;
   text-align: center;
   justify-content: center;
   text-decoration: none;
 }

</style>
