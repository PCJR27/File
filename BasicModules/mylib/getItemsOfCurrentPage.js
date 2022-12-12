// const { template } = require('@babel/core')
//64130500049
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage){
if(allItems===null||allItems===undefined){
  return undefined
}
 if(allItems.lenght===0){
  return []
}
 if(rowsPerPage<=0){
  return allItems
}
 if(currentPage<=0){
  return allItems
}

 let result=allItems.slice((rowsPerPage*currentPage)-rowsPerPage,rowsPerPage*currentPage)
 if(result.lenght===0){
  return []
 }
 else
 return result
}
function porcha(msg){
  return msg
}
 
const code=7246
// module.exports = {code,getItemsOfCurrentPage,porcha}
export{code,getItemsOfCurrentPage,porcha}
