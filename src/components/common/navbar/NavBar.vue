<template>
  <div class="nav-bar">   <!-- 因为多个地方都有导航，id会重复，所以此处用class -->
    <!-- slot外要加一个div，来对div进行布局，直接对slot布局会出错。用具名插槽 -->
    <div class="left"><slot name="left"></slot></div>  
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
  

<style>
  .nav-bar {
    display: flex;
    height: 44px;   /* 此处如果不设置height就会发生高度塌陷 */
    line-height: 44px;  /* navbar导航栏高度一般是44px */
    text-align: center;
  }

  .left, .right {
    width: 60px;
    /* background-color: red; */
  }

  .center {
    flex: 1;    /* 默认占据剩余的宽度 */
    /* background-color: blue; */
  }
</style>