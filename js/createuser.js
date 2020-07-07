function createuser(){
var frname=document.register.fname.value; 
var Lname=document.register.lname.value;  
var password=document.register.pswd.value; 
var emailid=document.register.emailr.value;

if((Lname.length > 3) && (frname.length > 3) && (password.length > 3) && (emailid.length > 3)){

    alert("New user created Sucessfully");


}else{
alert("Please enter all fields correctly");


}

}