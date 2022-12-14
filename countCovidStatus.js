const { template } = require('@babel/core')

//64130500049 ปอชา มี้เจริญ
// function countCovidStatus(covidStatusArray) {
// //   let answer = {negativeandlowrisk:"",negativeandhighrisk:"",positive:""}
// //   let answers =[]
// //   let nl ='negative and low risk'
// //   let nh ='negative and high risk'
// //   let p ='positive'
// //   let answer2
// //   if(covidStatusArray === null ||  covidStatusArray === undefined){
// //   return undefined
// //  }
// //  if(covidStatusArray.lenght ===0){
// //   return {}
// //  } 
// //  for(i=0;i<covidStatusArray.lenght;i++)
// //   if(nl.includes(covidStatusArray[i]<0)){
// //   answer2 =nl.count(covidStatusArray);
// //   answer.negativeandlowrisk=answer2

// //   }else if(nh.includes(covidStatusArray[i]<0)){
// //     answer2 =nh.count(covidStatusArray);
// //     answer.negativeandhighrisk=answer2
// //   }else if(p.includes(covidStatusArray[i]<0)){
// //     answer2 =p.count(covidStatusArray);
// //     answer.positive=answer2
// //   } 
// //----------------------------------------------//
// // if(covidStatusArray === null || covidStatusArray === undefined){
// //   return undefined
// // }
// // if(covidStatusArray.lenght===0){
// //   return {}
// // }
// // let negLow=0; let negHigh=0;let pos =0;
// // for(const status of covidStatusArray){
// //   switch(status){
// //       case 'negative and low risk':
// //           negLow++
// //       break
// //       case 'negative and high risk':
// //           negHigh++
// //           break
// //       case 'positive':
// //           pos++
// //           break
// //   }
// // }
// // const covidStatus={}
// // if(pos>0){
// //   covidStatus.positive =pos
// // }
// // if(negHigh>0){
// //   covidStatus['negative and high risk'] =negHigh
// // }
// // if(negLow>0){
// //   covidStatus['negative and low risk']=negLow
// // }
// // return covidStatus
// // if(covidStatusArray === null || covidStatusArray===undefined){
// //   return undefined
// // }
// // if(covidStatusArray.lenght===0){
// //   return {}
// // }
// // let low =0;let high =0;let posi =0
// // for(count of covidStatusArray){
// //   switch(count){
// //       case 'negative and low risk':
// //           low++
// //           break
// //       case 'negative and high risk':
// //           high++
// //           break
// //       case 'positive':
// //           posi++
// //           break
// //   }
// // }
// // let countStatus={}
// // if(low>0){
// //   countStatus['negative and low risk']=low
// // }
// // if(high>0){
// //   countStatus['negative and high risk']=high
// // }
// // if(posi>0){
// //   countStatus.positive=posi
// // }
// // return countStatus
// let low =0
// let high=0
// let posit=0
// if(covidStatusArray===null || covidStatusArray===undefined){
//   return undefined
// }
// if(covidStatusArray.length===0){
//   return {}
// }
// for(count of covidStatusArray ){
//   switch(count){
//     case 'negative and low risk':
//     low++
//     break
//     case 'positive' :
//       posit++
//       break
//       case 'negative and high risk':
//         high++
//   }
// }
// let countStatus={}
// if(low>0){
//   countStatus['negative and low risk'] =low
// }
// if(posit>0){
//   countStatus.positive=posit
// }
// if(high>0){
//   countStatus['negative and high risk']=high
// }
// return countStatus
// console.log(countCovidStatus('negative and low risk',
// 'positive',
// 'negative and low risk',
// 'negative and high risk',
// 'positive',
// 'negative and low risk'))

// }
//64130500049
// function countCovidStatus(covidStatusArray){
//   let status ={}
//   if(covidStatusArray ===null || covidStatusArray===undefined){
//     return undefined
//   }
//   if(covidStatusArray.lenght===0){
//     return {}
//   }
//   let low=0
//   let high=0
//   let posi =0
//   for(count of covidStatusArray){
//     switch(count){
//       case 'negative and low risk': low++
//       break
//       case 'negative and high risk':high++
//       break
//       case 'positive' : posi++
//     }
//   }
//   if(low>0){
//     status['negative and low risk']=low
//   }
//   if(high>0){
//     status['negative and high risk']=high
//   }
//   if(posi>0){
//     status.positive=posi
//   }
// return status
// }
//64130500049 ปอชา 
// function countCovidStatus(covidStatusArray) {
//   let result = {}
//   let low = 0
//   let high = 0
//   let posi = 0
//   if (covidStatusArray === null || covidStatusArray === undefined) {
//     return undefined
//   }
//   if (covidStatusArray.lenght === 0) {
//     return {}
//   }
//   for (let count of covidStatusArray) {

//     switch (count) {
//       case 'negative and low risk':
//         low++
//         break
//       case 'negative and high risk':
//         high++
//         break
//       case 'positive':
//         posi++
//     }

//   }
//   if(low>0){
//     result['negative and low risk']=low
//   }
//   if(high>0){
//     result['negative and high risk']=high
//   }
//   if(posi>0){
//     result.positive=posi
//   }
//   return result

// }

//64130500049 ปอชา มี้เจริญ
function countCovidStatus(covidStatusArray){
let result ={}
let low =0
let posi=0
let high=0
  if(covidStatusArray ===null || covidStatusArray===undefined){
    return undefined
  }
  if(covidStatusArray.lenght===0){
    return {}
  }
for (count of covidStatusArray){
  switch(count){
    case 'negative and low risk':low++
    break
    case 'negative and high risk' : high++
    break
    case 'positive' : posi++
  }

}
if(low>0){
  result['negative and low risk']=low
}
if(high>0){
  result['negative and high risk']=high
}
if(posi>0){
  result.positive=posi
}
return result

}
module.exports = countCovidStatus

