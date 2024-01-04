// 데이터 불변성(Immutability)
// 원시 데이터 : String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function
// ------------------------------------------------
// |1:  1  |2:  4   |3:  7   |4:
// ------------------------------------------------

let a = 1
let b = 4
console.log(a,b,a===b)
b = a
console.log(a,b, a===b)
a = 7
console.log(a,b, a=== b)
let c = 1
console.log(b,c,b===c)
// 1 4 false
// 1 1 true
// 7 1 false
// 1 1 true

//
// 원시 데이터는 메모리에 기존에 존재한다면 새롭게 할당되지 않는다. -> 자바스크립트 데이터의 데이터 불변성(Immutability)
// 결론은 원시 데이터는 생긴게 같으면 같은 데이터임
// 

// 핵심 포인트 : 참조형 데이터는 데이터가 같은 값이여도 같은 데이터가 아닐 수도 있다.
let x = {k:1}
let y = {k:1}
console.log(x,y,x===y)
x.k = 7
y = x
console.log(x,y,x===y)
x.k = 2
console.log(x,y,x===y)
let z = y
console.log(x,y,z,x===z)
x.k = 9
console.log(x,y,x===y)
// { k: 1 } { k: 1 } false
// { k: 7 } { k: 7 } true
// { k: 2 } { k: 2 } true
// { k: 2 } { k: 2 } { k: 2 } true
// { k: 9 } { k: 9 } true