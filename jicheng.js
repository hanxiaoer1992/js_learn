function Animal(name) {//父类
  this.name = name || 'Animal'
  this.sleep = function () {//由于是引用属性，当父元素引用属性更改时，子元素也会更改
    console.log(this.name + 'is sleep')
  }
}
Animal.prototype.eat = function (food) {
  console.log(this.name + 'eatting' + food)
}
function Another(name) {//父类
  this.othername = name || 'othername'
}

//原型链继承，通过prototype
function Cat(sex){//子类
  this.sex = sex || 'female'
}
Cat.prototype.error = function () { //为子类新增属性，在new Animal之前无效
  console.log('it will be ignore')
}
Cat.prototype = new Animal()//此处无法获取参数，因此实例无法向父元素传参
Animal.prototype.like = function (word) {//父类新增方法或属性，子类能够访问到
  console.log(this.name + ' like ' + word)
}

var cat = new Cat('male')//实例
console.log(cat.name)
console.log(cat.sex)
// console.log(cat.error())//为子类新增属性，在new Animal之前无效，报错
console.log(cat.like('fish'))//父类新增方法或属性，子类能够访问到
Cat.prototype = new Another()
var anothercat = new Cat()
// console.log(anothercat.sleep())//无法实现多继承,无sleep方法，报错，多继承：一个子类有多个父类


//构造继承
function Mouse(name) {
  Animal.call(this)
  Another.call(this)//可以实现多继承，多继承：多个父类
  this.name = name || 'mouse'
}
var mouse = new Mouse('Jerry')//实例不是父类的实例，是子类的实例
console.log(mouse.name)//创建实例时可以向父类传递参数
console.log(mouse.othername)//可以实现多继承
Animal.prototype.hate = function (word) {//父类新增方法或属性，子类不能够访问到
  console.log(this.name + ' hate ' + word)
}
// console.log(mouse.hate('cat'))//无法获取父类新增方法或属性，报错
Animal.prototype.sleep = function () {//更改父类方法，子类方法不变
  console.log(this.name + 'is sleeping')
}
console.log(mouse.sleep())//更改父类方法，子类方法不变，每个子类都有父类函数的副本，影响性能

//实例继承
function Dog(name) {
  var instance = new Animal()//不支持多继承，是父类的实例，不是子类的实例（通过instance of 类名判断）
  instance.name = name || 'dog'
  return instance
}
var dog = new Dog()
var otherdog = Dog()
console.log(dog.sleep())
console.log(otherdog.sleep())//创建子类可以不加new

//组合继承
function Fish(name) {
  Animal.call(this)//构造继承
}
Fish.prototype = new Fish()//原型链继承
//调用了两次父类构造函数，生成两份实例，消耗内存多
Fish.prototype.constructor = Fish
var fish = new Fish()
console.log(fish.sleep())

//寄生组合继承
function Lion(name){
  Animal.call(this)//构造继承
  this.name = name || 'name'
}
(function () {//创造一个没有实例方法的类
  var Super = function () {}
  Super.prototype = Animal.prototype//将实例作为子类的原型
  Cat.prototype = new Super()
})()
