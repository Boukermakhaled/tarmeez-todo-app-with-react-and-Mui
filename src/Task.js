import { Card, CardContent, Typography,Stack, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import IconButton from '@mui/material/IconButton';
import Grid from "@mui/material/Grid";
import { useContext, useState, useEffect } from "react";
import { toDoContext } from "./Context/ToDoContext";
//dialog imports 
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Directions } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
export default function Task({toDO}){
    const [{toDo, setToDo}] = useContext(toDoContext);
    const [toDel, setToDel] = useState(null);
    const [showPop, setPop] = useState({modification:false, deleting:false});
    const [showPopMod, setPopMod] = useState(false);
    const [editContent, setEditContent] = useState(toDO.content);

    // useEffect(()=>{
    //     localStorage.setItem("todoList",JSON.stringify(toDo));
    // },[])
    function handelStatus(){
        const current =  toDo.map((t) => {
                 if (t.id == toDO.id){
                    t.status = !t.status;
                 }
                 return t; 
            })
            setToDo(current);
            localStorage.setItem("todoList", JSON.stringify(current));
    }
    // delete
    function handelDelete(){
        setPop({...showPop,deleting:true})
        
    }
    function handelPopButton(){
        setPop({...showPop,deleting:false})
    }
    function ConfirmDel(){

        const New = toDo.filter((t) => {
                return t.id !== toDO.id;
        })
        setToDo(New);
        localStorage.setItem("todoList", JSON.stringify(New));
    }

    //modificate
    function handelModifi(){
        setPop({...showPop,modification:true})
        
    }
     function handelPopModifiButton(){
        setEditContent(toDO.content)
        setPop({...showPop,modification:false})
    }
    function handleSubmit(e){
        e.preventDefault();
       const updated = toDo.map((t) =>
           t.id === toDO.id ? { ...t, content: editContent } : t
           );
           setToDo(updated);
      localStorage.setItem("todoList", JSON.stringify(updated))
      setPop({ ...showPop, modification: false });
    }
    
    if (toDO.content !== '')
    return(<>

 <Dialog open={showPop.modification} fullWidth minWidth={'sm'}onClose={handelPopModifiButton} style={{textAlign:"right", direction:"rtl"}}>
        <DialogTitle>هل ترغب فعلا في تعديل هذه المهمة؟</DialogTitle>
        <DialogContent>
          <DialogContentText>
            تعديل المهمة
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="عنوان المهمة"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) =>{setEditContent(e.target.value)}}
              value={editContent}
              style={{textAlign:"right"}}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handelPopModifiButton}>الغاء</Button>
          <Button type="submit" form="subscription-form" variant="contained">
            تعديل
          </Button>
        </DialogActions>
      </Dialog>
 <Dialog
        open={showPop.deleting}
       
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{textAlign:"right"}}
        onClose={handelPopButton}
      >
        <DialogTitle id="alert-dialog-title">
          {"هل انت متأكد من الحذف؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            عند تأكيد الحذف لا يمكنك التراجع عن هذا الاجراء
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{display:"flex",justifyContent:"end",direction:"rtl"}}>
          <Button onClick={handelPopButton} variant="contained" color="secondary">إلغاء</Button>
          <Button onClick={ConfirmDel} autoFocus  color="secondary">
            نعم, احذف
          </Button>
        </DialogActions>
      </Dialog>
        <Card style={{marginTop:"15px",backgroundColor:"#9920beff",color:"#fff",borderRadius:"24px"}}>
            <CardContent >
                <Grid container>
                    <Grid size={6}>          
              <Stack style={{height:"100%",display:"flex",flexDirection:"row",alignItems:"center"}}>
                 <IconButton sx={{color:"#fff"}} onClick={handelDelete}> <DeleteIcon /></IconButton> 
                 <IconButton sx={{color:"#fff"}} onClick={handelModifi}> <EditIcon /> </IconButton> 
                 <IconButton sx={{color:toDO.status ? "green" : "white"}} onClick={handelStatus}> <TaskAltIcon /> </IconButton> 
                </Stack>
                </Grid>
               <Grid size={6}>
                <div style={{height:"100%",display:"flex", justifyContent:"center",alignItems:"end",flexDirection:"column"}}><Typography variant="h4">{toDO.content}</Typography>
                </div>
                </Grid>
                
                </Grid>
            </CardContent>
        </Card>
    </>);
}