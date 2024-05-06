console.log(global)
console.log("hello world")
const path = require("path")
const {add, sub, multiply, divide} = require('./math')
const math2 = require('./math2')

const  {add3, sub3, multiply3, divide3} = require('./atithmetic')

console.log(add(2, 3))
console.log(sub(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))


console.log(math2.add2(9, 8))

// const os = require('os')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)
// console.log(path.parse(__filename))
