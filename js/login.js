// function loginpage(){
    
//     var password=document.login.pswdl.value; 
//     var emailid=document.login.emaill.value;
//     // var ptag=document.login.getElementById("demo");
//     // print(ptag);
    
//     if((password.length > 3) && (emailid.length > 3)){

//         alert("login done");
    
//         // ptag.innerHTML=Date();
    
//     }else{
//     alert("Please enter all fields correctly");
    
    
//     }
    
//     }

    function logverification(){
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