function fuca(n){
  console.log(n)
}
function erra(){
  console.log('error')
}
function fucb(n){
  console.log('resolve',n)
}
function fucc(n){
  console.log('next resolve',n)
}
function fucd(n){
  console.log('reject',n)
}
var a = new Promise(fuca, erra)
a.then(fucb(1)).then(fucc(2)).catch(fucd(3))
console.log('------------------------')
function compare(resolve,reject){
  if(9>10){
    resolve('big')
  }else{
    reject('small')
  }
}
var b = new Promise(compare)
  b.then(function(result){
  console.log('end:',result)
}).catch(function(result){
  console.log('errorend:',result)
})
console.log('+++++++++++++++++++++++')
var p1 = new Promise(function(resolve, reject){
  setTimeout(resolve, 500,'P1')
})
var p2 = new Promise(function(resolve,reject){
  setTimeout(resolve,600,'P2')
})
p1.then(function(results){
  console.log('abc',results)
})
Promise.all([p1,p2]).then(function(results){
  console.log('result:',results)
})
Promise.race([p1,p2]).then(function(results){
  console.log('result**:',results)
})
