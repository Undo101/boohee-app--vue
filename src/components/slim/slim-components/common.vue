<template>
  <div class="common" >
    <div class="common_food">
      <li v-for="(item,index) in foods">
        <div class="overlayer" @touchmove.prevent></div>
        <img :src="item.pic" alt="">
        <div class="food_descs" v-on:click="select(index)">
          <span class="food_desc">{{item.desc}}</span>
          <span class="food_fat">{{item.fat}}</span>
          <span class="food_kk">千卡/100克</span>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return{
      foods: this.$store.state.foods,
      time: new Date()
    }
  },
  methods:{
    select(index){
      console.log(index)
      
    }
  }
}
</script>

<style lang="css" scoped>
.common{
  width: 100%;
  height: 52.71666rem;
  padding-top:12.8rem;
  /*overflow: hidden;*/
}
.common_food li{
  height: 5.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
}
.common_food img{
  height: 3.8333rem;
  width: 3.83333rem;
  border-radius: 5px;
  margin-left: 1.41666rem
}
.food_descs{
  margin-left: 1rem;
}
.food_desc{
  font-size: 1.5rem;
  font-weight: 550;
  display: block;
  width: 20rem;
}
.food_kk{
  color: black;
  font-size: 1.1rem;
}
.food_fat{
  color: red;
  font-size: 1rem;
}
</style>
