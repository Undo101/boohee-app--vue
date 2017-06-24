<template>
  <div>
    <div>
        <section class="header">
        <div class="regJump">
          <router-link to="/search">
            <img class="left" src="../../assets/images/search1.png" alt="">
          </router-link>
          
          <router-link to="/message">
            <img class="right" src="../../assets/images/message1.png" alt="">
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
    }
  },
  components:{
  }
}
</script>

<style lang="css" scoped>
html,body,section{
  font-size: 16px;
	background-color: #efeff4;
	font-family: PingFangSC-Regular,Arial,"Helvetica Neue",Helvetica,sans-serif;
	padding:0;
	margin:0;
}
.header{
	  height: 4rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: transparent;
    background-color: #fff;
}
.regJump{
    height: 4rem;
    /*background-color: #F9F9F9;*/
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left{
    margin-left: 1rem;
}
.right{
  margin-right: 1rem;
}
</style>
