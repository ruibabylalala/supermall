//  1. 导入request 
import { request } from "./request"

export function getMultidata() {
  return request({
    url: '/home/multidata'
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