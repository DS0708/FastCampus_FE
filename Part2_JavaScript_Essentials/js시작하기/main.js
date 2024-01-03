import getType from './getType'
import getRandom from './getRandom'

//데이터 타입 확인

console.log(typeof "Hello DS");
console.log(typeof 123);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {})
console.log(typeof [])


console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))

// 산술 연산자 (arithmetic poerator)

console.log(10 / 2)
console.log(7 / 5)
console.log(7 % 5)

// 할당 연산자 (assignment operator)
const a = 2
let b = a+3

console.log(a)
console.log(b)

//비교 연산자 (comparison operator)

const c = 1
const d = 1
console.log(c === d)
console.log(c == d)

function isEqual(x,y){
  return x===y
}

console.log(isEqual(1,1))
console.log(isEqual(2,'2'))

console.log(2 == '2')

// 논리 연산자 (logical operator)
const la = 1 ===1
const lb = 'AB' === 'AB'

console.log('&&: ', la && lb)

// 삼항 연산자 (ternary operator)

const ta = 1 < 2

if (a) {
  console.log('참')
}else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')

// 조건문 : if

const ia = getRandom()

if (ia === 1) {
  console.log('a is 1')
}else {
  console.log('rest ...')
}

// 조건문 : Switch

switch (ia) {
  case 0:
    console.log('switch : a is 0')
    break
  case 1:
    console.log('switch : a is 1')
    break
  case 2:
    console.log('switch : a is 2')
    break
  default :
    console.log('switch : rest...', ia)
}

// 반복문 (For statement)

const ulEl = document.querySelector('ul')

for (let i = 0 ; i< 10; i+=1){
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ( (i+1) % 2 === 0){
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

// 변수 유효범위 (Variable Scope)
// var, let, const

function scope() {
  if (true) {
    const scope_a = 123
    var scope_b = 234
    console.log(scope_a)
  }
  console.log(scope_b)
  // console.log(scope_aa)  //Error
}

// let, const는 block level 범위
// var 는 Function level 범위 -> 그래서 위험함

scope()


//형 변환 (Type conversion)
const tca = 1
const tcb = '1'

console.log(tca == tcb)
console.log(tca === tcb)

// Truthy ( 참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14 ...

// Falsy( 거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN( 1 + undefined )

if (''){
}else {
  console.log('false!!!')
}


