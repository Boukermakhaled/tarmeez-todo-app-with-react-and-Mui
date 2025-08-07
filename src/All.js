import { toDoContext } from "./Context/ToDoContext";
import { useContext } from "react";
import Task from "./Task";
import { Alert, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { CheckCircleOutline } from "@mui/icons-material";
export default function AllTasks(){
         const [val, setVal] = useState('');
         let ale;
         const [{toDo,setToDo}] = useContext(toDoContext);
         function handelClick(){
          setToDo([...toDo,{id:toDo.length++, content: val}]);
          setVal("")
           ale = Ale();
        // console.log(toDo)
          
         }
        function Ale(){
            // return 
// alert("wegjwjheg");
        }
         const todoList = toDo.map((t) => {
            return <Task key={t.id} toDO={t} />
         })
         
    return(
        <>
        <div style={{height:"280px",overflowY:"auto"}}>
         {todoList}
         </div>
        <div style={{marginTop:"20px",display:"flex",justifyContent:"center",gap:"20px"}}>
        <Button variant="contained" size="large" color="secondary" style={{borderRadius:"20px"}} onClick={() =>{handelClick();}}>اضافة</Button>
        <TextField variant="outlined" style={{width:"80%"}} value={val} onChange={(e) => {setVal(e.target.value)}}></TextField>
        </div>
        
        </>
    );
} 