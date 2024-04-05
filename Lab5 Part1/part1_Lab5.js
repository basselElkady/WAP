
// problem 1
function max(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
let num1=1;
let num2=2;
console.log(max(1,2));


// problem 2

function maxOfThree(num1,num2,num3){
    if(num1 > num2 && num1>num3){
        return num1;
    }
    else if(num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}

console.log(maxOfThree(1,2,3));


// problem 3

function isVowel(c){
    if(c == 'a' || c == 'o' || c == 'i' ||c == 'e'
    || c == 'A' || c == 'O' || c == 'I' ||c == 'E')
        return true;
    else
    return false;
}

console.log(isVowel('d'))

// problem 4
function sum(x,y,...more){
    let result=x+y;
    for(let i =0;i<more.length;i++){
        x+=more[i]
    }
    return result;
}

console.log(sum(1,2,3));

function multp(x,y,...more){
    let result=x*y;
    for(let i =0;i<more.length;i++){
        result*=more[i]
    }
    return result;
}

console.log(multp(1,2,3));


// problem 5

function rev(str){
    let result='';
    for(let i =str.length-1;i>=0;i--){
        result=result+str[i]
    }
    return result;
}

console.log(rev("jag testar"))

// problem 6
function findLongestWordLength(x,y,...more){

    let result=x;
    if(x.length<y.length)
        result=y;
    for(let i=0;i<more.length-1;i++){
        if(result.length<more[i].length)
            result=more[i];
    }
    return result;
}

console.log(findLongestWordLength("jag" ,"testar"))


// problem 7
function filterLongWords(x,arr){
    let result=[];
    let targetlength=arr[x].length;
    for(let i=0;i<arr.length;i++){
        if(targetlength<arr[i].length){
            result.push(arr[i])
        }
    }
    return result;
}


console.log(filterLongWords(1,["a","aa","aaa"]));




