import { Field } from "./Context/Feild";
import { useContext } from "react";
import Task from "./Task";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function AllTasks(){
         const [val, setVal] = useState('');
         const [toDo, setToDo] = useState([
            {
                id:0,
                content:'',
                status:false
            }
         ]);
         
         function handelClick(){
          setToDo([...toDo,{id:toDo.length++, content: val}]);
          setVal("")
        // console.log(toDo)
          
         }
         function handelCkeckstatus(id){
            const current =  toDo.map((t) => {
                 if (t.id == id){
                    t.status = !t.status;
                 }
                 return t; 
            })
            setToDo(current)
         } 
         const todoList = toDo.map((t) => {
            return <Task key={t.id} toDO={t}  handele={handelCkeckstatus}/>
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