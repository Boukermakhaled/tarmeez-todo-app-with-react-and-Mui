import Task from "./Task";
import { useContext, useState } from "react";
import { toDoContext } from "./Context/ToDoContext";
export default function Done(){
    const [{toDo, setToDo}] = useContext(toDoContext);
    const TaskDone = toDo.map((t) => {
        if (t.status){
            return <Task key={t.id} toDO={t}/>;
        }
        // setToDo(TaskDone)
    });
    // console.log("hello", toDo)
    
    return(<>
        {TaskDone}
        </>
    );
}