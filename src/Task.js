import { Card, CardContent, Typography,Stack, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import IconButton from '@mui/material/IconButton';
import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import { toDoContext } from "./Context/ToDoContext";
//dialog imports 
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Directions } from "@mui/icons-material";

export default function Task({toDO}){
    const [{toDo, setToDo}] = useContext(toDoContext);
    const [toDel, setToDel] = useState(null);
    const [showPop, setPop] = useState(false);
    function handelStatus(){
        const current =  toDo.map((t) => {
                 if (t.id == toDO.id){
                    t.status = !t.status;
                 }
                 return t; 
            })
            setToDo(current)
    }
    
    function handelDelete(){
        setPop(true)
        
    }
    function handelPopButton(){
        setPop(false)
    }
    function ConfirmDel(){
        const New = toDo.filter((t) => {
            if (t.id !== toDO.id){
                return t;
            }
        })
        setToDo(New);
    }
    
    if (toDO.content !== '')
    return(<>
 <Dialog
        open={showPop}
       
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{textAlign:"right"}}
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
                 <IconButton sx={{color:"#fff"}}> <EditIcon /> </IconButton> 
                 <IconButton sx={{color:toDO.status ? "green" : "white"}} onClick={handelStatus}> <TaskAltIcon /> </IconButton> 
                </Stack>
                </Grid>
               <Grid size={6}>
                <div style={{height:"100%",display:"flex", justifyContent:"center",alignItems:"end",flexDirection:"column"}}><Typography variant="h4">{toDO.content}</Typography>
                <Typography variant="h6">hach</Typography>
                </div>
                </Grid>
                
                </Grid>
            </CardContent>
        </Card>
    </>);
}