<template>
  <div id="home">
    <!-- <nav-bar>     已废弃但未移出的语法
      <div slot="center">购物街</div>
    </nav-bar> -->
    <nav-bar class="home-nav">
      <!-- 具名插槽使用 新语法 -->
      <template v-slot:center>购物节</template> 
    </nav-bar>

    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行', '新款', '精选']"  class="tab-control" />

  </div>
</template>

<script>
  // 导入的子组件
  import HomeSwiper from "./childComps/HomeSwiper.vue"
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from "./childComps/FeatureView.vue"

  // 导入的公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  // 导入的方法
  import { getMultidata } from "network/home";


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
    },
    data() {
      return {
        // result: null
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1. 请求多个数据
      getMultidata().then(res => {
        // console.log(res);    // 局部变量，执行完这个方法后res数据就没了

        // 箭头函数中this会往上找作用域，所以会找到created中的this，
        // 而created中的this就是当前的组件对象，所以this.result拿到的就是data中的result 
        // 所以即使函数执行完了，res数据也不会消失
        // this.result = res   
        // res为什么不会消失？垃圾回收机制
        // 垃圾回收会等到没有引用指向一个 对象的时候回收这个对象  
        // result指向res这个数据对象，所以res不会被回收

        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      //不可以在这里打印？因为getMultidata().then是一个异步操作，异步操作还没执行完，就会执行这一步 
      // 那么怎么验证result已经保存了数据呢，通过工具devtool
      // console.log(this.result);   
    }
  };
</script>

<style>
  #home {
    height: 3000px;
  }

  .home-nav {
    color: white;
    background-color: pink;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);

    position: sticky;
    top: 0;
    z-index: 1000
  }

  .tab-control {
    position: sticky;   /* 2018年的时候这个属性在浏览器端兼容性不好，移动端兼容性不错 */
    top: 44px;          /* 2022年兼容性应该差不多了 */
  }
</style>