let a = (num) => num+1//箭头函数适用于map\reduce\filter等
console.log(a(2))//逻辑不清晰不适合箭头函数，若多层函数嵌套，影响函数的作用范围识别度
//箭头函数中this指向外层作用域的this，因此没有arguments，不能用call()、apply()、bind（）改变this指向
const json = {
  bar: 1,
  fn: () => console.log(this.bar)
}
json.fn()//undefined,this指向的是全局作用域
function Foo() {
  this.bar = 1
}
Foo.prototype.fn = () => console.log(this.bar)
const foo = new Foo()
foo.fn()//undefined,this根据变量查找规则，回溯到全局作用域

const Message = (text) => {
  this.text = text
}
// var hello = new Message('helloworld')
// console.log(hello.text)//error:Message is not a constructor,箭头函数不能当构造函数

const body = document.getElementById('body')
body.addEventListener('click',() => {
  this.textContent = 'Loading'
})//箭头函数不适合事件绑定函数，指向window



