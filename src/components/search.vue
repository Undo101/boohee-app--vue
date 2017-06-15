<template>
  <div>
    <headr></headr>
  <div class="search-body">
    <span>大家都在搜</span>
    <div class="example-size">
        <div v-for="food in examples" class="examples food">
          <router-link to="/content"><div>{{food.value}}</div></router-link>
        </div>
    </div>
    <div class="others">
      <span class="others-search">其他搜索</span>
      <div class="others-com">
        <div class="sircle topic"></div>
        <span>话题</span>
      </div>
      <div class="others-com">
        <div class="sircle article"></div>
        <span>文章</span>
      </div>
      <div class="others-com">
        <div class="sircle users"></div>
        <span>用户</span>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
import headr from './header2'
export default {
  name:'examples',
  data () {
    return{
      examples:[{
        id:1,
        value:'苹果'
      },{
        id:2,
        value:'米饭'
      },{
        id:3,
        value:'鸡蛋'
      },{
        id:4,
        value:'玉米'
      },{
        id:5,
        value:'酸奶'
      },{
        id:6,
        value:'西瓜'
      }]
    }
  },
  components:{
    headr
  }
}
</script>
<style scoped>
 span{
  display: block;
  margin-top: 1rem;
 }
 .others-search{
   text-align: center;
   display: block;
 }
 .food{
   height:4rem;
   width: 10.416667rem;
   background-color: #fff;
   float: left;
   font-size: 1.5rem;
   text-align: center;
   line-height: 4rem;
   color: #5b5b5b;
 }
 .food div{
   color: #5b5b5b;
 }
 .example-size{
   height: 8rem;
   width: 100%;
 }
 .others{
   height: 10rem;
   width: 100%;
   margin-top:3rem; 
 }
  .others-com{
   height: 8rem;
   width: 9rem;
   float: left;
   text-align: center;
   margin-top:2rem;
   margin-left: 1rem
 }
 .sircle{
   height: 4rem;
   width: 4rem;
   border-radius: 50%;
   border:1px solid #5b5b5b;
   background-color: #fff;
   margin: 0 auto;
   background-size: 2rem 2rem;
   background-position: 50% 50%;
   background-repeat: no-repeat;
 }
.topic{
  background-image: url(../assets/images/topic.png);
}
.article{
  background-image: url(../assets/images/article.png) ;
}
.users{
  background-image: url(../assets/images/user.png);
}
</style>
