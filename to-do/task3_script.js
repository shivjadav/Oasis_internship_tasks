const title=document.getElementById("title")

function Addtask(){
    if(title.value==''){
        alert("please add title!!");
    }else{
        const d=new Date();
        const date=d.getDate();
        const year=d.getFullYear();
        const month=d.getMonth();
        const text=title.value
        const ob={
            date:date,
            year:year,
            month:month,
            text:text
        };
        try{
            const myArray=JSON.parse(localStorage.getItem("uncompleted"));
            if(myArray==null){
                const array=[];
                array.push(ob);
                localStorage.setItem("uncompleted",JSON.stringify(array));
                
            }else{
                myArray.push(ob);
                localStorage.setItem("uncompleted",JSON.stringify(myArray));
            }
            title.value=''
            alert("Task added successfully!!");
        }catch(err){
            console.log(err.message);
            alert("error!!");
        }
    }
}

const replace=()=>{
    window.location.replace("./show_uncompleted.html");
}

const replace2=()=>{
    window.location.replace("./show_completed.html");
}