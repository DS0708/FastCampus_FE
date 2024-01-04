// JS 데이터

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}


//  String

// indexOf
const result = 'Hello world!'.indexOf('world')
console.log(result)
// String.prototype.indexOf()

const str = '01 23'
console.log(str.length)
console.log(str.indexOf('hi') !== -1)
console.log(str.slice(1,4))
console.log(str.replace('01 ','hi'))

const email = 'jonum123@naver.com'
console.log(email.match(/.+(?=@)/)) //정규표현식
console.log(email.match(/.+(?=@)/)[0])

const str_tream = '   hello    '
console.log(str_tream)
console.log(str_tream.trim())