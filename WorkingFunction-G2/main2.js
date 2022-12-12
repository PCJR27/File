// 11/10/65
let value =24/3+5
console.log(value)


//anonymous function
const doSomething =function (x){
return x.charAt(0)
}
console.log(doSomething('Somchai'))
//arrow function
const doIt= x=>x.charAt(0)
console.log(doIt('Hello'))

function average(nums){
    function sum(){
        let total=0
        for(const num of nums){
            total=total+num
        }
        return total
    }
    return sum()/nums.length
}
console.log(average([1,2,3,4]))


//2.
function average2(nums){
    return sum2(nums)/nums.length
}
function sum2(nums){ 
    let total=0    
    for(const num of nums){
        total=total+num    
    }
    return total
}
console.log(average2([1,2,3,4,5]))
console.log(sum2([1,2,3,4,5]))

let mid = 20
let final = 5
let fname = 'Ada'
// sum function is defined in the global scope
function sum() {
return mid + final
}
console.log(`#1 sum: ${sum()}`) // Returns 25
mid = 10
console.log(`#2 sum: ${sum()}`) // Returns 15
function getScore() {
let mid = 10
let final = 30
//yourScore is nested function
function yourScore() {
return fname + ' scored ' + (mid + final)
}
return yourScore //เรียกได้ว่าเป็นclou
}
console.log(getScore())//ได้มาแต่Functionที่ยังไม่ได้execute
console.log(getScore()())//เหมือนเรียก yourScore()เพราะตอนนี้getScore return function yourScoreแต่ยังไม่สั่งexecute เลยใส่()เพื่อสั่งให้มันexecuteนั่นเอง
const scoreFn = getScore()
console.log(scoreFn())

let getScoringPass = function (scores) {
    //bind and store "scores" argument to use in the nested "cuttingPoint" function
    function cuttingPoint(cuttingScore) {
    return scores.filter((score) => score >= cuttingScore)
    }
    return cuttingPoint
    }
    console.log(getScoringPass([50, 15, 32, 80, 100]))
    //fn_cuttingPoint1 and fn_cuttingPoint2 are instance closure functions
    //that bind to each their outer parameter "scores"
    let fn_cuttingPoint1 = getScoringPass([50, 15, 32, 80, 100])
    console.log(fn_cuttingPoint1(50))

    function outer(x){
        let n=1    
        function inner1(y){
            n=n+5    
        return x+n+y    
    }
        function inner2(z){
            //x=10, n=?,z=30        
        return x+n+z    
        }
        return {inner1, inner2}
    }
    const o=outer(10)
    console.log(o.inner2(30))//41
    console.log(o.inner1(20))//36

//object destructuringconst 
const {inner1, inner2}=outer(10)
console.log(inner1(20))
console.log(inner2(30))
// const o=outer(10)// console.log(o.inner2(30))//41// console.log(o.inner1(20))//36

//
// function doT(w,x,y,z){
//     console.log(arguments[0])//w
//     console.log(arguments[1])//x
//     console.log(arguments[2])//y
//     console.log(arguments[3])//z
//     let sum=0
//     for(const a of arguments){
//         sum+=a
//     }
//     return sum
// }
// console.log(doT(10,20,50,60))

function sum(num1,num2,num3){
return num1+num2+num3
}
let nums =[5,20]
    //spread parameter    
    console.log(sum(...nums))
    function doT(w=undefined,x){
    return arguments
    }
    console.log(doT(2,3))
