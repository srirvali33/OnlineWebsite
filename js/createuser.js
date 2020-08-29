// function createuser(){
// var frname=document.register.fname.value; 
// var Lname=document.register.lname.value;  
// var password=document.register.pswd.value; 
// var emailid=document.register.emailr.value;

// if((Lname.length > 3) && (frname.length > 3) && (password.length > 3) && (emailid.length > 3)){

//     alert("New user created Sucessfully");


// }else{
// alert("Please enter all fields correctly");


// }

// }

function registerverification(){

    alert("Entering page");

}

function over(a){
    a.style.background= '#fcd4e2';
}
function out(a){
    a.style.background= 'white';
}

function invalidemail(){
    document.getElementById("emailerror").innerHTML="Please enter a valid email address";
    
}