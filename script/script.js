'use strict'

const userNum = +prompt('Введите число');

let numSimple = true;

for ( let i = 2; i < userNum; i++){
    if(userNum % i === 0){
        numSimple = false;
        break;
    }else{
        numSimple = true;
    }
}

console.log(numSimple)
