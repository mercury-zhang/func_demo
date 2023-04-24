const symbol1 = Symbol('666')
const symbol2 = Symbol('777')
const obj1 = {
    [symbol1] : '小满',
    [symbol2] : '二蛋',
    age : 19,
    sex : '女'
}

for(const key in obj1) {
    console.log(key)
}

Object.keys(obj1)
// console.log(Object.keys(obj1))
// console.log(Object.getOwnPropertyNames(obj1))
// console.log(JSON.stringify(obj1))
console.log(Object.getOwnPropertySymbols(obj1))
console.log(Reflect.ownKeys(obj1))