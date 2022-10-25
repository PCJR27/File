class Course{
    constructor(id=null,name=null,desc=null){
        this.id=id
        this.name=name
        this.desc=desc
    }
getId(){
    return this.id
}
getName(){
    return this.name
}
getDesc(){
    return this.desc
}
getInfo(){
    return {
        id:this.id,
        name:this.name,
        desc:this.desc
    }
}
}
module.exports= Course