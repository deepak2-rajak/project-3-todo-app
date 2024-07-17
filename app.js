let todo=[];
let req=prompt("enetr your choice");
while(true){
    if(req==="quite"){
        console.log("you wrong quite");
        break;
    }
    if(req==="list"){
        console.log("------------");
        for(let i=0;i<=todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------");
    }else if(req==="add"){
        let task=prompt("enetr your task");
        todo.push(task);
        console.log("task added");
    }else if(req==="delete"){
        let idx=prompt("enter youd delete")
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
    req=prompt("pelase enter your req")
}
