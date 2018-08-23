// https://www.jianshu.com/p/287e0bb867ae
const a = '常量'
let b ='局部变量'

// 模版字符串
let c =  `模版字符串

          haha`
console.log(`${c}`)
console.log(c.includes('h'))
console.log(c.repeat(2))
console.log(c.startsWith('a'))
console.log(c.endsWith('a'))
// 函数
  let d = [1,2,3]
  let e = [1,2,3]
d = d.map(x => x+1)
console.log('d',d)
d = d.map((x = 0) => {
  console.log(x)
 return x+1})
console.log('d',d)
e = e.map((function (x){
  return x+1
}).bind(this))
console.log('e',e)
// 拓展对象
function people(name,age) {
  return{
    name,
    age
  }
}
// 相当于return{
//     name:name,
//     age:age
//   }
const people2 = {
  name: 'xxx',
  getName() {
    console.log(this.name)
  }
}
// 相当于const people = {
//     name: 'lux',
//     getName: function() {
//       console.log(this.name)
//     }
//   }

// Object.assign() 可以把任意多个源对象自身可枚举的属性拷贝给目标对象，然后返回目标对象。第一参数即为目标对象。
// so，如果objC也是你的一个源对象的话。请在objC前面填在一个目标对象{}
const objA = { name: 'cc', age: 18 }
const objB = { address: 'beijing' }
const objC = {} // 这个为目标对象
console.log('result1:',Object.assign({}, objC, objA, objB))
Object.assign(objC, objA, objB)
console.log('result2:',objC)

// 解构
const people3 = {
  name: 'lux',
  age: 20
}
const { name} = people3
console.log(`${name}`)
//数组
const color = ['red', 'blue']
const [first, second] = color
console.log(first) //'red'
console.log(second) //'blue'

// 展开运算符...，如果有重复的属性名，右边覆盖左边
const number = [1,2,3,4,5]
const [first1, ...rest] = number
console.log(rest) //2,3,4,5
const first2 = {
  a: 1,
  b: 2,
  c: 6,
}
const second2 = {
  c: 3,
  d: 4
}
const total = { ...first2, ...second2 }
console.log(total) // { a: 1, b: 2, c: 3, d: 4 }

// import导入模块、export导出模块
// 导入的时候有没有大括号的区别是什么
// 1.当用export default people导出时，就用 import people 导入（不带大括号）
//
// 2.一个文件里，有且只能有一个export default。但可以有多个export。
//
// 3.当用export name 时，就用import { name }导入（记得带上大括号）
//
// 4.当一个文件里，既有一个export default people, 又有多个export name 或者 export age时，导入就用 import people, { name, age }
//
// 5.当一个文件里出现n多个 export 导出很多模块，导入时除了一个一个导入，也可以用import * as example


// 生成器和迭代器,不能用箭头函数来创建生成器,可以将它们添加到对象中,可以用es6简写
function *createIterator1(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
}
let iterator = createIterator1([1, 2, 3]);
console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
// 之后的所有调用
console.log(iterator.next()); // "{ value: undefined, done: true }"

// promise
// function.then(other function).catch(error function)
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for( var i=0 ; i<10000 ; i++ ) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);
