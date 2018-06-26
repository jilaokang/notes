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