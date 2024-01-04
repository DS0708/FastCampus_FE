// 얕은 복사 (Shallow copy), 깊은 복사(Deep copy)
const user = {
  name: 'Heropy',
  age : 85,
  emails : ['thesecon@gmail.com']
}
const CopyUser = user
console.log(CopyUser === user)  //true

user.age = 22
console.log('user: ', user)
console.log('CopyUser: ', CopyUser)
console.log(user === CopyUser)   // true

const shallowCopyUser1 = Object.assign({},user)
const shallowCopyUser2 = {...user}
console.log('shallowCopyUser1: ', shallowCopyUser1)
console.log(user === shallowCopyUser1)  //false
console.log(user === shallowCopyUser2)  //false

// emails
console.log(user.emails === shallowCopyUser1.emails)  //true
console.log(user.emails === shallowCopyUser2.emails)  //true

user.emails.push('jonum123@naver.com')
console.log(shallowCopyUser1.emails)  //[ 'thesecon@gmail.com', 'jonum123@naver.com' ]
console.log(shallowCopyUser2.emails)  //[ 'thesecon@gmail.com', 'jonum123@naver.com' ]
// emails는 동일한 메모리 주소를 가리키므로 완전한 깊은 복사는 아님


// 깊은 복사 하는법 : lodash
const _ = require('lodash')

const deepCopyUser = _.cloneDeep(user)

user.emails.push('aa')

console.log(user.emails)  //[ 'thesecon@gmail.com', 'jonum123@naver.com', 'aa' ]
console.log(deepCopyUser.emails)  //[ 'thesecon@gmail.com', 'jonum123@naver.com' ]


// 결론은 참조 데이터에 또 다른 참조 데이터가 존재하면 깊은 복사를 해야하고
// 그렇지 않으면 얕은 복사를 Object.arrange 나 {...user}와 같은 방식으로 해도 무방하다.
