import Pokemon from "./poke_class.js";
// let porcha = new Pokemon('porcha',100,10)
// let popcorn = new Pokemon('popcorn',100,10)
// let cha =new Pokemon('cha',50,20)
// let pop =new Pokemon('pop',50,10)
function battle(one,two){
//    let ten = 1
// while (ten<=10){
// console.log(`=====${ten}=====`)
// let random=Math.floor(Math.random()*(10-1+1)+1)
// if(random % 2 ===0){
//     console.log(`${one.name} attack ${two.name}`)
// two.setHp(two.getHp()-one.getAtk())
// if(two.getHp()<=0){
//      console.log(`${one.name} Win!!`)
//     return`${one.name} Win!!!`
// }
// two.getInfo()
// }
// else{
//     console.log(`${two.name} attack ${one.name}`)
//     one.setHp(one.getHp()-two.getAtk())
//     if(one.getHp()<=0){
//         console.log(`${two.name} Win!!!`)
//         return `${two.name} Win!!!`
//     }
//     one.getInfo()
    
// }
// ten ++
// }
// console.log('=====END=====')
// one.getInfo()
// two.getInfo()
// if(one.getHp()===two.getHp()){
//     console.log("Draw") 
// }
// else if(one.getHp()>two.getHp()){
//     console.log(`${one.getName()} Win!!!`)
// }
// else 
// console.log(`${two.getName()} Win !!!`)
let ten = 1
while (ten<=10){
let random =Math.floor(Math.random*(10-1+1)+1)
if(random%2===0){
two.setHp(two.getHp()-one.getAtk())
if(two.getHp()<=0){
    return`${one.name} Win!!!`
}
two.getInfo()
}
else 
one.setHp(one.getHp()-two.getAtk())
if(one.getHp()<=0){
            console.log(`${two.name} Win!!!`)
            return `${two.name} Win!!!`
            one.getInfo()
        }
     
        ten ++
}

}
battle(porcha,popcorn)

