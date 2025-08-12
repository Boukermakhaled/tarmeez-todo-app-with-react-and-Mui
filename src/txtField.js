import { toDoContext } from "./Context/ToDoContext";
import Task from "./Task";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useContext, useEffect } from "react";
export default function TxtF(){
    const [val, setVal] = useState('');
             const [{toDo,setToDo}] = useContext(toDoContext);
             useEffect(()=>{
                const list= JSON.parse(localStorage.getItem("todoList"));
                if (Array.isArray(list) && list.length !== 1){
                setToDo(list);}
             },[]);
             
             function handelClick(){
                const updated = [...toDo,{id:toDo.length++, content: val}];
              setToDo(updated);
              localStorage.setItem("todoList", JSON.stringify(updated));
              setVal("")
             }
           
        
    return(
        <div style={{marginTop:"20px",display:"flex",justifyContent:"center",gap:"20px"}}>
        <Button variant="contained" size="large" color="secondary" style={{borderRadius:"20px",width:"20%"}} onClick={() =>{handelClick();}} disabled={val === '' ? true : false}>اضافة</Button>
        <TextField variant="outlined" style={{width:"70%",borderRadius:"20px"}} value={val} onChange={(e) => {setVal(e.target.value)}}></TextField>
        </div>
        
    )
}