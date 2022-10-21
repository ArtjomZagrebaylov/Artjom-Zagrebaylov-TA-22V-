<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>

<body>

<script>

let rndmNum = Math.floor((Math.random() * 11) +1);



let userNum = prompt("Sisesta üks number 1-10-ni");



if (userNum == rndmNum)

{

    alert("Yay! Arvasid õige numbri ära!");

}

else

{

    alert("Sorry, "+userNum+" ei ole õige number");

}

</script>

</body>

</html>
