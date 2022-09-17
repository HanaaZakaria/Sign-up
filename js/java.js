//Hanaa

function printName(){
   let myName="Hanaa";
//    console.log(myName.toUpperCase());
   for(let x=0; x<=10; x++){
       console.log(x  + "  " + myName.toUpperCase());
   }
}
printName();



function validateDate(){
let userName = document.getElementById('Username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
if(userName.length >=2 && password.length >= 8)
{
    console.log("==============UesrInfo=========");
    console.log("uesr name is:"+ userName);
    console.log("password is:"+ password);
    console.log("email is:"+ email);
}
else{
    console.log("error");
}
return userName +  email + password;
}
function printIFno(){
    printName();
    validateDate();
}
printIFno();

document.getElementById("btn").addEventListener("click",printName);

// let arrfuc =function(){
//     console.log("Hanaa");
//  return "hanaa";
// }
// console.log( arrfuc())

// let arrfuc =()=>{
//     console.log("Hanaa");
//     return"Hanaa"
// }
// console.log( arrfuc())

//one statment
// let arrfuc =()=>"Hanaa"
// console.log( arrfuc())

// let arrfuc =_=>"Hanaa"
// console.log( arrfuc())

// let arrfuc = x =>"Hanaa"
// console.log( arrfuc())

// let arrfuc =(x,y)=>"Hanaa"
// console.log( arrfuc())





