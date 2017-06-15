<template>
  <div class="wraper">
      <headr :title="title"></headr>
      <div class="margin-top">
        <div class="habits" v-for=" (habit,index) in habits" :key="habit.id" >
            <div class="col-xs-3 marker">
                <div v-on:click.once="setday(index)" class="active" :data-id="habit.id" v-bind:class="{active:day[index].isActive,'completed':day[index].com}"></div>
            </div>
             <div class="col-xs-9 name">
                <span class="bigger"><strong>{{habit.name}}</strong></span>
                <span class="smaller" v-for="item in day" v-if="item.id === habit.id">已经坚持{{item.count}}天</span>
            </div>
      </div>
      </div>
  </div>
</template>

<script>
import headr from '@/components/header3'
import { mapActions} from 'vuex'
export default {
    mounted () {
        let day = this.$store.state.day
        this.day = day
    },
    components:{
        headr
    } ,
    data () {
        return {
            title: '健康习惯',
            habits:[
                {id:0,name:'吃早餐',},
                {id:1,name:'运动'},
                {id:2,name:'多喝水'},
                {id:3,name:'便便'},
                {id:4,name:'早睡'},
                {id:5,name:'早起'}],
            day: this.$store.state.day
        }
    },
    methods:{
        setday(index){
            console.log(index)
            this.$store.dispatch('setday', index)
        }
    },
    created () {
        // let isActive = this.$store.state.isActive
        // console.log(isActive)
        // this.isActive =isActive
        // let com = this.$store.state.com
        // this.com = com
        // console.log(com)
    }
}
</script>

<style lang="css" scoped>
.wraper{
  padding-top:4rem; 
  display: flex;
  justify-content: center;
}
.habits{
    height: 6.6667rem;
    width: 27.33333rem;
    background-color: #5eb4ee;
    background: url(../../../assets/photo/habits-bg.png)no-repeat;
    background-size: 100%;
    border:1px solid #fff;
    border-radius: 1rem;
    overflow: hidden;
    margin-top: 1.416667rem;
}
.active{
    height: 3.04166rem;
    width: 3.041666rem;
    border: 1.5px solid rgba(255, 255, 255, .5);
    border-radius: 50%;
    background: url(../../../assets/images/yes.png) no-repeat;
    background-size:3rem 3rem;
    background-position: 50% 50%;
}
.completed {
    height: 3.04166rem;
    width: 3.041666rem;
    border: 1.5px solid rgba(255, 255, 255, .5);
    border-radius: 50%;
    background: url(../../../assets/images/done.png) no-repeat;
    background-color: #fff;
    background-size:3rem 3rem;
    background-position: 50% 50%;
}
.col-xs-3{
    height: 6.6667rem;
}
.marker{
    display: flex;
    align-items: center;
    justify-content: center;
}
.name{
    font-size: 1.5rem;
    color: #fff;
    height: 3.958333rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.name span{
    display: block;
}
.smaller{
    font-size: 1.2rem;
}
</style>