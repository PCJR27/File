 //function isImageFileExtension(fileName){
     //if(fileName ===null || fileName ===undefined)
    /// return false    
    //return  fileName.endsWith('.png')||    
    // fileName.endsWith('.jpg')||    
     ///fileName.endsWith('.jpeg')||    
     //fileName.endsWith('.gif')||    
     //fileName.endsWith('.svg')

//const { fstat } = require("fs")

 //}

// function isImageFileExtension(fileName){
//     if(fileName ===null||fileName===undefined){
//         return false
//     }
//             if(fileName.endsWith(".png")){
//                 return true
//             }
//             if(fileName.endsWith(".jpg")){
//                 return true
//             }
//             if (fileName.endsWith('jpeg')){
//                 return true
//             }
//             if(fileName.endsWith('.gif')){
//                 return true
//             }
//             if(fileName.endsWith('.svg')){
//                 return true     
//             }
//     else return false

// }
function isImageFileExtension(fileName){
    if(fileName===null||fileName===undefined)
        return false
    
    return fileName.endsWith('.png')||
    fileName.endsWith('.jpg')||
    fileName.endsWith('.jpeg')||
    fileName.endsWith('.gif')||
    fileName.endsWith('.svg')

}

console.log(isImageFileExtension('sample.jpeg'))
console.log(isImageFileExtension('myPic.jpg'))
console.log(isImageFileExtension('product.gif'))
console.log(isImageFileExtension('img.svg'))
console.log(isImageFileExtension('student.png'))
console.log(isImageFileExtension('x.doc'))
console.log(isImageFileExtension('y.pdf'))
console.log(isImageFileExtension(null))
console.log(isImageFileExtension(undefined))
