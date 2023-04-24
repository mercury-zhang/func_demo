var _a;
var symbol1 = Symbol('666');
var symbol2 = Symbol('777');
var obj1 = (_a = {},
    _a[symbol1] = '小满',
    _a[symbol2] = '二蛋',
    _a.age = 19,
    _a.sex = '女',
    _a);
for (var key in obj1) {
    console.log(key);
}
Object.keys(obj1);
console.log(Object.keys(obj1));
console.log(Object.getOwnPropertyNames(obj1));
console.log(JSON.stringify(obj1));
