//write a program that will print sum of all the numbers
// that are divisible by 3 and 5 between 1 and 100
// using while loop

var i =1;
var sum = 0;
while(i<=100){
    if(i%3==0 && i%5==0){
        document.write(i + "<br>");
        sum += i;
    }
    i++;
}
document.write("The sum of all numbers divisible by 3 and 5 between 1 and 100 is: " + sum);