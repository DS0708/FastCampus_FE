const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2)
console.log(str)  //3.14
console.log(typeof str)   //string

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float) // number number

// Math MDN

console.log('abs: ', Math.abs(-12))

console.log('min: ', Math.min(2, 8))

console.log('max: ', Math.max(2, 8, 10))

console.log('ceil: ', Math.ceil(3.14))  // 올림

console.log('floor: ', Math.floor(3.14)) // 내림

console.log('round: ', Math.round(3.14))  // 반올림

console.log('random: ', Math.random())

console.log('0~9 random number: ',Math.floor(Math.random() * 10))