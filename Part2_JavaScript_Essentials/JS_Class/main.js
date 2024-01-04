// Object
const heropy = {
  firstName: 'Heropy',
  lastName: 'Park',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(heropy)
console.log(heropy.getFullName())

// 기존 방식
function User(first, last){
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const ds = new User('DongSeong','Shin')

console.log(ds)
console.log(ds.getFullName())

// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의 !
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의 !

const sh = {
  name: 'soo',
  normal: function () { //normal () {  형식도 가능
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

sh.normal() //soo
sh.arrow()  //undefined

const amy = {
  name: 'Amy',
  normal: sh.normal,
  arrow: sh.arrow
}

amy.normal()
amy.arrow()

// 아까 User
User.prototype.normal = function () {
  console.log(this.firstName)
}

User.prototype.arrow = () => {
  console.log(this.firstName)
}

const dm = new User('DongMin')

dm.normal()
dm.arrow()

// function은 실행하는 주체가 this이고 arrow는 {} 안이 주체

const timer = {
  name: 'Heropy!!',
  timeout: function () {
    setTimeout(function() {
      console.log('function : ', this.name)
    }, 2000)
    
    setTimeout(()=>{
      console.log('arrow :', this.name)
    },3000)
  }
}

//timer.timeout()


// ES6 Classes

// function User(first, last){
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

class User_class{
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}


// 상속

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel =wheel
  }
}

const myVehicle = new Vehicle('운송수단',2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel){
    super(name,wheel)
  }
}
class Car extends Vehicle {
  constructor(name, wheel, license){
    super(name, wheel)
    this.license = license
  }
}

const myBicycle = new Bicycle('bicycle',2)
const myCar = new Car('car',4,true)

console.log(myBicycle)
console.log(myCar)
