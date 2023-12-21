// const person1 = {
//   name : "ds",
//   getName : function () {
//     return this.name;
//   }
// }

// const person2 = {
//   name : "sh",
//   gn : person1.getName
// }

// const person3 = {
//   name : "SDS",
//   gn : person1.getName()
// }

// console.log(person1.getName());
// console.log(person2.gn());
// console.log(person3.gn);

const boxEL = document.querySelector('.box');

function printActiveContains (){
  console.log(boxEL.classList.contains('active'))
}

boxEL.addEventListener('click',function () {
  console.log('Click !!');
  boxEL.classList.add('active');
  printActiveContains();
  boxEL.classList.remove('active');
  printActiveContains();
})

const itemELs = document.querySelectorAll('.item');

itemELs.forEach(function(itemEl,index){
  itemEl.classList.add(`order-${index+1}`);
  console.log(index, itemEl.classList);
  itemEl.textContent = itemEl.className;
})
