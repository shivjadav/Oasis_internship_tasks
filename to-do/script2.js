const listcontainer=document.getElementById("listcontainer");
function showTasks(){
    let myArray=JSON.parse(localStorage.getItem("uncompleted"));
    let my2Array=JSON.parse(localStorage.getItem("completed"));
    if(myArray==null||myArray.length==0){
        const p=document.createElement("p");
        p.innerHTML="Nothing to show here!!";
        listcontainer.appendChild(p);
    }else{
        const table=document.createElement("table");
        let index=1;
        myArray.map((task)=>{
            const tr=document.createElement("tr");
            const td1=document.createElement("td");
            const td2=document.createElement("td");
            const td0=document.createElement("td");
            const td3=document.createElement("td");
            const td4=document.createElement("td");
            const im1=document.createElement('img');
            const im2=document.createElement('img');
            im1.setAttribute("src","./cancle.png");
            im1.style.width="20px";
            im1.style.height="20px";
            im1.addEventListener("click",(e)=>{
                const id=e.target.id;
                myArray.splice(id,1);
                localStorage.setItem("uncompleted",JSON.stringify(myArray));
                window.location.reload();
            })
            im1.id=`${index-1}`;
            td3.appendChild(im1);
            im2.setAttribute("src","./Green-check-mark-icon-on-transparent-background-PNG.png");
            im2.style.width="25px";
            im2.style.height="25px";
            im2.addEventListener("click",(e)=>{
                const id=e.target.id;
                const d=new Date();
                const date=d.getDate();
                const year=d.getFullYear();
                const month=d.getMonth();
                alert(date)
                if(my2Array==null){
                 let array=[];
                 task["date2"]=date;
                 task["year2"]=year;
                 task["month2"]=month;
                 array.push(task);
                 localStorage.setItem("completed",JSON.stringify(array)); 
                }else{
                task["date2"]=date;
                task["year2"]=year;
                task["month2"]=month;
                my2Array.push(task);
                localStorage.setItem("completed",JSON.stringify(my2Array)); 
                }
                myArray.splice(id,1);
                localStorage.setItem("uncompleted",JSON.stringify(myArray));
                window.location.reload();
            })
            td4.appendChild(im2);
            td1.innerHTML=task.text;
            td2.innerHTML=`${task.date}-${task.month}-${task.year}`;
            td0.innerHTML=index;
            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            table.appendChild(tr);
            index=index+1;
        });
        listcontainer.appendChild(table);
    }
    const back=document.createElement("button");
    back.style.backgroundColor="#eb974d";
    back.style.width="60px";
    back.style.height="25px";
    back.style.margin="20px auto"
    back.innerHTML="Back"
    back.addEventListener("click",()=>{
        window.location.replace("./Task3_todo.html");
    })
    listcontainer.appendChild(back);
}
showTasks();