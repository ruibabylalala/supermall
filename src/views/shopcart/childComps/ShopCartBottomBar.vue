<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
      <check-button class="check-button" 
                    :is-checked='isSelectAll'
                    @click.native='checkClick'></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">合计：¥{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去计算({{checkLength}})</div>
  </div>
</template>
<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import {mapGetters} from 'vuex'
  export default {
    name: 'ShopCartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count
        },0)
      },
      isSelectAll() {
        if(this.cartList.length === 0) return false
        // 1. 使用filter
        // return !(this.cartList.filter(item => !item.checked).length)
        // 2. 使用find
        // return !this.cartList.find(item => !item.checked)
        // 3. 普通遍历
        for(let item of this.cartList) {
          if(!item.checked) {
            return false
          }
        }
        return true
      }
    },
    methods: {
      checkClick() {
        // 此处计算数学不是一个函数，所以若想调用计算属性，直接使用就可，不需要在后面加（）
        if(this.isSelectAll) {  //全部选中
          this.cartList.forEach(item => item.checked = false)
        }else {          // 部分或全部不选中
          this.cartList.forEach(item => item.checked = true)
        }
      },
      // $toast的应用
      calcClick() {
        if(!this.checkLength) {
          this.$toast.show('请选择购买的商品', 2000)
        }else{
          this.$toast.show('计算中...')
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
    display: flex;
    line-height: 40px;
  }
  
  .check-content {
    width: 70px;
    height: 40px;
    line-height: 40px;
    margin-left: 20px;
    /* position: relative; */
  }

  .check-button {
    display: inline-block;
    /* 这里设置行高：20px，check-button才会垂直居中，不太懂 */
    line-height: 20px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .total-price {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .calculate {
    width: 110px;
    background-color: red;
    color: white;
    text-align: center;
  }



  
</style>