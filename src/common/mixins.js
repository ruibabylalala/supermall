import BackTop from 'components/content/backTop/BackTop'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      // console.log('返回顶部');
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      this.$refs.scroll.scrollTo1(0, 0, 500)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -(position.y) > 1000
    }
  }
}