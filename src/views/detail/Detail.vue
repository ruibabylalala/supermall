<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="nav"/>

    <scroll class="content" ref="scroll" :probeType='3' @scrollPosition='contentScroll'>
      <detail-swiper v-if="topImages!= ''" :top-images='topImages'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :param-info='paramInfo'></detail-param-info>
      <detail-comment-info ref="comment" :comment-info='commentInfo'/>
      <goods-list ref="recommend" :goods='recommends'></goods-list>
    </scroll>

    <detail-bottom-bar @addCart='addToCart'/>
    <back-top @click.native="backClick" v-show='isShowBackTop'></back-top>

    <toast :message='message' :show='show'></toast>
    
  </div>
  
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  // import BackTop from 'components/content/backTop/BackTop'
  import Toast from 'components/common/toast/Toast'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail.js'
  import {backTopMixin} from 'common/mixins.js'

  import {mapActions} from 'vuex'
 
  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
      // BackTop
      Toast
    },
    mixins: [backTopMixin],
    data() {
      return {
        iid: null, 
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopY:[],
        currentIndex: 0,
        // isShowBackTop: false
        message: '',
        show: false
      }
    },
    created() {
      // 1. 保存传入的iid
      this.iid = this.$route.params.iid

      // 2. 根据iid请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result
        // 1. 获取顶部的图片轮播数据
        this.topImages = res.result.itemInfo.topImages

        // 2. 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3. 获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 4. 获取商品详情信息
        this.detailInfo = data.detailInfo

        // 5. 获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 6. 获取评论信息,先判断是否有评论信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]   //只保存第一条评论list[0]
        }  

        // 1. 第一次获取，值不对。
        // 值不对的原因：this.$refs.params.$el压根没有渲染
        // this.themeTopY.push(0)
        // this.themeTopY.push(this.$refs.params.$el.offsetTop  - 44)
        // this.themeTopY.push(this.$refs.comment.$el.offsetTop  - 44)
        // this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 44)

        // console.log(this.themeTopY);

        /* this.$nextTick(() => {
          // 2. 第二次获取，值不对
          // 值不对的原因：图片没有计算在内
          // 根据最新的数据，对应的DOM是已经被渲染出来
          // 但是图片依然是没有加载完，（目前获取到的offsetTop不包含其中的图片）
          // offsetTop值不对的时候，都是因为图片问题
          this.themeTopY = []
          this.themeTopY.push(0)
          this.themeTopY.push(this.$refs.params.$el.offsetTop - 44)
          this.themeTopY.push(this.$refs.comment.$el.offsetTop - 44)
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 44)

          console.log(this.themeTopY);
        }) */

        
      })

      // 3. 请求推荐数据
      getRecommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list
      })
    },
    mounted() {
      // this.themeTopY.push(0)
      // this.themeTopY.push(this.$refs.params.$el.offsetTop - 44)
      // this.themeTopY.push(this.$refs.comment.$el.offsetTop - 44)
      // this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 44)

      // console.log(this.themeTopY);
    },
    updated() {
      // this.themeTopY = []

      // this.themeTopY.push(0)
      // this.themeTopY.push(this.$refs.params.$el.offsetTop - 44)
      // this.themeTopY.push(this.$refs.comment.$el.offsetTop - 44)
      // this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 44)

      // console.log(this.themeTopY);
    },
    methods: {
      ...mapActions(['addCart']),  //数组形式
      // 对象形式，指定别名 
      // ...mapActions({
      //   add: 'addCart'
      // }),

      // 详情图片加载完之后刷新
      imageLoad() {
        this.$refs.scroll.refresh()

        this.$nextTick(() => {
          this.themeTopY = []
          this.themeTopY.push(0)
          this.themeTopY.push(this.$refs.params.$el.offsetTop - 44)
          this.themeTopY.push(this.$refs.comment.$el.offsetTop - 44)
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 44)
          this.themeTopY.push(Number.MAX_VALUE)

          console.log(this.themeTopY);
        })
      },
      titleClick(index) {
        // console.log(index);
        this.$refs.scroll.scrollTo1(0, -this.themeTopY[index], 100)
      },
      contentScroll(position) {
        // 3. 判断BackTop是否显示
        // this.isShowBackTop = -(position.y) > 1000
        this.listenShowBackTop(position)

        // 1. 获取y值
        const positionY = -position.y

        // 2. position.y和主题中的值进行比较
        // [0, 2898, 4319, 4505]
        // position.y 在 0 和 2898 之间，index = 0
        // position.y 在 =2898 和 4319 之间，index = 1
        // position.y 在 =4319 和 4505 之间，index = 2
        // position.y 在 = 4505 和 非常大的值之间（Number.MAX_VALUE），index = 3

        // position.y >= 4505，index = 3

        // 二：hack方法 判断较少，更优
        let length = this.themeTopY.length
        for (let i = 0; i < length - 1; i++) {
          if(this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])) {
            this.currentIndex = i
            // console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex

          } 
        }

        // 一：普通方法，
        /* let length =  this.themeTopY.length
        for (let i = 0; i < length; i++) {
          // 这样取不到3
          // if(positionY > this.th emeTopY[i] && positionY < this.themeTopY[i+1]) {
          //   console.log(i);
          // }

          // 所以要再分两种情况
          if ((this.currentIndex !== i) && ((i < length - 1 && positionY > this.themeTopY[i] && positionY < this.themeTopY[i+1]) || 
              (i === length - 1 && positionY > this.themeTopY[i]))) {
            this.currentIndex = i;
            // console.log(this.currentIndex);         
            this.$refs.nav.currentIndex = this.currentIndex
          }
        } */

        // 方法一，使用ES6的for。问题；i是String类型。所以不用这个
        /* for(let i in this.themeTopY) {
          // console.log(i);  // 此处的i 是string类型 ‘2’ + 1 = 21 
          console.log(i+1);  // 01 11 21 31
          // 将 i 转为Number类型的方法，i*1   parseInt(i)
          // if(positionY > this.themeTopY[i] && positionY < this.themeTopY[i + 1]) {
          //   console.log(i);
          // }
        } */ 

      },
      // backClick() {
      //   this.$refs.scroll.scrollTo1(0, 0, 500)
      // },
      addToCart() {
        // 1. 获取购物车需要展示的信息：图片、标题、描述、价格、数量
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        // 2. 将商品添加到购物车中
        // this.$store.state.push(product)   //这种方法不可以，修改store中的state的唯一途径是mutations
        // this.$store.commit('addCart', product)

        // 通过actions
        // this.$store.dispatch('addCart', product).then(res => {
        //   console.log(res);
        // })   

        // 使用mapActions
        this.addCart(product).then(res => {
          // this.show = true;
          // this.message = res;
          // setTimeout(() => {
          //   this.show = false
          // }, 1000);

          this.$toast.show(res, 2000)

        })

      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>