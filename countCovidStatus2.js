const { template } = require('@babel/core')
//64130500049 ปอชา มี้เจริญ
function countCovidStatus(covidStatusArray){
// if(covidStatusArray === null || covidStatusArray===undefined){
//     return undefined
// }
// if(covidStatusArray.lenght===0){
//     return {}
// }
// let low =0;let high =0;let posi =0
// for(count of covidStatusArray){
//     switch(count){
//         case 'negative and low risk':
//             low++
//             break
//         case 'negative and high risk':
//             high++
//             break
//         case 'positive':
//             posi++
//             break
//     }
// }
// let countStatus={}
// if(low>0){
//     countStatus['negative and low risk']=low
// }
// if(high>0){
//     countStatus['negative and high risk']=high
// }
// if(posi>0){
//     countStatus.positive=posi
// }
// return countStatus
let low =0
let high=0
let posit=0
if(covidStatusArray===null || covidStatusArray===undefined){
  return undefined
}
if(covidStatusArray.length===0){
  return {}
}
for(count of covidStatusArray ){
  switch(count){
    case 'negative and low risk':
    low++
    break
    case 'positive' :
      posit++
      break
      case 'negative and high risk':
        high++
  }
}
let countStatus={}
if(low>0){
  countStatus['negative and low risk'] =low
}
if(posit>0){
  countStatus.positive=posit
}
if(high>0){
  countStatus['negative and high risk']=high
}
return countStatus
}
    console.log(
        countCovidStatus([
          'negative and low risk',
          'positive',
          'negative and low risk',
          'negative and high risk',
          'positive',
          'negative and low risk'  ])
      )
      console.log(countCovidStatus(['positive', 'negative and low risk', 'positive']))
      console.log(
        countCovidStatus([
          'negative and low risk',
          'positive',
          'negative and low risk',
          'abnormal',
          'negative and high risk',
          'positive',
          ' normal'  ])
      )
      console.log(countCovidStatus(['covid']))
      console.log(countCovidStatus([]))
      console.log(countCovidStatus(null))
      console.log(countCovidStatus(undefined))

      module.exports = countCovidStatus    