// https://www.cnblogs.com/lmsblogs/p/5876384.html

// 查找something在字符串中的位置
str.findIndex('somthing')

var str = "rcinn.cn";
//使用一个参数
str.slice(3) //从第4个字符开始,截取到最后个字符;返回"nn.cn"
str.substring(3) //从第4个字符开始,截取到最后个字符;返回"nn.cn"

//使用两个参数
str.slice(1, 5) //从第2个字符开始，到第5个字符；返回"cinn"
str.substring(1, 5) //从第2个字符开始，到第5个字符；返回"cinn"

//如果只用一个参数并且为0的话，那么返回整个参数
str.slice(0) //返回整个字符串(str.substring(0)); //返回整个字符串

//返回第一个字符

str.slice(0, 1) //返回"r"
str.substring(0, 1) //返回"r"

//在上面的例子中我们可以看出slice()和substring()的用法是相同的
//返回的值也是一样的，但当参数为负数时，他们的返回值却不一样，看下面的例子
str.slice(2, -5) //返回"i"
str.substring(2, -5) //返回"rc"
//从上面两个例子可以看出slice(2,-5)实际上是slice(2,3)
//负5加上字符串长度8转换成正3(若第一位数字等于或大于第二位数字,则返回空字符串);
//而substring(2,-5)实际上是substring(2,0),负数转换为0,substring总是把较小的数作为起始位置。

str.substring(1, 5) //从第2个字符开始，到第5个字符；返回"cinn"
str.substr(1, 5) //从第2个字符开始，截取5个字符；返回"cinn."
