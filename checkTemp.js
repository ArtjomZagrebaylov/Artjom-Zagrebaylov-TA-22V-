/*let min = 5;
let max = 100;
let rand = Math.random();
let randomNumber = Math.floor(rand*(max-min+1))+min;*/

//let temp = 30;
function checkTemp(temp)

{
   
    if (temp <= 20)
        return  -1;
     
   else if (temp >= 40)
       return  1;
    
   else if (temp >= 21)
        return  0;

}
console.log(checkTemp(5));
