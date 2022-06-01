//fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "Im Javascript");
 </script>
 Whats the error in this ?
</body>
</html>

//fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”scripts.js”></script>
</body>
</html>

scripts.js

alert(“I’m invoked!”);

//explain.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

alert("I'm JavaScript!");
alert('Hello'); 
alert(`World`);
alert(3 +1+ 2); 



//fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek";
admin = fname+lname;
alert( admin ); 

output = Guvigeek



//fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);



//How to get the correct score in console.

//fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}




//Write a code to print the numbers in the array

//Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i]; 
}
console.log(new_string);


//Write a code to print the numbers in the array

//Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i] +","; 
}
console.log(new_string);


//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

//Output: 11 10 9 8 7 6 5 4 3 2 1

var new_string = "";
 
for (var i = 11; i > 0; i-- ) {
 new_string +=[i] + " "; 
}
console.log(new_string);

//Write a code to add all the numbers in the array

//Output: 66

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i < numsArr.length; i++) {
 var sum;
 sum += numsArr[i]
}
console.log(sum);

//Write a code to add the even numbers only
//Output: 30

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i < numsArr.length;i++){
 if(numsArr[i]%2==0){
 sum += numsArr[i]
 }
}
console.log(sum);


//Write a code to add the even numbers and subract the odd numbers
//Output: 94

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i < numsArr.length;i++){
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);

//Fix the code to get the largest of three.

//Code:

aa = (f,s,t) => {
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);


  // Fix the code to Sum of all numbers using IIFE function

//Code:


( function odd(a){
    var odd=0;
for(i=0;i<a.length;i++){
    odd+=a[i]; 
        
    }
    console.log(odd)
})
([1,2,3,4,5,6,7,8,9]);

//fix the code to sum the number in that array

//Code:

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const sum = num.reduce(sum)
console.log(sum);


OUTPUT:

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum1 = (a, b) =>
 a + b
const sum = num.reduce(sum1)
console.log(sum);

//Print odd numbers in an array-IIFE

(function odd(a){
    for(i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i]);
            
        }
    }
    })
    odd([1,2,3,4,5,6,7,8,9,]);


   //Fix the code to reverse.

//Code:

(function(str){
 str1 = str.split(“ “).reverse().join(“”);
 console.log(str1); 
})(“abcd”)

OUTPUT:

(function(str){
    str1 = str.split(" ").reverse().join("");
    console.log(str1); 
   })("abcd")