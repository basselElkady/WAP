// Quetion 1:
//===========================================================
let Student={
    firstName : '',
    lastName :'',
    grades : [],
    inputNewGrade: function(newGrade){
        this.grades.push(newGrade)
    },

    // i calculate the avrage by( sum all elements in grades then devide it by the number of grades in grades )
    calcAvrageGrades: function(){
       return this.grades.reduce((sum,ele)=> sum+=ele )/this.grades.length
    }
}

let stu1=Object.create(Student)
stu1.firstName="bassel"
stu1.lastName="ahmed"
let stu2=Object.create(Student)
stu2.firstName="youri"
stu2.lastName="yagami"
let stu3=Object.create(Student)
stu3.firstName="light"
stu3.lastName="yagami"
stu1.inputNewGrade(2)
stu2.inputNewGrade(2)
stu2.inputNewGrade(2)

console.log(stu1.calcAvrageGrades())


//Question 2:
//=================================================================
function Studentt(fn,ln){
    this.firstName=fn
    this.lastName=ln
    this.Grades=[]

}

Studentt.prototype.enterNewGrade=function(g){
    this.Grades.push(g)
}

Studentt.prototype.calcAvrageGrades=function(){
    
    // i calculate the avrage by( sum all elements in grades then devide it by the number of grades in grades )
    return this.Grades.reduce((sum,ele)=>sum+=ele)/this.Grades.length
}

let stu4=new Studentt("bassel","ahmed")
let stu5=new Studentt("light","yagami")

stu4.enterNewGrade(1)
stu4.enterNewGrade(2)
console.log(stu4.calcAvrageGrades())

//Quetion 3
//==============================================================
Array.prototype.sort=function(){
    let array=this
    for(let j=1;j<array.length;j++){
        for(let i=0;i<array.length-j;i++){
            if(array[i]>array[i+1]){
                let temp=array[i]
                array[i]=array[i+1]
                array[i+1]=temp
            }
        }
    }
    return array;
 
}

console.log([5,4,3,2,1].sort())




//Quetion 4
//===================================================================

function Animal(n,s){
    this.name=n
    this.speed=s
}
Animal.prototype.run=function(s){
    console.log(this.speed)

    this.speed+=s
    console.log(this.speed)
}
function Rabbit(n,s){
    Animal.call(this,n,s) 

}
Rabbit.prototype.hide=function(){
    console.log(`${this.name} hides`)
}

Object.setPrototypeOf(Rabbit,Animal)
Object.setPrototypeOf(Rabbit.prototype,Animal.prototype)

let bunny=new Rabbit("bunny",100)
console.log(bunny.name)
bunny.hide()
bunny.run(10)








