"use strict"
// problem 1 
// a)
function computeSumOfSquares(arr){
    // impertive way
    let res=0;
    for(let ele of arr){
        res=res+ele*ele
    }
    return res
   // declartive way
   // return arr.reduce((result,ele) => result+=Math.pow(ele,2))
}
// Do NOT use any explicit looping construct?

console.log(computeSumOfSquares([1,2,3]))
// b)
function  printOddNumbersOnly(arr){
    return arr.filter((ele) => ele%2 != 0)
}

console.log(printOddNumbersOnly([1,2,3]))

// c)
function printFibo(n,a,b){
    if (n<1){
        return -1;
    }
    let res=[];
    if(n === 1){
        res.push(a)
        return res    
    }
    if( n==2 ){
        res.push(a)
        res.push(b)
        return res
    }
    else{
        res.push(a)
        res.push(b)
        
        for(let i =2;i<n;i++){
            
            res.push(res[i-2]+res[i-1])
        }
    }

    return res


}
console.log(printFibo(6,0,1))


// problem 2
let user = {
    name: "John",
    years: 30
   };


   console.log(`name : ${user.name}`)
   console.log(`years : ${user.years}`)
   console.log(`is there a proporty of isAdmin ? ${user.isAdmin === 1}`)


   // problem 3

    
    let libraryBooks = [
        { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
        { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
        { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
        { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
    ];
    

    // i
    function addBook(title, author, libraryID) {
        let newBook = {
            title: title,
            author: author,
            libraryID: libraryID
        };
        libraryBooks.push(newBook);
    
        return newBook;
    }
    
    let newBookAdded = addBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 5555);
    console.log(newBookAdded); 
    console.log(libraryBooks);



    //ii

    let alltitles=libraryBooks.map(book => book.title).sort()
    console.log(alltitles)

    // iii
    function findbook(str){
        return libraryBooks.filter(book => book.title.includes(str))
    }
    console.log(findbook('Ahead'))



