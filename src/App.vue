<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components:{
  }
}
</script>

<style lang="css">
*{
  margin: 0;
  padding: 0;
}
html,body{
  font-size: 12px;
	background-color: #efeff4;
	font-family: PingFangSC-Regular,Arial,"Helvetica Neue",Helvetica,sans-serif;
	padding:0;
	margin:0;
}
ul,li,p{
	list-style:none;
	margin:0;
	padding:0;
}
a{
  text-decoration: none;
  vertical-align: middle;
  align-items: center;
}
img{
  display: block;
}
.more{
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 1.41666rem;
}
</style>

