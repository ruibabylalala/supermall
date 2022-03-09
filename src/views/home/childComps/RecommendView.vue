<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.acm" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
<style>
  .recommend {
    display: flex;
    text-align: center;  /* 居中 */
    font-size: 12px;   /* 文字大小写死了，不好，看看要怎么写 */
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1
  }
  .recommend-item img {
    width: 80%;
    margin-bottom: 10px;
  }
</style>