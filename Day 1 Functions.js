Objective

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

function factorial(n){

let result = 1;
for(let i =n;i>1;i--){
    result*=i;
}
return result;
}
