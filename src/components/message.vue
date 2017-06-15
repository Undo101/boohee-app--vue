<template>
  <div class="wraper">
      <headr :title="title"></headr>
      <div class="margin-top">
        <div v-for="remind in messages" class="messages">
        <img :src=remind.url alt="">
        <span>{{remind.value}}</span>
      </div>
      </div>
      <div class="read">全部已读</div>
  </div>
</template>
<script>
import headr from './header3'
export default {
  name:'messages',
  data () {
    return{
      title:'消息分类',
      messages:[{
        id:1,
        url:'../static/images/aite.png',
        value:'提到我的'
      },{
        id:2,
        url:'../static/images/mess.png',
        value:'评论'
      },{
        id:3,
        url:'../static/images/dianzan.png',
        value:'收到的赞'
      },{
        id:4,
        url:'../static/images/fans.png',
        value:'新粉丝'
      },{
        id:5,
        url:'../static/images/circle.png',
        value:'推荐'
      },{
        id:6,
        url:'../static/images/guangbo.png',
        value:'广播'
      },{
        id:7,
        url:'../static/images/customser.png',
        value:'联系客服'
      }]
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
}
.messages{
  height: 6.2rem;
  width: 100%;
  font-size: 1.6rem;
  /*float: left;*/
  display: flex;
  border-bottom: 1px solid #d5d5d5;
  align-items: center;
  background-color: #F9F9F9;
}
.messages img{
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.read{
  height: 3.5rem;
  width: 100%;
  background-color: #F9F9F9;
  color: green;
  margin-top: 1.7rem;
  text-align: center;
  line-height: 3.5rem;
  border-top: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  font-size: 1.3rem;
}
</style>
