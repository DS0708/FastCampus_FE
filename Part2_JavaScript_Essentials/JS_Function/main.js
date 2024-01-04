// 함수 복습

function sum(x,y){
  console.log(x + y)
  console.log(arguments[0] + arguments[1])
}

sum(1,3)

//화살표 함수
// () => {} vs  function () {}

const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = x => x * 2 // (x) => x*2
console.log('doubleArrow', doubleArrow(7))

const getObject = x => ({
  name : 'ds'
})

console.log(getObject().name)


// 즉시 실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7;  //즉시 실행함수는 ';' 를 붙어야 한다.

(function () {
  console.log(a*2)
})();

(function () {
  console.log(a*3)
}());

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const ha = 7

hdouble()

function hdouble(){
  console.log(ha*9)
}

// 타이머 함수
// setTimeout (함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

const timer = setTimeout(function () {
  console.log('hello ds!')
}, 3000);

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

// 콜백(Callback)
// 함수의 인수로 사용되는 함수
// Done를 나중에 출력하고 싶을떄

function timeout(my_callback) {
  setTimeout(() => {
    console.log("Callback!")
    my_callback()
  },3000)
}

timeout(() => {
  console.log('Done!')
})


