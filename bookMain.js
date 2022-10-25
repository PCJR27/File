const books = require('./bookList').bookList;
// let library = books
// let arrli =[]
// function findByTitle(title){
// if(library.title===this.title){
// return arrli.push(library.title)
// }
// return arrli
// }

//  const findByTitle=(arr,name)=>{
//      let books =[]
//      for(const book of arr){
//          if(name.includes(name)){
//              console.log(book.title)
//              books.push(book)
//          }
//      }
//      return books
//  }
//  console.log(findByTitle(books,"Flex"))

//1
// function findByTitle (arr,name)  {
//     let books = []
//     for (const book of arr) {
//         if(book.title.includes(name)){
//             books.push(book)
//         }
//     }
//     return books
// }
// console.log(findByTitle(books,"Flex"))

//2
// function findByAuthor(arr,name){
// for(const book of arr){
//     if(book.authors.includes(name)){
//     console.log(book)
//     }
// }
// }

// const findByAuthor = (arr,name) =>{
//     for (const book of arr) {
//         if(book.authors.includes(name)){
//             console.log(book)
//         }
//     }
// }
//3
// function findByCategories(arr,name){
//     for(const cat of arr){
//         if(cat.categories.includes(name)){
//             console.log(cat)
//         }
//     }
// }
//4
// console.log(books[0].publishedDate['$date'])
// console.log(new Date().getTime()) //ของjavascript
// console.log(new Date(books[0].publishedDate['$date']).getTime())

function findByDate(arr,date){
    let D =[]
for(const book of arr){
    // console.log(book)
    if(book.publishedDate !== null && book.publishedDate !== undefined){
        //  console.log(new Date (book.publishedDate.$date).getTime(), new Date(date).getTime())
       
         if(new Date (book.publishedDate.$date).getTime()===new Date(date).getTime()){
             D.push(book)
         }
    }
   
}
return D
}
console.log(findByDate(books,'2009-04-01'))
console.log('---------------')
console.log(findByCategories(books,'Open Source'))
console.log(new Date('2001-08-11').getTime())
