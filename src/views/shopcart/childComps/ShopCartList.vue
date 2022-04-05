<template>
  <div class="cart-list">
    <div v-for="(item, index) in cartList" :key="index">
      <div>
        <img :src="item.image" alt="">
      </div>
      <div>{{item.title}}</div>
      <div>{{item.desc}}</div>
      <div>{{item.price}}</div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'ShopCartList',
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>
 
<style scoped>
  
</style>