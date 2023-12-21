const person1 = {
  name : "ds",
  getName : function () {
    return this.name;
  }
}

const person2 = {
  name : "sh",
  gn : person1.getName
}

const person3 = {
  name : "SDS",
  gn : person1.getName()
}

console.log(person1.getName());
console.log(person2.gn());
console.log(person3.gn);