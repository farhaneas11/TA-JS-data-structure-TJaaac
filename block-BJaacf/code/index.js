// 1. Create an array named numbers and store 5 number values in it
let  numbers = [1,2,3,4,5];
var total=0;
var average = 1;
for(let  i=0 ;i<numbers.length;i++){total=total+numbers[i];}
average=total/numbers.length;
/*for(var i in numbers) { total += numbers[i]; }*/
// 2. Calculate the sum of array items and print it to the console using console.log()
console.log(total);
// 3. Calculate the average of array items and print it to the console using console.log()
console.log(average);
// 4. Find the highest number in the array and print it to the console using console.log()
var largest= 0;
for(let  i=0 ;i<numbers.length;i++){
    if(largest<numbers[i]){
        largest = numbers[i];
    }    
}
console.log(largest);
// 5. Find the lowest number in the array and print it to the console using console.log()
var smallest= numbers[0];
for(let  i=0 ;i<numbers.length;i++){
    if(smallest>numbers[i]){
        smallest = numbers[i];
    }    
}
console.log(smallest);
// 6. Find the even numbers in the array and print them to the console using console.log()
for(let  i=0 ;i<numbers.length;i++){
    if(numbers[i]%2==0){
        console.log(numbers[i]);
    }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let  i=0 ;i<numbers.length;i++){
    if(numbers[i]%2!=0){
        console.log(numbers[i]);
    }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let  i=0 ;i<numbers.length;i++){
    if(numbers[i]/5==0){
        console.log(numbers[i]);
    }
}
// 9. Log all the element of the array one by one
for(let  i=0 ;i<numbers.length;i++){console.log(`${i}:${numbers[i]}`);}
// 10. Find all the number in the array that is divisible by 3
