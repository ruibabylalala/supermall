import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
  addCart(context, payload) {
    // payload:新添加的商品

    // 1. 查找之前数组中是否有该商品，通过iid
    // 方法一：使用for of
    /* let oldProduct = null
    for(let item of state.cartList) {
      if(item.iid === payload.iid) {
        oldProduct = item  
      }
    }  */

    return new Promise((resolve, reject) => {
      // 方法二：使用数组的find()方法,对比iid.
      // 普通函数写法
      // let oldProduct = state.cartList.find(function (item) {
      //   return item.iid === product.iid
      // })
      // 箭头函数写法
      // 1. 查找之前数组中是否有该商品，通过iid
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // 2. 判断oldProduct
      if (oldProduct) {  // 数量加1
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量+1')
      } else {   //添加新的商品
        payload.count = 1
        // context.state.cartList.push(payload) 
        context.commit(ADD_TO_CART, payload)
        resolve('添加了一个新的商品')
      }
    })
  }
}

