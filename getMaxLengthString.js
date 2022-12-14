const { template } = require('@babel/core')
//   function getMaxLengthString(arrayOfString){
//     if(arrayOfString === null || arrayOfString===undefined){
//       return undefined
//     }
//     let result =[]
//     for(const max of arrayOfString){
//       if(result.length===0){
//         result=[max]
//       }else if (result[0].length<=max.length){
//         if(result[0].length === max.length){
//           result.push(max)
//         }else
//           result =[max]  
//     }
//   }

//   return result
// }
// function getMaxLengthString(arrayOfString){
//   let answer=[]
//   if(arrayOfString===null||arrayOfString===undefined){
//     return undefined
//   }
//   for(let long of arrayOfString){
//     if(answer.length===0){
//       answer=[long]
//     }else if(answer[0].length<=long.length){
//       if(answer[0].length===long.length){
//         answer.push(long)
//       }
//       else{
//         answer=[long]
//       }
//     }
//   }
//   return answer
// }
// function getMaxLengthString(arrayOfString){
//   let result=[]
//   if(arrayOfString ===null||arrayOfString===undefined){
//     return undefined
//   }
  
//   for(let arr of arrayOfString){
//     if(result.length===0){
//       result=[arr]
//     }
//     else if(result[0].length<=arr.length){
//      if(result[0].length===arr.length){
//       result.push(arr)
//      }
//      else result=[arr]
//     }

//   }
//  return result
// }
function getMaxLengthString(arrayOfString){
  if(arrayOfString===null || arrayOfString===undefined){
    return undefined
  }

  let result =[]
  for (num of arrayOfString){
    if(result.length===0){
      result=[num]
    }
    else if(result[0].length<=num.length){
      if(result[0].length===num.length){
        result.push(num)
      }
else result=[num]
    }
  }
  return result
}

module.exports = getMaxLengthString
