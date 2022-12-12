//mean
//เป็นmethod ที่จะทดสอบว่าองค์ประกอบทั้งหมดในarrayผ่านการทดสอบที่ดำเนินการโดยฟังก์ชันที่ให้มาหรือไม่

///return value
//Boolean:True:ถ้าทุกelement ในarrayเป็นไปตามเงื่อนไข
//        False: ถ้าอย่างน้อยหนึ่งelementในarrayไม่เป็นไปตามเงื่อนไข

//Parameter
//รับcallback Functionซึ่งภายในcallbackFnรับ
    //element
    //index (optional)
    //array (optional)
//และรับThis Arg (optional) อาจเกิดในกรณีที่ต้องreturn Fnที่ใช้ 
//ที่จะถูกส่งผ่าน เพื่อใช้ในขณะที่เรียกใช้ฟังก์ชัน callback หากบริบทถูกส่งผ่านจะถูกใช้เป็น this สำหรับการเรียกใช้ฟังก์ชันcallback ของแต่ละครั้ง 

//Syntax
//Arrow funntion
  // every((element) => { /* … */ } )
  // every((element, index) => { /* … */ } )
  // every((element, index, array) => { /* … */ } )

// Callback function
  // every(callbackFn)
  // every(callbackFn, thisArg)

// Inline callback function
  // every(function(element) { /* … */ })
  // every(function(element, index) { /* … */ })
  // every(function(element, index, array){ /* … */ })
  // every(function(element, index, array) { /* … */ }, thisArg)

//Ex1
  const isBelowThreshold = (currentValue) => currentValue < 40;
  const array1 = [1, 30, 39, 29, 10, 13];
  console.log(`1. callback Function`)
  let call=array1.every(isBelowThreshold)
  console.log(call)
  console.log(array1)
console.log('------------------------')
//Ex2
const survey = [
     { name: "Steve", answer: "Yes"},
     { name: "Jessica", answer: "Yes"},
     { name: "Peter", answer: "Yes"},
     { name: "Elaine", answer: "No"}
  ];
  console.log(`2. inline callback function`)
  let result = survey.every(function (el, index, arr) {
    if (index === 0) {
      return true;
    } else {
      console.log(`[${el}],[${index}],[${arr}]`)
     
      return (el.answer === arr[index - 1].answer);
    }
  });
  
   console.log(result)
   console.log('-----------------------------------------------------')


//Ex3
console.log(`3. arrow Function`)
let arr = [1, 2, 3, 4];
 let arrow=arr.every((elem, index, arr) => {
    arr[index];
   console.log(`[${arr}][${index}] -> ${elem}`);
   return elem < 2;
 })
 console.log(arrow)
 console.log('-----------------------------------------------------')


 const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
 console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));
console.log('-----------------------------------------------------')

//arrow function
console.log([1, ,3].every((x) => {x !== undefined}))
// console.log([2, , 2].every((x) => x === 2))
console.log('-----------------------------------------------------')


console.log([
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}
  ].every((el, index, arr) => {
    console.log(`${el},${index},${arr}`)
    if (index === 0) {
      return true;
    } else {
      return (el.answer === arr[index - 1].answer);
    }
  }))


  console.log('-----------------------------------------------------')
  function thisArg(arr,sDatatype){
    console.log(`[${arr}],[${sDatatype}]`)
    return arr.every((element)=>{
        console.log(`[${element}]`)
        return typeof(element)===sDatatype
    },sDatatype)
  }
  console.log(arr)
console.log(thisArg(["Geek","for","Geeks"],"string"))
console.log(thisArg(["Geeks",4,"Geeks"],"string"))
console.log(thisArg([5,4,6],'number'))
console.log(thisArg([true,false],'boolean'))
console.log(thisArg([null],"object"))
console.log(thisArg([],"undefined"))

//-----------///
const func =(callback,msg)=>{
  callback(msg)
}
function print(arg){
  console.log(arg)
}
func(print,'Hello')
// const ages = [ 56, 47, 64, 35, 39, 60 ]
// const combinedAges = ages.reduce((accumulator, currentValue) => accumulator + currentValue)
// const averageAge = combinedAges / ages.length

// console.log(averageAge)
