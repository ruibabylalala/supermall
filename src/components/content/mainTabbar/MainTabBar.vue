<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <!-- <tab-bar-item>
        <img slot="item-icon" src="./assets/img/category.svg" alt="" />
        <img slot="item-icon-active" src="./assets/img/category_active.svg" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item> -->
      <!-- <tab-bar-item>
        <template v-slot:item-icon><img src="./assets/img/home.svg" alt="" /></template>
        <template v-slot:item-icon-active><img src="./assets/img/home_active.svg" alt="" /></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item> -->
      <tab-bar-item path="/category" activeColor="red">
        <template v-slot:item-icon><img src="~assets/img/tabbar/category.svg" alt="" /></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/category_active.svg" alt="" /></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="green">
        <template v-slot:item-icon><img src="~assets/img/tabbar/shopcart.svg" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="yellow">
        <template v-slot:item-icon><img src="~assets/img/tabbar/profile.svg" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }

}
</script>

<style>

</style>