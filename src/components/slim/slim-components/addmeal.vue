<template>
    <div>
        <addmealHeader></addmealHeader>
        <router-view class="contain"></router-view>
    </div>
</template>
<script>
import addmealHeader from '@/components/slim/slim-components/addmealHeader'
export default {
  components:{
      addmealHeader
  }
}
</script>
<style scoped>
.contain{
    margin-top: 6.416666rem;
    width: 100%
}
</style>
