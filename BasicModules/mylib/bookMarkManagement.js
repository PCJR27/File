// const { template } = require('@babel/core')
//64130500049 ปอชา มี้เจริญ 
export class BookMark {
  constructor(isbn, totalPages = 0) {
    this.isbn = isbn
    this.totalPages = totalPages
    this.bookMarks = []

  }
  getIsbn() {
    return this.isbn
  }
  getTotalPages() {
    return this.totalPages
  }
  addBookMark(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      return this.bookMarks.push(pageNumber)
    }
    return this.bookMarks.length
  }
  removeBookMark(pageNumber) {
    //1
    let newBook = []
    let remove = 0
    for (let index = 0; index < this.bookMarks.length; index++) {
      if (this.bookMarks[index] != pageNumber) {
        newBook.push(this.bookMarks[index])
      }
      if (this.bookMarks[index] === pageNumber) {
        remove = pageNumber
      }
      if (pageNumber > this.totalPages) {
        return undefined
      }
    }
    this.bookMarks = newBook
    return remove
    
    //2ของอาจารย์
  //   const beforeRemove=this.bookMarks.length
  //   this.bookMarks=this.bookMarks.filter(bookmark=>bookmark!=pageNumber)
  // if(beforeRemove===this.bookMarks.length){
  //   return undefined
  // }
  // else
  // return pageNumber

  //3
  // for (let i = 0; i < this.bookMarks.length; i++) {
  //   if(this.bookMarks[i]===pageNumber) {
  //     this.bookMarks.splice(i,1) 
  //     return pageNumber
  //   }
  // }return undefined
  }
  goToFirstBookMark() {
    if (this.bookMarks.length === 0) {
      return undefined
    }
    return this.bookMarks[0]
  }
  goToLastBookMark() {
    if (this.bookMarks.length === 0) {
      return undefined
    }
    return this.bookMarks[this.bookMarks.length - 1]
  }
  getBookMarks() {
    return this.bookMarks
  }

}
let a = new BookMark('978-7-888-14362-4', 7)
console.log(a.isbn)
console.log(a.totalPages)
console.log(a.bookMarks.lenght)
a.addBookMark(2)
a.bookMarks.push(5)
console.log(a.bookMarks.lenght)


// module.exports = BookMark


// const { template } = require('@babel/core')
// // 64130500045 นิธิศ วิศยทักษิณ
// class BookMark {
//   bookMarks = []
//   constructor(isbn,totalPages=0){
//     this.isbn = isbn
//     this.totalPages = totalPages
//   }
//   addBookMark(pageNumber){
//     if(pageNumber >= 1 && pageNumber <= this.totalPages){
//       return this.bookMarks.push(pageNumber)
//     }
//     return this.bookMarks.length
//   }
//   removeBookMark(pageNumber){
//     let newbookMarks = []
//     let removeMark = 0
//     for (let index = 0; index < this.bookMarks.length; index++) {
//       if(this.bookMarks[index] != pageNumber){
//         newbookMarks.push(this.bookMarks[index])
//       }
//       if(this.bookMarks[index] === pageNumber){
//         removeMark = pageNumber
//       }
//       if(pageNumber > this.totalPages){
//         return undefined
//       }
//     }
//     this.bookMarks = newbookMarks
//     return removeMark
//   }
//   goToFirstBookMark(){
//     if(this.bookMarks.length === 0){
//       return undefined
//     }
//     return this.bookMarks[0]
//   }
//   goToLastBookMark(){
//     if(this.bookMarks.length === 0){
//       return undefined
//     }
//     return this.bookMarks[this.bookMarks.length-1]
//   }
//   getBookMarks(){
//     return this.bookMarks
//   }
// }
// module.exports = BookMark

