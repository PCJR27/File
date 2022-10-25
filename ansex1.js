class Person{
    constructor(firstname='N/A',lastname='N/A',dateOfBirth=new Date(Date.now())){
        this.firstname=firstname
        this.lastname=lastname
        this.dateOfBirth=dateOfBirth

    }
getFullName(){
    return `${this.lastname},${this.firstname}`
}
getAge(){
    let diff_ms= Date.now()-this.dateOfBirth.getTime()
    let diff_date=new Date(diff_ms)
    return diff_date.getUTCFullYear()-1970
}
}
// console.log(typeof Person)
// console.log(Date.now())
let p1 = new Person()
let p2 = new Person('Por','Cha',new Date(1975,0,10))
// console.log(p1)
// console.log(p2)
// console.log(p1.getFullName())
// console.log(p2.getFullName())
// console.log(p1.getAge())
// console.log(p2.getAge())
//แบบที่1 add functionภายหลัง
// function isEqual(anotherPerson){
// return this.firstname.toLowerCase()===anotherPerson.firstname.toLowerCase() && this.lastname.toLowerCase()===anotherPerson.lastname.toLowerCase()
// }
// Person.prototype.isEqual=compare
//แบบที่สองaddเลยเป็นanonymous class
Person.prototype.isEqual=function(anotherPerson){
    return this.firstname.toLowerCase()===anotherPerson.firstname.toLowerCase() && 
    this.lastname.toLowerCase()===anotherPerson.lastname.toLowerCase()

}
Person.prototype.toString=function(){
    return `Fullname: ${this.getFullName()}, Age:${this.getAge()}`
}
console.log(Person.prototype)
console.log(p1.isEqual(p2))
console.log(p1.toString())
console.log(p2.toString())
console.log(p1.getFullName())