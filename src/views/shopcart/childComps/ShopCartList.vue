<template>
  <div class="cart-list" >
    <scroll class='cart-content' ref="scroll">
      <shop-cart-list-item v-for="(item, index) in cartList" 
                          :key="index" 
                          :product='item'></shop-cart-list-item>
    </scroll>

  </div>
</template>

<script>
  import ShopCartListItem from './ShopCartListItem'
  import Scroll from 'components/common/scroll/Scroll'
  import {mapGetters} from 'vuex'

  export default {
    name: 'ShopCartList',
    components: {
      ShopCartListItem,
      Scroll
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    },
  }
</script>
 
<style scoped>
  .cart-list {
    height: calc(100vh - 44px - 49px - 40px);
  }
  .cart-content {
    height: 100%;
    overflow: hidden;
  }

</style>