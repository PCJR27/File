const { template } = require('@babel/core')
//64130500049 ปอชา มี้เจริญ
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
//   let result=[]
//   let count = Math.ceil(allItems.lenght/rowsPerPage)
//   if(allItems===null&&allItems===undefined){
//     return undefined
//   }
//    else if(rowsPerPage<=0){
//     return allItems
//   }
//   else if(currentPage<=0){
//     return allItems
//   }
//    else if(allItems.lenght===0){
//     return []
//   }else {
//   let one=allItems.slice(0,-rowsPerPage+1)
//   result[0]=one

//   let two=allItems.slice(0,rowsPerPage+1)
//   result[1]=two
// }
// return result[currentPage]
// if(allItems===null || allItems=== undefined){
//   return undefined
// }
// if(allItems.lenght===0){
//   return []
// }
// if(rowsPerPage <=0){
//   return allItems
// }
// if(currentPage <=0){
//   return allItems
// }

// return allItems.slice((rowsPerPage*currentPage)-rowsPerPage,rowsPerPage*currentPage)

if(allItems===null || allItems===undefined){
  return undefined
}
if(allItems.length===0){
  return []
}
if(rowsPerPage<=0){
  return allItems
}
if(currentPage<=0){
  return allItems
}
return allItems.slice((rowsPerPage*currentPage)-rowsPerPage,rowsPerPage*currentPage)
}
console.log(getItemsOfCurrentPage([1,2,3,4,5],2,2))
module.exports = getItemsOfCurrentPage





