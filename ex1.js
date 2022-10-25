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
        // let datent =this.dateOfBirth.getTime()-new Date(dob).getTime()
        // let age =new Date(datent)
        // return Math.abs(age.getUTCFullYear()-1970)
        let one= new Date(Date.now()).getTime()-new Date(this.dateOfBirth).getTime()
        let two = new Date(one)
        let year = two.getUTCFullYear()
        let age = Math.abs(year-1970)
        return age
     }
     isEqual(anotherPerson){
    return (this.firstname===anotherPerson.firstname&&this.lastname===anotherPerson.lastname)
     }
     toString(){
        return `FullName:${this.firstname} ${this.lastname} Age: ${this.getAge()}`
     }
    
 }
 console.log(new Person('Porcha','Mee').getFullName())
 console.log(new Person('Chameee','Porch','2003-02-07').getAge())
 let testCompare=new Person('por','cha','2003-02-07')
 let testCompare2=new Person('por','cha','2002-02-07')
 let testCompare3=new Person('cha','mee','2003-02-07')
 let testCompare4=new Person('por','cha','2002-02-07')
 console.log(testCompare.isEqual(testCompare2))
 console.log(testCompare3.isEqual(testCompare4))
 console.log(testCompare)
//  testString=new Person('Chapor','Charoen','2005-07-02').getFullName()
//  testString2=new Person('Meecha','roen','2005-02-08').getAge()
//  console.log(testString.toString())
//  console.log(testString2.toString())
 console.log(new Person('Porcha','Meecharoen','2003-07-02').toString())
// console.log(new Date(Date.now()).getTime()-new Date(2002-02-07).getTime())
// console.log(new Date())