const poke = require('./pokeList.js').pokeList;
//  function typeFire(poke){
//   let arr=[]
//   for (let item of poke){
//   if(item !== null && item.type ==="fire"){
//       arr.push(item)
//   }
//   }
//   return arr.sort(function(a,b){
//       return parseInt(a.id)-parseInt(b.id)
//     })
//   }
//   console.log(typeFire(poke))

//  function atkPoke(poke){
//       let grass =[]
//       let fire=[]
//      let electric=[]
//    for(let pokearr of poke){
//   if(pokearr!==null&&pokearr.type === "grass" ){
//   grass.push(pokearr.atk)
 
// }
//  if(pokearr!==null&&pokearr.type === "fire" ){
//      fire.push(pokearr.atk)
     
//  }
//  if(pokearr!==null&&pokearr.type === "electric"){
//       electric.push(pokearr.atk)
      
//  }
// //sortก่อนแล้วเอามายัดเข้า

// //     let arr2=[]
// //     let value = Object.keys(poke)
// //     if(&&poke.type==="grass"){
// //         arr2.push(value)
// //     }
// //     if(Math.max(value)&&poke.type==="fire"){
// //         arr2.push(value)
// //     }
// //     if(Math.max(value)&&poke.type==="electric"){
// //         arr2.push(value)
// //     }
// //   return arr2
//  }


//  let firstGrass=Object.keys(grass)
//  let firstFire=Object.values(fire)
//  let firstElectric=Object.values(electric)
// let maxAtkGrass = Math.max(firstGrass)
// Math.max(firstFire)
// Math.max(firstElectric)
// let result = []
// result.push(maxAtkGrass)
// //  let arr2=[firstGrass,firstFire,firstElectric]
//  return result
// }
// const demo2 = (arr) =>{
//      let fire
//      let grass
//      let electric
//      for (let item of arr) {
//        switch (item?.type) {
//          case 'fire':
//            if(fire === undefined){
//              fire = item
//            }else if(item.atk > fire.atk){
//              fire = item
//            }
//            break
//          case 'grass':
//            if(grass === undefined){
//              grass = item
//            }else if(item.atk > grass.atk){
//              grass = item
//            }
//            break
//          case 'electric':
//            if(electric === undefined){
//              electric = item
//            }else if(item.atk > electric.atk){
//              electric = item
//            }
//            break
//        }
//      }
//      return [fire,grass,electric].sort( (a,b) => parseInt(b.id) - parseInt(a.id) )
//    }
//  console.log(demo2(poke))
// function pokeType(arr){
// let answer=[]
// for(let item of arr ){
//   if(item!==null&&item.type==="fire"){
//     answer.push(item)
//   }
// }
// return answer.sort((a,b)=>{
//   return parseInt(a.id)-parseInt(b.id)
// })
// }
// console.log(pokeType(poke))

function Type(arrays){
let result=[]
let fire 
let grass
let elec
for(let answer of arrays){
  switch(answer?.type){
    case 'grass':
      if(grass===undefined){
        grass=answer
      }else if(answer.atk>grass.atk){
        grass=answer
      }
      break
      case 'fire':
        if(fire===undefined){
          fire=answer
        }else if(answer.atk>fire.atk){
          fire=answer
        }
        break
        case'electric':
        if(elec===undefined){
          elec=answer
        }else if(answer.atk>elec.atk){
          elec=answer
        }
        break
  }
}
return [grass,fire,elec].sort((a,b)=>{
  return parseInt(a.id)-parseInt(b.id)
})
}
console.log(Type(poke))