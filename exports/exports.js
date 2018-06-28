function require(...) {
    ((module, exports) => {
        exports = some_func;

        module.exports = some_func
    })(module, module.exports)
    return module
}

exports.a = ...;
module.exports.a = ...;

const a = require()
// 结论：exports是module.exports的引用，export是个局部变量，module是个全局变量
//      引用知识点，见js引用
//      exports => {} <=module.exports

//      如果一个新的值被赋值给 exports，它就不再绑定到 module.exports