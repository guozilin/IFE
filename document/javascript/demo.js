'use strict';
function sum(a,b){
    return a + b
}


function callSum(num1,num2){
    console.log(this)
    return sum.apply(this,[num1,num2])
}
function callSum2(num1,num2){
    console.log(this)
    return sum.apply(this,arguments)
}

console.log(callSum(10,2))
console.log(callSum2(10,4))