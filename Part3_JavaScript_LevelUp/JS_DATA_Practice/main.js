import _ from 'lodash'
import {hello as hi} from './printHi'

hi()

// lodash : .uniqBy(), .unionBy() -> 여러 데이터들의 고유화 처리
const userA = [
  {userId:'1', name: 'HEROPY'},
  {userId:'2', name: 'Neo'}
]

const userB = [
  {userId:'1', name: 'HEROPY'},
  {userId:'3', name: 'Amy'}
]

const userC = userA.concat(userB)

console.log(userC)

console.log(_.uniqBy(userC,'userId'))

const userD = _.unionBy(userA,userB, 'userId')
console.log('unionBy: ',userD)


// .find , .findIndex, .remove
const foundUser  = _.find(userD,{name:'Amy'})
const foundUserIndex = _.findIndex(userD,{name:'Amy'})
console.log('foundUser: ',foundUser)
console.log('foundUserIndex: ',foundUserIndex)

_.remove(userD, {name:'Amy'})
console.log(userD)



//JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법
import myData123 from './myData.json'

console.log("myData : ", myData123)
console.log(typeof myData123)

const str = JSON.stringify(myData123)
console.log('str : ', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj : ', obj)
console.log(typeof obj)

//JSON은 String 형태의 데이터이고 JSON.parse()를 통해 자바스크립트의 Object로 변환하여 사용할 수 있다.
//또한 자바스크립트의 Oject는 JSON.stringify()를 통해 JSON통신에 사용되는 String으로 변환될 수 있음.


// Storage
// Local Storage : 도메인에 대하여 영구적인 Storage
// Session Stroage : 브라우저 창을 닫으면 없어지는 Storage
localStorage.setItem('user',JSON.stringify(userD)) //저장할때는 JSON의 형태로써 Object를 String으로 변환하여 저장해야함
console.log(JSON.parse(localStorage.getItem('user'))) // 반대로 불러올때는 String -> Object 변환이 필요

//수정하기
const temp_str = localStorage.getItem('user')
const temp_obj = JSON.parse(temp_str)

temp_obj[0].name = 'DS'

console.log(temp_obj)

localStorage.setItem('user',JSON.stringify(temp_obj))

//삭제하기 
// localStorage.removeItem('user')

// Lodash를 이용한 라이브러리 LowDB를 통해 이러한 Storage를 손쉽게 제어할 수 있다.


//omdb
import {fetchMovies} from './omdb'

fetchMovies()

