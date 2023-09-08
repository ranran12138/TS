"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
var a; //联合类型不限量
exports.a = a = 'nan';
// a='abc' a值只能为上面两个值之一
// any 表示任意类型，对该变量关闭ts类型检测
// any可以赋值为任何类型的变量不报错，还嚯嚯别人
var e = '';
// unknown 表示未知类型的值
// 不可以赋值给别人，类型不同会报错 是一个安全的any
var b = '123456';
if (typeof b === 'string') {
    // 如果类型为string则赋值
    e = b;
}
// 类型断言
e = b;
e = b;
function fn() {
    return;
}
//用的少
var obj = {};
var obj_2;
// obj_2 = {} 必须要name属性
obj_2 = {
    name: '刘浩存'
};
var obj_3;
obj_3 = {
    name: 'lhc',
    age: 123
};
// fnd 接收两个参数，返回类型如下
var fnd;
fnd = function (a, b) {
    return a + b;
};
console.log(fnd(1, '1'));
// 表示字符串数组
var arr;
var arr_2;
// arr = ['a',6]
// 元组，固定长度的数组
var h;
h = ['123', '23456'];
// enum 枚举
var genDer;
(function (genDer) {
    genDer[genDer["nan"] = 0] = "nan";
    genDer[genDer["nv"] = 1] = "nv";
})(genDer || (genDer = {}));
var i;
i = {
    name: '刘浩存',
    gender: genDer.nan
};
var j;
j = 3;
