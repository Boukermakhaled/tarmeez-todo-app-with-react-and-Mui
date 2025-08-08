import Task from "./Task";
import { useContext } from "react";
import { toDoContext } from "./Context/ToDoContext";
export default function Done(){
    const {toDo, setToDo} = useContext(toDoContext);
    const TaskDone = toDo.map((t) => {
        if (t.status){
            return <Task toDO={t}/>;
        }
        // setToDo(TaskDone)
    });
    
    return(<>
        {TaskDone}
        </>
    );
}