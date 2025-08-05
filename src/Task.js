import { Card, CardContent, Typography,Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import IconButton from '@mui/material/IconButton';
import Grid from "@mui/material/Grid";
export default function Task({toDO,handele}){
    function handelStatus(){
        handele(toDO.id);
    }
    
    if (toDO.content !== '')
    return(
        <Card style={{marginTop:"15px",backgroundColor:"#9920beff",color:"#fff",borderRadius:"24px"}}>
            <CardContent >
                <Grid container>
                    <Grid size={6}>          
              <Stack style={{height:"100%",display:"flex",flexDirection:"row",alignItems:"center"}}>
                 <IconButton sx={{color:"#fff"}} > <DeleteIcon /></IconButton> 
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
    );
}