let min = 5;
let max = 100;
let rand = Math.random();
let randomNumber = Math.floor(rand*(max-min+1))+min;
//1-20
//21-40
//41-60

//let temp = 30;
function checkTemp(temp)

{
   
    if (temp <= 20)
        return  -1;
     
    if (temp > 40)
       return  1;
    
    if (temp >= 21)
        return  0;

}
console.log(checkTemp(1));//-1
console.log(checkTemp(20));//-1
console.log(checkTemp(21));//0
console.log(checkTemp(40));//0
console.log(checkTemp(41));//1
console.log(checkTemp(60));//1
console.log(checkTemp(61));//1
console.log(checkTemp(randomNumber));//1
