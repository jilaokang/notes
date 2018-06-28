let a = {
    name: "kaso"
}
let b = a
console.log(a)
console.log(b)
// 结果： { name: 'kaso' }
//       { name: 'kaso' }
// 结论： a是一个对象，b是a的引用，a&b指向同一块内存。

b.name = "shuaibi"
console.log(a)
console.log(b)
// 结果：{ name: 'shuaibi' }
//      { name: 'shuaibi' }
// 结论：a&b指向同一块内存，对任一者修改，就是对该内存修改。

b = {
    name: "shuaibi two"
}
console.log(a)
console.log(b)
// 结果：{ name: 'shuaibi' }
//      { name: 'shuaibi two' }
// 结论：b被覆盖，指向一个新的内存，与a内存块脱离绑定。