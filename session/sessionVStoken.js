// koa-seesion学习笔记
// URL：https://segmentfault.com/a/1190000013039187

// http协议是无状态的，为了保存用户信息，需要通过“某些东西”来保存。


// session会话
//    * 指代N个有关联的http请求所构成的1个会话。
//    * 通过特征属性，贯穿会话全过程。

// session实现-cookie

//         cookie
// 服务端 <--------> 客户端

//    * cookie存储session信息。




/* ****************
*  session VS token
*  ****************/

// seesion全流程：
//    * 用户登录，服务端生成一个session和id标识。
//    * id在服务器/客户端通过cookie传输。
//    * 通过cookie中的id验证状态，无id则为未登录。
//    * session具有过期时间，也可以手动删除。


// token全流程
//    * 用户登录，服务端生成一个token返回给客户端。
//    * 客户端后续请求携带一个token。
//    * 服务端解析token，响应请求。
//    * token会过期，客户端可手动删除。

// 区别
//    1. session 在服务端储存信息。
//    1. token   在客户端储存信息。
//    2. session 通过cookie来交互。
//    2. token   多种方式，可以是cookie/header/body。
//    3. token   生成方式多样化，可由第三方服务提供。