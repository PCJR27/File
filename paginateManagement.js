const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'
const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

//your student id, firstname, and lastname here
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    // let page =getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
    // let parent=document.getElementById('products')
    // page.forEach((item)=>{
    //   let newLi=document.createElement('li')
    //   newLi.textContent=`ID:${item.id}, NAME:${item.name}`
    //   parent.appendChild(newLi)
    // })

let cur=getItemsOfCurrentPage(products,currentPageNumber,rowsPerPage)
let parent=document.getElementById('products')
for(let c of cur){
  let newLi=document.createElement('li')
  newLi.textContent=`ID:${c.id}, NAME:${c.name}`
  parent.appendChild(newLi)
}

  }

  const pageHandler = (event) => {
    // clean button click styles
let b= document.querySelectorAll('button')
b.forEach((item)=>{
  item.style='border: 1px solid #999'
})

    //clean previous page's items
let parent=document.getElementById('products')
parent.textContent=''

    //calculating current page
    let now=event?.target.id ??1
    showItemsOfCurrentPage(now)


    //add button click style to a current page
  let p =document.getElementById(now)
  p.style='background-color: LightSteelBlue'

  }

  //generate page numbers and add click event on each of page number
  const showPageNumbers = () => {
  let total=getTotalPages(products,rowsPerPage)
  for(let i=1;i<=total;i++){
    let parent = document.getElementsByClassName('pagination')[0]
    let newBtn=document.createElement('button')
    newBtn.setAttribute('id',i)
    newBtn.textContent=i
    parent.appendChild(newBtn)
    newBtn.addEventListener('click',pageHandler)
  }

  }

  return {
    showPageNumbers,
    pageHandler,
    showItemsOfCurrentPage
  }
}
module.exports = paginateManagement
let c='por'
console.log(c)
// export { paginateManagement }
// const { showPageNumbers,  pageHandler,showItemsOfCurrentPage } =
//   paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()
// showItemsOfCurrentPage(1)
// let cur=getItemsOfCurrentPage([1,2,3],1,1)
// console.log(cur)

