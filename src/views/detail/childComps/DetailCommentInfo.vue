<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="head-title">用户评价</div>
      <div class="heat-more">更多</div>
    </div>

    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>

    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img v-for="(item, index) in commentInfo.images" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'

  export default {
    name: 'DetailCommentInfo',
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        // 1. 将时间戳转为Date对象
        const date = new Date(value * 1000)
        // 2. 将date进行格式化
        return formatDate(date, 'yyyy-MM-dd hh-mm-ss')
      }
    } 
    
  }
</script>

<style scoped>
  .comment-info {
    padding: 15px 10px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    padding-bottom: 15px;
  }

  .info-user {
    /* line-height: 50px; */
    padding: 10px 0;
    vertical-align: middle;
  }
  
  .info-user img {
    width: 40px;
  }

  .info-user span {
    position: relative;
    top: -15px;
    padding-left: 10px;
  }

  .info-detail  {
    font-size: 14px;
    color: #666;
  }

  .info-other {
    padding: 10px 0;
  }

  .info-other .date {
    padding-right: 5px;
  }

  .info-imgs img{
    width: 60px;
    padding-right: 5px;
  }
</style>