<template>
  <nav-bar>
    <template v-slot:left>
      <div class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div v-for="(item, index) in titles" 
          :key="index"
          class="title-item"
          :class="{active: index === currentIndex}"
          @click="titleClick(index)">{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      backClick() {
        // back()相当于go(-1)
        this.$router.back()
      },  
      titleClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>

  .back img{
    vertical-align: middle;
  }
  .title {
    display: flex;
    font-size: 12px;
  }
  .title-item {
    flex: 1
  }
  .active {
    color: var(--color-high-text);
  }
</style>