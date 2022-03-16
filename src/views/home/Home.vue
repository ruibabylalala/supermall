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
    <tab-control :titles="['流行', '新款', '精选']"  
                  class="tab-control" 
                  @tabClick="tabClick"/>
    <!-- <goods-list :goods="goods[currentType].list"/>  这里代码有点太长了，可以使用一个计算属性 -->
    <goods-list :goods="showGoods"/> 

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
  import GoodsList from 'components/content/goods/GoodsList'


  // 导入的方法
  import { getMultidata, getHomeGoods } from "network/home";


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList
    },
    data() {
      return {
        // result: null
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop'
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    // created() {
      // 1. 请求多个数据
      //  getMultidata().then(res => {
        // console.log(res);    // 局部变量，执行完这个方法后res数据就没了

        // 箭头函数中this会往上找作用域，所以会找到created中的this，
        // 而created中的this就是当前的组件对象，所以this.result拿到的就是data中的result 
        // 所以即使函数执行完了，res数据也不会消失
        // this.result = res   
        // res为什么不会消失？垃圾回收机制
        // 垃圾回收会等到没有引用指向一个 对象的时候回收这个对象  
        // result指向res这个数据对象，所以res不会被回收

      //   this.banners = res.data.banner.list
      //   this.recommends = res.data.recommend.list
      // }) 
      //不可以在这里打印？因为getMultidata().then是一个异步操作，异步操作还没执行完，就会执行这一步 
      // 那么怎么验证result已经保存了数据呢，通过工具devtool
      // console.log(this.result);   

      // 2. 请求商品数据
      // 如果把对数据的处理也写在created函数中，created中的代码就有点多，有点乱
      // created是一个比较特殊的函数，当组件创建完成后，就会执行这个函数，
      // 当在created这个比较特殊的函数中做事情的时候，最好只在里面写主要逻辑，至于更详细的逻辑，不要在里面写
      // 所以created中，只写发送请求，具体的处理逻辑（方法实现），应该写在methods中 
      // getHomeGoods('pop', 1).then(res => {
      //   console.log(res);
      // })
    // },
    created() {
      // 1. 请求多个数据
      this.getMultidata()

      // 2. 请求多个数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      // 事件监听相关的方法
      tabClick(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },


      // 网络请求相关的方法
      getMultidata() {
        getMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        // 此处的参数不一定是1，而应该是原来的页码加1。
        // 如果上拉加载，请求第二页时，想复用这个方法，但是这个页面写死了是1，就没办法复用了
        // getHomeGoods(type, 1).then(res => {

        // 所以要传入第二个参数page，动态获取页面
        const page = this.goods[type].page + 1 
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1  //拿到数据后，要把页面更新一下
        })
      }
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
    z-index: 9
  }
</style>