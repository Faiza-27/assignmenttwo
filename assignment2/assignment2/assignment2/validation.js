let nameNode=document.getElementById("name");
let errnode1=document.getElementById("err1");

let phoneNode=document.getElementById("phone");
let errnode3=document.getElementById("err3");

let mailnode=document.getElementById("email");
let errnode2=document.getElementById("err2");
let mssgnode=document.getElementById("msg");
let errnode4=document.getElementById("err4");


function validate1(){
    errnode1.innerHTML="";
    nameNode.style.border="2px green solid";
    nameNode.style.backgroundColor='yellow';
    let name=nameNode.value;
    if(name===""){
        errnode1.innerHTML="<b>This field is required</b>";
        nameNode.style.border="2px red solid";
        nameNode.style.backgroundColor='pink';
        return false;
    }
    else{
        return true;
    }
}

function validate2(){
    errnode2.innerHTML="";
    mailnode.style.border="2px green solid";
    mailnode.style.backgroundColor='yellow';
    let email=mailnode.value;
    let ss=email.substring(email.indexOf('@')+1);
    console.log(ss);
    if(email===""){
        errnode2.innerHTML="<b>This field is required</b>";
        mailnode.style.border="2px red solid";
        mailnode.style.backgroundColor='pink';
        return false;
    }
    else if(!email.includes('@') || ss===''){
        errnode2.innerHTML="<b>Invalid email id</b>";
        mailnode.style.border="2px red solid";
        mailnode.style.backgroundColor='pink';
        return false;
    }
    else{
        return true;
    }
    
}

function validate3(){
    errnode3.innerHTML="";
    phoneNode.style.border="2px green solid";
    phoneNode.style.backgroundColor='yellow';
    
    var regMobile=/^[6-9][0-9]{9}$/;
    let phone=phoneNode.value;
    if(phone===""){
        errnode3.innerHTML="<b>This field is required</b>";
        phoneNode.style.border="2px red solid";
        phoneNode.style.backgroundColor='pink';
        return false;
    }
    else if(regMobile.test(phone)==false)
    {
        errnode3.innerHTML="<b>Invalid phone no</b>";
        phoneNode.style.border="2px red solid";
        phoneNode.style.backgroundColor='pink';
        return false;
    }
    else {
        return true;
    }
}

function validate4(){
    errnode1.innerHTML="";
    mssgnode.style.border="2px green solid";
    mssgnode.style.backgroundColor='yellow';
    let mssg=mssgnode.value;
    if(mssg===""){
        errnode4.innerHTML="<b>This field is required</b>";
        mssgnode.style.border="2px red solid";
        mssgnode.style.backgroundColor='pink';
        return false;
    }
    else{
        return true;
    }
}

function validate(){
    let st1=validate1();
    let st2=validate2();
    let st3=validate3();
    let st4=validate4();
   


    if (st1 && st2 && st3 && st4){
        alert("successfully submitted. you will be contacted within 24hrs.");
    }
    else{
       return false;
    }
     
}

            
           
         