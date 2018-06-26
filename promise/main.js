// promise必知必会（十道题）
// 作者：nswbmw
// 来源：知乎

question1 = () => {
    const promise = new Promise((resolve, reject) => {
        console.log(1)
        // console.log(resolve())
        console.log(2)
    })

    promise.then(() => {
        console.log(3)
    })
    console.log(4)
}

// 结果 1 2 *4 3*
// 结论：js中函数同步执行，promise.then中函数异步执行

question2 = () => {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, (1000));
    })

    const promise2 = promise1.then(() => {
        throw new Error('error!!!')
    })

    console.log('promise1: ', promise1)
    console.log('promise2: ', promise2)

    setTimeout(() => {
        console.log('promise1: ', promise1)
        console.log('promise2: ', promise2)
    }, 2000);
}

// 结果
// promise1: Promise { pending }
// promise2: Promise { pending }

// (node:940) UnhandledPromiseRejectionWarning: Error: error!!!

// promise1: Promise { resolved }
// promise2: Promise { rejected }

question3 = () => {
    const promise = new Promise((resolve, reject) => {
        resolve('success1');
        reject('err1');
        resolve('success2');
        reject('err2');
    })

    promise
        .then(res => {
            console.log('then: ', res)
        })
        .then(res => {
            console.log('then: ', res)
        })
        .catch(err => {
            console.log('catch: ', err)
        })
        .catch(err => {
            console.log('catch: ', err)
        })

}

// 结果
// then:  success1
// then:  undefined
// 结论
// 可以通过resolve传参，并且promise只读取第一个resolve值

question4 = () => {
    Promise.resolve(1)
        .then(res => {
            console.log(res)
            return 2
        })
        .catch(err => {
            return 3
        })
        .then(res => {
            console.log(res)
        })
}

// 结果
// 1
// 2
// 结论
// 每次调用.then/.catch都会返回一个新的promise，从而实现链式调用（传参）

question5 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('once')
            resolve('success')
        }, 1000);
    })

    const start = Date.now()

    promise
        .then(res => {
            console.log(res, Date.now() - start)
        })

    promise
        .then(res => {
            console.log(res, Date.now() - start)
        })
}

// 结果
// once
// success 1006
// success 1008
// 结论
// Promise只构造一次
// 其中的值可调用多次

question6 = () => {
    Promise.resolve()
        .then(res => {
            return new Error('error')
        })
        .then(res => {
            console.log('then: ', res)
        })
        .catch(err => {
            console.log('err', err)
        })
}

// 结果
// then:
// Error: error
// 结论
// 在then或者catch过程中产生的error并不会抛出错误
// 需要改写成 
// throw new Error('erroe')
// return Promise.reject(new Error('error'))
// 原文
// return new Error('error')

question7 = () => {
    const promise = Promise.resolve()
        .then(() => {
            return promise
        })

    promise.catch(console.error)
}

// 结果
// TypeError: Chaining cycle detected for promise #<Promise>
// 结论
// 返回值不能为本身，否则换陷入死循环

question8 = () => {
    Promise.resolve(1)
        .then(2)
        .then(Promise.resolve(3))
        .then(console.log)
}

// 结果
// 1
// 结论
// .then/.catch期望传入为函数，非函数会发生值穿透

question9 = () => {
    Promise.resolve()
        .then(function success(res) {
            throw new Error('error')
        }, function fail1(e) {
            console.log('fail1: ', e)
        })
        .catch(function fail2(e) {
            console.log('fail2: ', e)
        })
}

// 结果
// fail2:
// Error:error
// 结论
// .then可以接受两个参数（成功-res,失败-err）
// .catch是第二个参数的简便写法

// 注意：用.then捕获错误无法知道前一个参数的错误而.catch可以

question10 = () =>{
    process.nextTick( ()=>{
        console.log('next tick')
    })

    Promise.resolve()
    .then(() =>{
        console.log('then')
    })

    setImmediate(()=>{
        console.log('setImmediate')
    })

    console.log('end')
}

// 结果
// end
// next tick
// then
// setImmediate
// 结论
// microtack:process,promise.then
// macrotack:setImmediate
// check阶段执行macroctask
// 循环阶段执行microtask

// 总结
// 十道题全部结束了，其中核心的可能为
// 1.数据传输
// 2.错误抛出
// 3.执行顺序