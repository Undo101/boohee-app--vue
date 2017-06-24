<template>
    <div class="wraper">
    <headr></headr>
      <div class="slim-head bg">
        <div class="slim-head_circle">
          <span>已减去</span>
        </div>
        <div class="slim-head_clock"></div>
      </div>
      <div class="slim-body">
        <div class="slim_bet">
          <div class="bet_icon">赌</div>
          <span>我赌我会瘦</span>
          <img src="../../assets/images/more.png" class="more" alt="">
        </div>
        <router-link to="/slim-components/health_one">
          <div class="health main-record">
            <div class="record-more">
              <div class="icon bgc7ec2f3"><img src="../../assets/images/sapling.png" alt=""></div>
              <span>健康习惯</span>
              <img src="../../assets/images/more.png" class="more" alt="">
            </div>
            <div class="record-finish">
              <div class="col-xs-5"><h5 class="left">今日完成<br><h3 nowrap class="number">{{per}}</h3>%</h5></div>
              <div class="col-xs-7">
                <h6 class="right">一 二 三 四 五 六 日</h6>
                <div class="checks"><div v-for="itemone in itemones" class="check" v-bind:class="{checked: isChecked}"></div></div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/slim-components/dietary_two">
          <div class="dietary main-record">
            <div class="record-more">
              <div class="icon bgcfe8d60"><img src="../../assets/images/flame.png" alt=""></div>
              <span>饮食&运动记录</span>
              <img src="../../assets/images/more.png" class="more" alt="">
            </div>
            <div class="record-finish">
              <div class="col-xs-5"><h5 class="left">还可以吃<br><h3 class="number">{{fat}}</h3>千卡</h5></div>
              <div class="col-xs-7">
                <div class="checks letflittle"><div v-for="itemtwo in itemtwos" class="quantity" v-bind:class="{done:todaydone}"></div></div>
                <h6 class="righttwo">早   午   晚   加   动</h6>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/slime-components/weight_three">
          <div class="weight main-record">
            <div class="record-more">
              <div class="icon bgc7d9bf1"><img src="../../assets/images/weight.png" alt=""></div>
              <span>体重记录</span>
              <img src="../../assets/images/more.png" class="more" alt="">
            </div>
          </div>
        </router-link>
        <router-link to="/slime-components/exercise_four">
          <div class="exercise main-record">
            <div class="record-more">
              <div class="icon bgcffac93"><img src="../../assets/images/sport.png" alt=""></div>
              <span>运动训练</span>
              <img src="../../assets/images/more.png" class="more" alt="">
            </div>
          </div>
        </router-link>
        <router-link to="slime-components/greasescale_five">
          <div class="scale">
            <img src="../../assets/images/lanya.png" alt=""class="icon">
            <div class="scale_spans">
              <span class="scale-bigger">智能体脂秤</span>
              <br><span class="scale-smaller">减肥先减脂，上秤更轻松</span>
            </div>
            <div class="scale_green">去体验</div>
          </div>
        </router-link>
        <div class="other-record">
          <div v-for="mark in marks" class="record_mark">
            <router-link to=mark.path>
              <div class="marks_bg" :background-color="mark.bgc">
                <img :src=mark.url alt="">
              </div>
              <span class="marks_value">{{mark.value}}</span>
              <img class="more" src="../../assets/images/more.png" alt="">
            </router-link>
          </div>
        </div>
      </div>
    <navbar></navbar>
    </div>
</template>
<script>
import headr from '../header'
import navbar from '../navbar'
import {mapState} from 'vuex'
export default {
  name:'marks',
  data() {
    return{
      per:this.$store.state.per,
      isChecked:this.$store.state.isChecked,
      fat:this.$store.state.fat,
      todaydone:this.$store.state.todaydone,
      marks:[{
        id:1,
        url:'../static/images/tomato.png',
        value:'饮食计划',
        path:'/second/message',
        bgc:'blue'
      },{
        id:2,
        url:'../static/images/rule.png',
        value:'围度记录',
        path:'../message',
        bgc:'red'
      },{
        id:3,
        url:'../static/images/flower.png',
        value:'生理期记录',
        path:'../message',
        bgc:'red'
      },{
        id:4,
        url:'../static/images/moon.png',
        value:'睡眠记录',
        path:'../message',
        bgc:'red'
      },
      ],
      itemones:this.$store.state.itemones,
      time:new Date(),
      itemtwos:[1,2,3,4,5]
    }
  },
  components:{
    headr,
    navbar
  },
  methods:{
  
  }
  // template: `<span>{{ per }}</span>`,
  // computed:{
  //     per: function () {
  //         return this.$store.state.complete.per
  //       }
  //     // ...mapState([
  //     //   'complete'
  //     // ])
  //     },
  // vuex:{
  //   actions:{

  //   },
  //   getters:{
  //     complete(state){
  //       return state.complete.per
  //     }
  //   }
  // }
}
</script>

<style lang="css" scoped>
.wraper{
  margin-top:4rem;
  width: 100%; 
}
.slim-head{
  margin-top:-4rem; 
  width: 100%;
  height: 20.08333rem;
  background-image: url(../../assets/photo/head-bg2.jpg);
  background-size: 100% ;
  display: flex;
  justify-content:center;
}
.slim-head_circle{
  width: 11.74rem;
  height: 11.74rem;
  border-radius: 50%;
  border:6px solid #fff;
  z-index: 1000;
  margin-top:4rem; 
  text-align: center;
}
.slim-head_circle span{
  color: #fff;
  font-size: 1.5rem;
}
.slim_bet{
  width: 100%;
  height: 3.5rem;
  background-color: #fdfebf;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}
.slim_bet span{
  width: 100%;
}
.bet_icon{
  margin-left: 1.41666rem;
  margin-right:1.33333rem; 
  background-color: #ff6260;
  height: 2.16666rem;
  width: 2.16666rem;
  border-radius: 50%;
  text-align: center;
  line-height: 2.16666rem;
  color: #fff;
  font-size: 1rem;
}
.main-record {
  height: 10.75rem;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d5d5d5;
  /*float: left;*/
  overflow: hidden;
}
.record-more{
  height: 4.416666rem;
  width: 100%;
  float: left;
  display: flex;
  align-items: center;
}
.icon{
  height: 2.16666rem;
  width: 2.166666rem;
  border-radius: 50%;
  margin-left:1.4166rem;
  margin-top: 1.4166rem;
}
.icon img{
  width:2.1rem;
  height: 2.1rem;
}
.bgc7ec2f3{
  background-color: #7ec2f3;
}
.bgcfe8d60{
  background-color: #fe8d60;
}
.bgc7d9bf1{
  background-color: #7d9bf1;
  display: flex;
  align-items: center;
  justify-content: center;
}
/*.bgc7d9bf1 img{
  width:1.5rem;
  height: 1.5rem;
}*/
.bgcffac93{
  background-color: #ffac93;
}
.main-record span{
  font-size: 1.4rem;
  font-weight: 600;
  width: 100%;
  color: black;
  /*display: block;*/
  margin-left:1.3rem; 
}
.col-xs-4{
  hight:80px;
}
.left{
  margin-top:0;
  margin-left: 45px;
  color:#5d5d5d;
}
.number{
  height: 2rem;
  width: 2rem;
  margin-top: .6rem;
}
.right{
  color:#5d5d5d;
  margin-left: 4rem;
  letter-spacing:.21rem;
  font-size: .1rem;
}
.checks{
  margin-left: 3.5rem;
  height: 1.1rem;
  display: flex;
  justify-content: space-around
}
.check{
  height: .6rem;
  width: 1rem;
  border-radius: 1rem;
  background-color: #f0f0f0;
}
.checked{
  height: .6rem;
  width: 1rem;
  border-radius: 1rem;
  background-color: #7d9bf1;
}
.quantity{
  width: .4rem;
  height: 4rem;
  background-color: #f0f0f0;
  border-radius: .8rem;
  margin-top:-1rem;
  margin-left: .6rem; 
}
.done{

}
.letflittle{
  margin-left: 2.7rem;
}
.righttwo{
  color:#5d5d5d;
  margin-left: 4rem;
  letter-spacing:.63rem;
  margin-top:2.5rem;
}
.scale{
  height: 5.25rem;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.scale img{
  background-color: #64bef3;
}
.scale_spans{
  width: 100%;
  margin-left:1.3rem; 
}
.scale-bigger{
  font-size: 1.4rem;
  font-weight: 600;
  color: black;
  display: block;
}
.scale-smaller{
  font-size: 1.2rem;
  color: #5d5d5d;
  display: block;
  margin-top: -1rem;
}
.scale_green{
  height: 2.08333rem;
  width: 4.625rem;
  border:1px solid green;
  border-radius: 10%;
  right: 1.416666rem;
  color: green;
  font-size: 1rem;
  font-weight:700;
  position: absolute;
  text-align: center;
  line-height: 2.08333rem;
}
.record_mark{
  height: 4.416666rem;
  width: 100%;
  background-color:#fff;
  /*float: left;*/
  display: flex;
  align-items: center;
  /*justify-content: space-around;*/
}
.marks_value{
  font-size: 1.5rem;
  color: black;
  width: 100%;
  /*margin-left:5.3rem; */
}
.marks_bg{
  height: 2rem;
  width: 2rem;
  margin-left:1.4166rem;
  margin-top: 1.4166rem;
  border-radius:1.5rem;
  background-color: red;
}
.marks_bg img{
  height: 1.9rem;
  width: 1.9rem;
}
</style>
