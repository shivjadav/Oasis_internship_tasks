const listcontainer=document.getElementById("listcontainer");
const showTasks=()=>{
    let my2Array=JSON.parse(localStorage.getItem("completed"));
    if(my2Array==null||my2Array.length==0){
        const p=document.createElement("p");
        p.innerHTML="Nothing to show here!!";
        listcontainer.appendChild(p);
    }else{
        const table=document.createElement("table");
        let index=1;
        my2Array.map((task)=>{
            const tr=document.createElement("tr");
            const td1=document.createElement("td");
            const td2=document.createElement("td");
            const td0=document.createElement("td");
            const td3=document.createElement("td");
            const td4=document.createElement("td");
            const im1=document.createElement('img');
            im1.setAttribute("src","./cancle.png");
            im1.style.width="20px";
            im1.style.height="20px";
            im1.addEventListener("click",(e)=>{
                const id=e.target.id;
                my2Array.splice(id,1);
                localStorage.setItem("completed",JSON.stringify(my2Array));
                window.location.reload();
            })
            im1.id=`${index-1}`;
            td3.appendChild(im1);
            td1.innerHTML=task.text;
            td2.innerHTML=`${task.date}-${task.month}-${task.year}`;
            td4.innerHTML=`${task.date2}-${task.month2}-${task.year2}`;
            td0.innerHTML=index;
            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td4);
            tr.appendChild(td3);
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