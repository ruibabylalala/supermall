<template>
  <div class="shop-cart">
    <!-- 导航 -->
    <nav-bar class="nae-bar"><template v-slot:center>购物车({{length}})</template></nav-bar>
    <!-- 商品的列表 -->
    <shop-cart-list></shop-cart-list>
    <!-- 底部工具栏 -->
    <shop-cart-bottom-bar></shop-cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  
  import ShopCartList from './childComps/ShopCartList'
  import ShopCartBottomBar from './childComps/ShopCartBottomBar'

  import {mapGetters} from 'vuex'

  export default {
    name: 'ShopCart',
    components: {
      NavBar,
      ShopCartList,
      ShopCartBottomBar
    },
    computed: {
      // mapGetters将 store 中的 getter 映射到局部计算属性
      // 两种语法：数组、对象（可以自定义名字）
      // ...mapGetters(['cartLength'])
      ...mapGetters({
        length: 'cartLength'
      })
    }

  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  
</style>