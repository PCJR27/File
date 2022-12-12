//4-10-65
//Json Structor
//Json ชื่อPropertyต้องใส่ " " เท่านั้น
//ไม่อนุญาตให้propertyมีvalueเป็นfunction
//JSON.stringify
//เช็ค empty object
1
// function isEmptyObject(obj){
//     return JSON.stringify(obj)==='{}'
//     // return Object.keys(obj).length=== 0
// }
// const o={id:24,name:"por"}
// const e ={}

// console.log(Object.keys(o))
// console.log(Object.values(o))
// console.log(isEmptyObject(o))
// console.log(Object.keys(e))
// console.log(Object.values(e))
// console.log(isEmptyObject(e))

const student=[{
 id:645000123,
 profile:{
    fullname:{
        firstname:'Suda',
        lastname:'Deejai'
     }
 },
 getFullname(){
    return `${this.fullname.firstname}, ${this.fullname.lastname}`
 }
},
{
    id:555,
    profile:{
       fullname:{
           firstname:'Somchai',
           lastname:'Deeja'
        }
    },
    getFullname(){
       return `${this.fullname.firstname}, ${this.fullname.lastname}`
    }
   }
]
const address ={
houseNo:126,
province:'Bangkok'
}

// const {province}=address
// const {province:myProvince}=address//วิธีการเปลี่ยนชื่อเมื่อเรียกมา
// const {province,houseNo}=address

// console.log(province)
// console.log(myProvince)
// // console.log(province,houseNo)
// //spread operator (...)แยก copy dataทั้งโครงสร้าง
// //merge two object properties
// const studentProfile = {...student, ...address}
// console.log(studentProfile)
// console.log(studentProfile[1].houseNo)
// //replace id
// const newStudent={...student, id:1}
// // console.log(newStudent.getFullname())
// // //rest operator (...)ยุบ
// // //destructuringร่วมกับrest
// // console.log('---------------')
// // const {id,...studentDetail}=student
// // console.log(id)
// // console.log(studentDetail)
// //Nested Destructuring
// // const {profile:{fullname:{firstname,lastname}}}=student
// // const [{profile:{fullname:{firstname,lastname}}}]=student //destruturing object in array
// const [,{profile:{fullname:{firstname,lastname}}}]=student //destructuring object in array หาตัวที่2
// console.log(firstname)
// console.log(lastname)

//--------------------------------------------------
//arrow function
// const addition = function (n1,n2){ 
// return n1+n2
// }
// //arrow function
// const afAddition =(n1,n2) => n1+n2
// console.log(afAddition(10,20))

// const addition2=function(n1,n2){
// let sum =n1+n2
// return sum
// }

// //arrow function
// const afAddition2=(n1,n2)=>{
//     let sum =n1+n2
//     return sum
// }

// const getMessage=function(msg){
// return msg
// }
// //const af2getMessage=(msg)=>{return msg}
// //arrow function
// const afgetMassage=msg=> msg
// console.log(afgetMassage('Hello'))

//  let arr = [1];
//  console.log(arr.every((elem, index, arr) => {
//   //  arr[index+1]--;
//    console.log(`[${arr}][${index}] -> ${elem}`);
//    return elem < 2;
//  }))
// const survey = [
//   { name: "Steve", answer: "Yes"},
//   { name: "Jessica", answer: "Yes"},
//   { name: "Peter", answer: "Yes"},
//   { name: "Elaine", answer: "No"}
// ];

// let result = survey.every(isSameAnswer);

// function isSameAnswer(el, index, arr) {
//   if (index === 0) {
//     return true;
//   } else {
//     return (el.answer === arr[index - 1].answer);
//   }
// }
//  console.log(result)
//  const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
//  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));

// function counter() {
//   let count = 0
//   function increment() {
//     return count++
//   }
//   function decrement() {
//     return count--
//   }
//   function getCount() {
//     return count
//   }
//   return {
//     increment,
//     decrement,
//     getCount
//   }
// }
// const c = counter()
// c.increment()
// console.log(c.getCount())
// c.increment()
// console.log(c.getCount())
// c.decrement()
// console.log(c.getCount())

// //arguments object
// function printNumbers1(num1, num2, num3) {
//   console.log(`argument length: ${arguments.length}`)
//   console.log(arguments[0]) //5
//   console.log(arguments[1]) //10
//   console.log(arguments[2]) //15
// }
// printNumbers1(5, 10, 15)
// function printNumbers2(num1, num2, num3) {
//   for (const argu of arguments) {
//     console.log(argu)
//   }
// }
// printNumbers2(5, 10, 15)

// function updateArgument(x, y) {
//   console.log(x) //10
//   arguments[0] = 555
//   console.log(x) //555
// }
// updateArgument(10, 5)

// //function parameters
// //default parameter
// function who(name = 'unknown') {
//   return name
// }
// console.log(who()) //unknown
// console.log(who('Umaporn'))


// //rest parameters
// function sum(opsName, ...theNumbers) {
//   // console.log(opsName) //'sum'
//   let total = 0
//   for (const num of theNumbers) {
//     console.log(num)
//     total += num
//   }
//   return total
// }

// console.log(sum('sum', 1, 2, 3))
// console.log(sum('sum', 1, 2, 3, 4, 5))

// //spread parameters
// function sum(num1, num2, num3) {
//   return num1 + num2 + num3
// }
// let nums = [5, 20, 15]
// //spread parameter
// console.log(sum(...nums)) //40
// let l =' '
// console.log(l.length)
// const c='a'+2
// console.log(c)