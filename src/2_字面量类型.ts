let a: 'nan' | 'nv'; //联合类型不限量

a = 'nan'

// a='abc' a值只能为上面两个值之一


// any 表示任意类型，对该变量关闭ts类型检测
// any可以赋值为任何类型的变量不报错，还嚯嚯别人

let e = ''

// unknown 表示未知类型的值
// 不可以赋值给别人，类型不同会报错 是一个安全的any
let b: unknown = '123456'
if (typeof b === 'string') {
  // 如果类型为string则赋值
  e = b
}

// 类型断言
e = b as 'string'
e = <string>b




function fn(): void {
  return
}




//用的少
let obj: object = {}



let obj_2: {
  name: string
  age?: number//age可选属性
}
// obj_2 = {} 必须要name属性
obj_2 = {
  name: '刘浩存'
}



let obj_3: {
  name: string
  [propName: string]: any //任意属性名，任意类型
}
obj_3 = {
  name: 'lhc',
  age: 123
}


// fnd 接收两个参数，返回类型如下
let fnd: (a: number, b: string) => string
fnd = function (a, b): string {
  return a + b
}
console.log(fnd(1, '1'));


// 表示字符串数组
let arr: string[]
let arr_2: Array<string>
// arr = ['a',6]



// 元组，固定长度的数组
let h: [string, string]
h = ['123', '23456']


// enum 枚举

enum genDer {
  nan = 0,
  nv = 1
}

let i: { name: string, gender: genDer }
i = {
  name: '刘浩存',
  gender: genDer.nan
}



// 类型的别名
type Mytype = 1 | 2 | 3

let j: Mytype
j = 3









export { a };