<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <img slot="item-icon" src="../../assets/img/home.svg" alt="" /> -->
    <!-- <div slot="item-text">首页</div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
       type: String,
       default: 'blue'
    }
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      // 判断当前活跃的path里是否有这个item的path
      // /当前活跃的是/home -->item1(/home) = true
      // /当前活跃的是/home -->item2(/category) = false
      // /当前活跃的是/home -->item1(/shopcart) = false
      // /当前活跃的是/home -->item1(/profile) = false
      // 不等于-1 说明找到了
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // console.log('itemClick');
      // this.$router.replace(this.path).catch( err => {err})   cli2中
      this.$router.replace(this.path)   //cli4中
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/* .active {
  color: rgb(236, 65, 93);
} */
</style>