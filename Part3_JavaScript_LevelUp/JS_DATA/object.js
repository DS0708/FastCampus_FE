// static method -> {}.assign() 를 사용할 수 없다.
// .assign()
const target = {a:1, b:2}
const source = {b:4, c:3}

const returnedTarget = Object.assign(target, source)

console.log(target) //{ a: 1, b: 4, c: 3 }
console.log(returnedTarget) //{ a: 1, b: 4, c: 3 }

// 
let userAge = {
  name : 'Heropy',
  age : 85
}
const userEmail = {
  name: 'Heropy',
  email: 'thesecon@gmail.com'
}

const user_target = Object.assign(userAge, userEmail)
console.log(user_target)
console.log(userAge)
console.log(user_target === userAge)  //true

const a = { k:123 }
const b = { k:123 }
console.log(a === b)  //false
console.log(a == b) //false
// a와 b는 다른 메모리 주소를 가지고 있기 때문에 false

// 원본을 변형시키지 않고 assign시키고 싶을때
userAge = {
  name : 'Heropy',
  age : 85
}
const new_target = Object.assign({}, userAge, userEmail)
console.log(new_target)
console.log(userAge)
console.log(new_target === userAge) //false


// .keys()
console.log(Object.keys(userEmail)) //[ 'name', 'email' ]
console.log(userEmail['email']) //thesecon@gmail.com
// 활용 : keys를 통해 value 값 뽑아내기
const keys = Object.keys(userEmail)
const values = keys.map(key => userEmail[key])
console.log(values) //[ 'Heropy', 'thesecon@gmail.com' ]


// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
const user = {
  name :'Heropy',
  age: 85, 
  email: 'thesecon@gmail.com'
}
const {age, name: heropy, email='dd@naver.com', address = 'korea'} = user   //key값을 통해 꺼내온다음 ':'를 통해 이름을 바꿔줄 수 있다. const heropy = name이 불필요함
// E.g, user.address
console.log(heropy, age, email, address)  //Heropy 85 thesecon@gmail.com korea

//Array
const fruits = ['Apple', 'Banana', 'Cherry']
const [fa,fb,fc,fd] = fruits //배열은 [] 를 통해 순서대로 할당됨
console.log(fa,fb,fc,fd)  //Apple Banana Cherry undefined
// Banana만 추출하기
const [,banana] = fruits
console.log(banana)


// 전개 연산자 (Spread)
console.log(...fruits)  //Apple Banana Cherry

function toObject(a,b,c) {
  return {
    a:a,
    b:b,
    c:c
  }
}

console.log(toObject(...fruits)) // toObject(fruits[0],fruits[1],fruits[2]) 와 같음

//Rest Parameter
const array2 = [1,2,3,4]
function restParameter(a,b,...c){
  return{
    a : a,
    b : b,
    c : c
  }
}
console.log(restParameter(...array2)) //{ a: 1, b: 2, c: [ 3, 4 ] }

//그리고 속성의 이름과 변수의 이름이 같을때 생략가능
// function restParameter(a,b,...c){
//   return{
//     a , b, c
//   }
// }

// 화살표 함수도 가능
// const restParameter = (a,b,...c) => ({a,b,c})