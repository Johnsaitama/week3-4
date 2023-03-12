
let ages = [ 3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages[ages.length - 1 ] - ages[0] )
ages.push(2)
console.log(ages[ages.length - 1 ] - ages[0] )
//calculate average age
var i, sum = 0;
for (i =0; i < ages.length; i++){
    sum = sum + ages[i];
};
console.log(sum / ages.length) 


 var  names = ['Sam', 'Tommy', 'Tim','Sally','Buck', ' bob']
 

let total = 0;
for(let i = 0; i < names.length; i++){
    sum = sum + names[i].length;
}
console.log(sum / names.length);
 //loop thru array and contact all names with spaces
var con = names[0];
for(i= 1; i < names.length; i++){
    con = con.concat(" ", names[i]);
}
console.log(con);

//  by stating const names[]


// loop thru names array for length and push to new array

var nameLengths = [];
for(i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
}
console.log( nameLengths);

//loop thru nameLengths & calculate sum

sum = 0;
for(i = 0; i < nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
console.log(sum);

//function to concat a word n times

function repeat(word,n){
    var repeatedword = '';
for ( i =0; i < n; i++){
    repeatedword  = repeatedword + word;
}
return (repeatedword);
}
console.log(repeat('hello',3));

 //function to put together full name
function fullName(firstName, lastName){
    return(firstName + "" + lastName);
}
console.log(fullName("jesus", "reyes"));

function hundred ( array) {
    sum = 0;
    for(i =0; i < array.length; i++){
        sum = sum + array[i];
    }
    if ( sum > 100){
        return true;
    }
    else{
return false;
    }  
}
console.log(hundred(ages));

//function to average an array of numbers
function  average ( array){
    sum = 0 
    for (i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return(sum / array.length);
}console.log(average(ages));

//function compare averges of 2 arrays of numbers
function compareAverages ( array1, array2) {
    sum = 0
    for (i = 0; i < array1.length; i++){
        sum = sum + array1[i];    
}
var avg1 = (sum / array1.length);
sum = 0;
for (i = 0; i < array2.length; i++){
    sum = sum + array2[i];
}
var avg2 = (sum / array2.length);
if (avg1 > avg2) {
    return true;
}
else {
    return false;
}
}
console.log(compareAverages(nameLengths, ages));

//function of a boolean and conditionals
function willBuyDrink (isHotOutside, moneyInPoket) {
    if ((isHotOutside) && (moneyInPoket > 10.50)) {
        return true;
     }
     else {
    return false;
   }
}
console.log(willBuyDrink(true, 20));


//self created function
// convert function into a arrow function 

//let fancyAlgorithm(num1,num2,num3){
  //  let value = 0;
//for(let i = 0; i < num3; i++){
 //   value = (value + num2) * num1;}
//return value / (num1 * ( num3 * 10 ));//

let  fancyAlgorithm = (num1,num2,num3) =>{
    let value = 0;
    for(let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    return value / (num1 * ( num3 * 10 ));
}

console.log(fancyAlgorithm("num1,num2,num3"));
