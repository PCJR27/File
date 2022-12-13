const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

//64130500049 Porcha Meechroen (ปอชา มี้เจริญ)
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items
  

  const showItemsOfCurrentPage = (currentPageNumber) => {
    // let result = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
    let parent =document.getElementById('products')
    let newLi =document.createElement('li')
    newLi.textContent=`ID:${products.id}, NAME:${products.name}`
    parent.appendChild(newLi)
   

  }
  const pageHandler = (event) => {
    // if(event.target.length===0){
    //   showItemsOfCurrentPage(1)
    // }
let now =event.target
setStyle(now)
showItemsOfCurrentPage(getItemsOfCurrentPage(products,currentPageNumber,rowsPerPage))
setStyle2(now)
  }
  const setStyle=(s)=>{
    s.style='border: 1px solid #999'
  }
  const setStyle2=(d)=>{
    d.style='background-color: LightSteelBlue'
  }
  const showPageNumbers = () => {
  let result = getTotalPages(products,rowsPerPage)

    for(let i=1;i<result.length;i++){
      let parent =document.getElementById('pagination')
      let newBtn=document.createElement('button')
      newBtn.setAttribute('id',i)
      parent.appendChild(newBtn)
      newBtn.addEventListener('click',pageHandler)
    }

    
    
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
module.exports = paginateManagement
// export { paginateManagement }
const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
showPageNumbers()
pageHandler()

