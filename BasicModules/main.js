// const {code,getItemsOfCurrentPage,porcha}= require('./mylib/getItemsOfCurrentPage.js')
import {getItemsOfCurrentPage,porcha,code}from'./mylib/getItemsOfCurrentPage.js'
import{BookMark}from'./mylib/bookMarkManagement.js'
console.log(getItemsOfCurrentPage([5,10,15,20,25,30,35,40,45,50],1,5))
console.log(porcha('por'))
console.log(code)
const myBook=new BookMark('1-27-89-23',199)
console.log(myBook)