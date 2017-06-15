<template>
  <div class="header-back">
    <div class="back" @click="goBack">
      <img src="../assets/images/back.png" alt="">
    </div>
    <div class="title">
        <div>{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return{
            back:this.$store.state.back
        }
    },
    props: ['title'],
    methods:{
        goBack:function () {
            history.go(-1);
        }
    },
}
</script>

<style scoped>
.header-back{
    height:4rem;
    width: 100%;
    background-color: #F9F9F9;
    display: flex;
    vertical-align: middle;
    align-items: center;
    position: fixed;
    top: 0;
    border-bottom: 1px solid #d5d5d5;
 }
.title div{
    font-size: 1.7rem;
    font-weight: 580;
}
</style>
