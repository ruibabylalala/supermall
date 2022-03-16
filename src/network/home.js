//  1. 导入request 
import { request } from "./request"

export function getMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
// 假如有多个不同的url


// 函数调用 -> 压入函数栈（保存函数调用过程中所有的变量）
// 函数调用结束 -> 弹出函数栈（释放函数所有的变量）
// 所以函数里的所有东西在函数执行完之后都会被内存回收
// function  test() {
//    const names = ['hhh', 'xixixi']
// }

// test()

// 如何直接把一个数组放进另一个数组里
// const totalNums = []
// const nums1 = [12, 10, 22]
// const nums2 = [55, 44, 33]
// 方法一
// for(let n of nums1) {
//   totalNums.push(n)
// }
// 方法二 ES6新增语法
// ...语法，将数组里所有的元素依次解析，依次塞到totalNums里去
// 其实是利用了push函数。push函数可以传一个可变的参数
// totalNums.push(...nums1)
