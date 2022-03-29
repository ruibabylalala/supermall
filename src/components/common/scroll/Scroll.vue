<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    components: {
      BScroll
    },
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      scrollTo1(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        // console.log('调用refresh');
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0 
      }
    },
    mounted() {
      // 使用document.querySelector这种方法来获取 .wrapper 不是特别好，因为.wrapper类找到的可能不是想要的那个.
      // 项目中可能多处使用了 .wrapper类，这样找到的很可能找错。Vue不建议直接操作DOM
      // this.scroll = new BScroll(document.querySelector('.wrapper'), { })

      // 1. 创建BBScroll对象
      // vue中，如果想明确的拿到某一个元素，可以通过给这个元素设置一个 ref属性。
      this.scroll = new BScroll(this.$refs.wrapper, {
        // observeDOM: true,
        // observeImage: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      })

      // 2. 监听滚动的位置
      // 可以增加一个判断
      if(this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          this.$emit('scrollPosition', position)
        })
      }

      // console.log(this.scroll);

      // 3. 监听滚动到底部
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          // console.log('上拉加载更多');
          this.$emit('pullingUpMore')   //把上拉加载更多这个事件传出去
        })
      }
    }
  }
</script>

<style scoped>

</style>