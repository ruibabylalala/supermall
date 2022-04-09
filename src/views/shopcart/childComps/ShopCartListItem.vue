<template>
  <div class="cart-item">
    <div class="item-selector">
      <check-button @click.native='checkClick' :is-checked='product.checked'></check-button>
    </div>
    <div class="item-image">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">¥{{product.price}}</div>
        <div class="item-count">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";

  export default {
    name: 'ShopCartListItem',
    components: {
      CheckButton
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        } 
      }
    },
    methods: {
      checkClick() {
        this.product.checked = !this.product.checked
      }
    }
  }
</script>

<style scoped>
  .cart-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    /* position: relative; */
    /* 要设置hidden文字才有省略号 */
    overflow: hidden;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-image {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-image img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }



  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .info-bottom .item-price {
    color: orangered;
  }

</style>