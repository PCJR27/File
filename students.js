class Students{
constructor(id=null,name=null,year=null,course=null){
    this.id=id
    this.name=name
    this.year=year
    this.course=course
}
getId(){
    return this.id
}
getName(){
    return this.name
}
getYear(){
    return this.year
}
getCourse(){
    return this.course
}
getInfo(){
    return {
        id:this.id,
        name:this.name,
        year:this.year,
        course:this.course
    }
}
}
module.exports = Students
