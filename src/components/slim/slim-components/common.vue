<template>
  <div class="common" >
    <div class="food">
      <li v-for="item in foods">
        <img :src="item.pic" alt="">
        <span>{{item.desc}}</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return{
      foods: this.$store.state.foods
    }
  }
}
</script>

<style lang="css" scoped>
.common{
  width: 100%;
}
.food li{
  height: 5.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
}
.food img{
  height: 3.8333rem;
  width: 3.83333rem;
  border-radius: 5px;
  margin-left: 1.41666rem
}
</style>
