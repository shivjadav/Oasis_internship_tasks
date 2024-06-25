const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

function check_user(){
    const user=sessionStorage.getItem("user");
    if(user==null){
       window.location.href="./sign_in.html"
    }else{
        const msg=document.getElementById("msg");
        msg.innerHTML=`user is logged in with ${user} id!!`;
    }
}

function  Register_user(e){
    e.preventDefault();
    const email=document.getElementById("email");
    const pass=document.getElementById("pass");
    const pass2=document.getElementById("cf_pass");
    const msg=document.getElementById("message");
    if(email.value==null||!emailRegex.test(email.value)){
        msg.innerHTML="please enter valid email id!";
        email.value='';
        pass.value='';
        pass2.value='';
    }else if(pass.value==null||pass2.value==null||!passwordRegex.test(pass.value)){
        msg.innerHTML="please Enter strong password!!";
        email.value='';
        pass.value='';
        pass2.value='';
    }else if(pass.value!==pass2.value){
        msg.innerHTML="please confirm password!!";
        email.value='';
        pass.value='';
        pass2.value='';
    }else{
        let users=JSON.parse(localStorage.getItem("users"))
        let flag=false;
        let ob={
            email:email.value,
            pass:pass.value
        }
        if(users==null){
            let array=[]
            array.push(ob);
            localStorage.setItem("users",JSON.stringify(array));
        }else{
            users.map((user)=>{
                if(user.email==ob.email){
                   flag=true;
                }
            });
            if(!flag){
                users.push(ob)
                localStorage.setItem("users",JSON.stringify(users));
                sessionStorage.setItem("user",ob.email);
                window.location.href="./secured_page.html";
            }else{
                alert("user already registered!!");
                window.location.href="./sign_in.html";
            }
        }
        
    }
}

function login_user(e){
    e.preventDefault();
    let flag=false;
    const users=JSON.parse(localStorage.getItem("users"));
    const msg=document.getElementById("message");
    const email=document.getElementById("email");
    const pass=document.getElementById("pass");
    if(users==null){
        msg.innerHTML="please enter valid email and password!!";
        email.value="";
        pass.value="";
    }else{
        users.map((user)=>{
            if(user.email==email.value && user.pass==pass.value){
               flag=true;
            }
        });
        if(flag===false){
            msg.innerHTML="please enter valid email and password!!";
            email.value="";
            pass.value="";
        }else{
            sessionStorage.setItem("user",email.value);
            window.location.href="./secured_page.html";
        }
    }
}