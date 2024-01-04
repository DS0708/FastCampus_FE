// find
const array1 = [5, 12, 8, 130, 44]
const found = array1.find(element => element > 10) // 매개변수가 하나일때는 () 생략가능, return 값과 {} 도 생략가능
console.log(found)

// .length
const numbers = [1,2,3,4]
console.log(numbers.length)


// .concat()
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(numbers.concat(fruits)) //원본의 배열데이터는 수정되지 않는다.
console.log(numbers)
console.log(fruits)


// .forEach()
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array)
})


// .map()
const a = fruits.forEach(function(fruit, i){
  console.log(`${fruit}-${i}`)
})
console.log(a)  //undefined

const b = fruits.map(function (fruit, index){
  return {
    id : index,
    name : fruit
  }
})

const c = fruits.map((fruit, index) => ({
  id : index,
  name: fruit
}))

console.log(b)  //[ 'Apple-0', 'Banana-1', 'Cherry-2' ]
// foreach 와 map의 큰 차이

console.log(c)


// .filter()
const fa = numbers.map(number => number > 3)
console.log(fa) //[ false, false, false, true ]

const fb = numbers.filter(number => number > 3)
console.log(fb) //[ 4 ]

console.log(numbers)
console.log(fruits)   //map 과 filter는 array의 원형을 변형하지 않는다.


// .find() .findIndex()
const find_B = fruits.find(fruit => /^B/.test(fruit)) //정규표현식 test
console.log(find_B)

const findIndex_B = fruits.findIndex(fruit => /^B/.test(fruit)) //정규표현식 test
console.log(findIndex_B)


// .includes()
console.log(numbers.includes(5))
console.log(fruits.includes('Cherry'))


// 원본 수정됨 주의

// .push()  .unshift()
numbers.push(5)
console.log(numbers)  //[ 1, 2, 3, 4, 5 ]

numbers.unshift(0)
console.log(numbers)  //[ 0, 1, 2, 3, 4, 5 ]


// .reverse()
numbers.reverse()
console.log(numbers)  //[ 5, 4, 3, 2, 1, 0 ]


// .splice()
numbers.splice(2,1) //index번호 2번부터 item을 1개 지우기 (zero based)
console.log(numbers)  //[ 5, 4, 2, 1, 0 ]

numbers.splice(2,0,999) // 0개 지우고 그 자리에 999추가
console.log(numbers) //[ 5, 4, 999, 2, 1, 0 ]
