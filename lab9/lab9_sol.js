class Student{
    #srudentid
    constructor(id){
        this.#srudentid=id
        this.answer=[]
    }
    getID(){
        return this.#srudentid
    }
    addAnswer(q){
        this.answer.push(q)
    }


}

class Question{
    #questionid
    constructor(id,qanswer){
        this.#questionid=id
        this.qanswer=qanswer
    }
    getqID(){
        return this.#questionid
    }
    static chackAnswer(answer,ans){
        
        return answer.qanswer === ans;

    }
    
}

class Quiz{
    constructor(Questions,student){
        this.students=student
        this.map=new Map()
        Questions.forEach((q)=> this.map.set(q.getqID(),q.qanswer))
    }

    scoreStudentBySid(sid){
        let score=0
        for (let i = 0; i < students.length; i++) {
            let stu = students[i];
            if(stu.getID()===sid){
                for(let j=0;j<stu.answer.length;j++){
                    let ans=stu.answer[j]
                    if(Question.chackAnswer(ans,this.map.get(ans.getqID()))){
                        score++
                       
                    }
            
                
                }
            }
        }
        return score
    }
    getAverageScore(){
        let arr=[]
        for (let i = 0; i < students.length; i++) {
            let stu = students[i];
            let score=this.scoreStudentBySid(stu.getID())
            arr.push(score)
        }
        console.log(arr)
        return arr.reduce((sum,ele) => sum+=ele)/arr.length
    }

    


}



const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5

