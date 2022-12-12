// let a=null
// a??1234
// console.log(a)

// let status =true
// let obj={name:'cha',last:'cha'}
// for(const {key,value} in obj){
//     console.log(key,value)
// }
// let num = 0
// while(num < 10){
//   console.log(num)
//   num++
// }

    //scope
// block scope
// {
//   let x = 2
//   const y = 2
//   var z = 2
// }
// // console.log(x) //x is not defined because cannot be used outside block
// // console.log(y) //y is not defined because cannot be used outside block
// console.log(z) //can use z because var variable can be accessed from outside the block
// console.log('--------------------')

// //function scope
// // code here can NOT use all studentNames
// function myFunction() {
//   let studentName1 = 'Somchai'
//   const studentName2 = 'Somsak'
//   var studentName3 = 'Somsri'
//   console.log(studentName1)
//   console.log(studentName2)
//   console.log(studentName3)
// }
// myFunction()
// // code here can NOT use all studentNames
// // console.log(studentName1)
// // console.log(studentName2)
// // console.log(studentName3)
// console.log('--------------------')

// //global scope
// let num1 = 10
// const num2 = 20
// var num3 = 30

// function testGlobalScope() {
//   console.log(num1)
//   console.log(num2)
//   console.log(num3)
//   num1++
//   // num2++ //constant cannot change value
//   num3++
// }

// testGlobalScope()
// console.log(num1)
// console.log(num2)
// console.log(num3)

//mutable
    //immutable primitive values
// let str = 'hello'
// str.toUpperCase //return 'HELLO'
// console.log(str) // 'hello'
// //the original string has not changed
// console.log('-----------------------------')

// // mutable object
// let std = { firstname: 'Somchai', lastname: 'Rakdee' }
// std.lastname = 'Deejai'
// console.log(std) //{ firstname: 'Somchai', lastname: 'Deejai' }
// let scores = [10, 25, 30, 50]
// scores[0] = 5
// scores[scores.length - 1] = 100
// console.log(scores) //[ 5, 25, 30, 100 ]

    //declar
    
// introduce var, let, and const
// var x = 0
// var z,
//   y = 1

// let i = 5
// let sum,
//   avg = 0
// const DOLLAR_2_BAHT = 35.32

// console.log(x) //0
// console.log(y) //1
// console.log(z) //undefined
// console.log(i) //5
// console.log(sum) //undefined
// console.log(avg) //0
// console.log(DOLLAR_2_BAHT) //35.32

// Type Conversions
// implicit conversion
// const conv1 = 10 + ' rooms'
// const conv2 = '4' * 5
// const conv3 = 'a' - 2
// const conv4 = !'Hello'
// console.log(conv1)
// console.log(conv2)
// console.log(conv3)
// console.log(conv4)
// console.log('---------------')
// //explicit conversion
// // to Number type
// console.log(Number('3'))
// console.log(Number('-3'))
// console.log(Number('1.5'))
// console.log(Number(''))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(undefined))
// console.log(Number(null))
// console.log('---------------')
// //to String type
// console.log(String(true))
// console.log(String(false))
// console.log(String(-5))
// console.log(String(1))
// console.log(String(0))
// console.log(String(undefined))
// console.log(String(null))
// console.log('---------------')
// //to Boolean type
// console.log(Boolean('abc'))
// console.log(Boolean(''))
// console.log(Boolean(0))
// console.log(Boolean(1))
// console.log(Boolean([]))
// console.log(Boolean([1]))
// console.log(Boolean(['a']))
// console.log(Boolean(undefined))
// console.log(Boolean(null))


// conditional operation (?:)
// let age = 50
// const greeting = age > 40 ? 'Good Morning' : 'Hello'
// console.log(greeting)
// console.log('--------------')

// // optional chaining (?.)
// // array
// let index = 0
// let data
// const firstItem = data?.[0]
// console.log(firstItem)
// // object
// let student
// console.log(student?.firstName)
// console.log('--------------')

// // nullish coalescing
// let items = null
// items = items ?? []
// console.log(items)
// let options = { delay: '5ms' }
// let newTitle = 'Chapter 3 - Operations'
// // options.title = newTitle ?? 'untitled'
// options.title = options.title ?? 'untitled'
// console.log(options)
// console.log('--------------')

// // Math
// let randNum = Math.random() * 10 //returns between 0-9.xxxx
// console.log(randNum)
// let useNum = Math.floor(randNum) + 1 //random 1-10
// console.log(useNum)
// console.log('--------------')

// // String
// let str = `Hello, World!`
// console.log(`str.length: ${str.length}`)
// console.log(str.replace('l', '*'))

//control
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum1 = 0
// // for
// for (let i = 0; i < data.length; i++) {
//   sum1 += data[i]
// }
// console.log(`sum1=${sum1}`)
// console.log('--------------')

// // while
// let i = 0
// let sum2 = 0
// while (i < data.length) {
//   sum2 += data[i++]
// }
// console.log(`sum2=${sum2}`)
// console.log('--------------')

// //do..while
// let sum3 = 0
// do {
//   sum3 += data[i++]
// } while (i < data.length)
// console.log('--------------')

// // for each
// let sum4 = 0
// data.forEach((num) => (sum4 += num))
// console.log(`sum4=${sum4}`) //sum=45
// console.log('--------------')

// // reduce
// const sum5 = data.reduce((total, currentValue) => total + currentValue)
// console.log(`sum5=${sum5}`) //sum=45
// console.log('--------------')

// //for of
// let message = 'INT201'
// for (const ch of message) {
//   console.log(ch)
// }
// for (const item of data) console.log(item)
// console.log('--------------')

// // for in
// const productObj = { productId: 1, productName: 'pen', price: 55 }
// for (const prop in productObj) console.log(prop, ':', productObj[prop])
// console.log('--------------')

// //switch
// let sizeNumber = 3
// let sizeMeaning
// switch (sizeNumber) {
//   case 1:
//     sizeMeaning = 'small'
//   case 2:
//     sizeMeaning = 'medium'
//   case 3:
//     sizeMeaning = 'large'
// }
// console.log(sizeMeaning)
// console.log('--------------')

// //if...else
// sizeNumber = 2
// if (sizeNumber === 1) sizeMeaning = 'S'
// else if (sizeNumber === 2) sizeMeaning = 'M'
// else sizeMeaning = 'L'
// console.log(sizeMeaning)

//array Basic
// let nums = [15, 30, 42]
// console.log(nums)

// // array contains a different type of values
// let diffArr = [10, 'in progress', true]
// console.log(diffArr)

// // array contains a nested arrays
// let colors = [
//   ['yellow', 'red', 'orange'],
//   ['blue', 'green', 'purple']
// ]
// console.log(colors)

// // array contains a collection of objects
// let posts = [
//   {
//     id: 1,
//     title: 'Fail fast and Learn Fast',
//     body: 'Do not give up, just take some rest and go on',
//     user: {
//       id: 9,
//       displayName: 'Somchai'
//     },
//     tags: ['learn', 'mindset', 'EF']
//   },
//   {
//     id: 2,
//     title: 'Practices make you better',
//     body: 'Push yourself because Noone else to do it for you',
//     user: {
//       id: 12,
//       displayName: 'Somsak'
//     },
//     tags: ['practice', 'mindset']
//   }
// ]
// console.log(posts)

// // spread operator
// let founders = ['John', 'Mary', 'Susan']
// let webOwners = [...founders, 'Adam', 'Ann']
// console.log(webOwners)
// let friendGreeting = 'Hello'
// let greeting = [...friendGreeting]
// console.log(friendGreeting[0])
// console.log(greeting)

// //Array() constructor
// const items = new Array()
// console.log(items)
// console.log(items.length)

// const students = new Array(10) //10 is an initial length
// console.log(students)
// console.log(students.length)

// const scores = new Array(55, 65, 30)
// console.log(scores)
// console.log(scores.length)
// scores[3] = 100
// console.log(scores)

// // Array.of()
// const x = Array.of(10) //10 is the first element of x
// console.log(x)
// console.log(x.length)
// console.log(x[0])

// //Array.from()
// const y = Array.from(x)
// console.log(y)
// y[1] = 50
// console.log(y)
// delete y[1]
// console.log(y)
// console.log(y.length)


// array destructuring
// const [m] = [10, 20, 30, 40]
// console.log(m)

// const [, , n] = [8, 16, 24, 32]
// console.log(n)

// const [a, b] = [5, 10]
// console.log(a)
// console.log(b)

// const [x, y, ...z] = [5, 10, 15, 20, 25]
// console.log(z) // [15,20,25]



// Function Expression
const getRectangleArea = function (width, height) {
  return width * height
}
console.log(getRectangleArea(2, 3)) //6

//Named Function Expression
let fact = function factorial(n) {
  if (n <= 1) {
    return 1
  }
  return n * factorial(n - 1)
}
console.log(fact(5)) //120

// function with object type parameter
function myFunc(theObject) {
  theObject.model = 'A9999'
}
const product = { model: 'A1001', price: 199 }
console.log(product.model) // "A1001"
myFunc(product)
console.log(product.model) // "A9999"

// function with primitive type parameter
function square(side) {
  return side * side
}
let theSide = 2
console.log(square(theSide)) //4
console.log(theSide) //2