<template lang="html">
    <div>
        <section class="header">
        <div class="regJump">
          <router-link to="/search">
            <img src="../assets/images/search.png" alt="">
          </router-link>
          <router-link to="/message">
            <img src="../assets/images/message.png" alt="">
          </router-link>
        </div>
      </section>
    </div>
</template>
<script>
export default {
  data () {
    return { 
    }
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
    background-color: rgba(225,255, 255,.15)
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
</style>

