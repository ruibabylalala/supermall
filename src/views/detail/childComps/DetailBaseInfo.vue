<template>
<!--  先判断是否拿到数据，如果不判断，vue在拿到数据前就渲染了DOM，就会报错 -->
<!-- TypeError: Cannot read properties of undefined (reading '0')” -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span v-if="goods.services">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
/* 自己写的 */
/*   .base-info {
    margin: 10px
  }

  .info-title, .info-price, .info-other{
    padding-bottom: 10px;
  }

  .n-price {
    color: var(--color-high-text);
    font-size: 20px;
  }

  .o-price {
    color: #bbb;
    text-decoration: line-through;
    margin: 0 5px;
    font-size: 12px;
  }

  .discount {
    background-color: pink;
    border-radius: 6px;
    color: white; 
    vertical-align: top;
  }

  .info-other {
    color: #bbb;
    font-size: 12px;
    border-bottom: 1px solid #eee;
  }

  .info-service {
    height: 40px;
    line-height: 40px;
    display: flex;
    border-bottom: 1px solid #eee;

  }

  .info-service-item {
    flex: 1;
    font-size: 14px;
  }

  .info-service-item img {
    width: 14px;
    vertical-align: middle;
  }
 */

  /* 老师的 */
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #222;
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;

    /* 让元素上浮一些，使用相对定位即可 */
    position: relative;
    top: -8px
  }

  .info-other {
    margin-top: 15px;
    line-height: 30px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service img {
    width: 14px;
    position: relative;
    top: 2px;
  }

  .info-service span {
    font-size: 13px;
    color: #333;
  }

</style>