import { toDoContext } from "./Context/ToDoContext";
import Task from "./Task";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useContext, useEffect } from "react";
export default function AllTasks(){
         const [val, setVal] = useState('');
         const [{toDo,setToDo}] = useContext(toDoContext);
        //  useEffect(()=>{
        //     const list= JSON.parse(localStorage.getItem("todoList"));
        //     setToDo(list);
        //  },[]);
         
        //  function handelClick(){
        //     const updated = [...toDo,{id:toDo.length++, content: val}];
        //   setToDo(updated);
        //   localStorage.setItem("todoList", JSON.stringify(updated));
        //   setVal("")
        //  }
       
         const todoList = toDo.map((t) => {
            return <Task key={t.id} toDO={t} />
         })
         
    return(
        <>
        <>
         {todoList}
         </>
        {/* <div style={{marginTop:"20px",display:"flex",justifyContent:"center",gap:"20px"}}>
        <Button variant="contained" size="large" color="secondary" style={{borderRadius:"20px"}} onClick={() =>{handelClick();}}>اضافة</Button>
        <TextField variant="outlined" style={{width:"80%"}} value={val} onChange={(e) => {setVal(e.target.value)}}></TextField>
        </div> */}
        
        </>
    );
} 