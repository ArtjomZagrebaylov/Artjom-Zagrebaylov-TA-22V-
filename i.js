/*let min = 5;
let max = 100;
let rand = Math.random();
let randomNumber = Math.floor(rand*(max-min+1))+min;*/

let temp = 30;
let checkTemp;

/*const checkTemp = (t) => */
{
   
    if (temp <= 20)
        checkTemp = -1;
     
   else if (temp >= 40)
       checkTemp = 1;
    
   else if (temp >= 21)
        checkTemp = 0;

}
console.log(checkTemp);