import Poke from "./poke_class.js";
let por =new Poke('porcha',100,10)
let cha =new Poke('cha',100,10)
function battle(one,two){
    for(let ten =1;ten<=10;ten++){
        console.log(`=====${ten}=====`)
        let random = Math.floor(Math.random()*(10-1+1)+1)
        if(random %2 === 0){
            console.log(`${one.name} attack ${two.name}`)
        two.setHp(two.getHp()-one.getAtk())
        if(two.getHp()<=0){
            console.log(`${one.name} Win!!`)
            return `${one.name} Win!!`
        }
        two.getInfo()
        }
        else{
            console.log(`${two.name} attack ${one.name}`)
            one.setHp(one.getHp()-two.getAtk())
            if(one.getHp()<=0){
                console.log(`${two.name} Win!!`)
                return `${two.name} Win!!`
            }
            one.getInfo()
        }
        
    }
    console.log('=====END=====')
    one.getInfo()
    two.getInfo()
    if(one.getHp()===two.getHp()){
        console.log('Draw')
    }else if(one.getHp() > two.getHp()){
        console.log(`${one.getName()} Win!!`)
    }else{
        console.log(`${two.getName()} Win!!`)
    }

}
battle(por,cha)
