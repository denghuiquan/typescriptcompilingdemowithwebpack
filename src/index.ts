const title: string = 'The Frontend Development'

const foo = (msg: string = 'Hello World! Welcome To TypeScript~') => {
    console.log(msg)
}

const p = new Promise((resolve, reject) => {
    try {
        console.log('A promise is working')
        resolve('Promise fulfill status')
    } catch (error: any) {
        reject(new Error(error.messge))
    }
})

foo(title)