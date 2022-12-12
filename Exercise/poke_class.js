class Poke{
    #hp
    #atk
    constructor(name=undefined,hp=0,atk=0){
        this.name=name
        this.#hp=hp
        this.#atk=atk
    }
    getname(){
        return this.name
    }
    getHp(){
        return this.#hp
    }
    getAtk(){
        return this.#atk
    }
    setHp(hp){
        this.hp= hp
    }
    getInfo(){
        return `Name:${this.name} | HP:${this.#hp} | ATK:${this.#atk}`
    }
}
export default Poke