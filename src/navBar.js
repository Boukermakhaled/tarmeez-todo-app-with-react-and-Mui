import { Link } from "react-router-dom"
import { Button,Stack } from "@mui/material";
export default function Navbar(){
    return(
        <Stack style={{display:"flex", justifyContent:"center", flexDirection:"row-reverse",gap:"10px"}} >
         <Link to={"/"}><Button size="small" color="secondary" variant="outlined" style={{borderRadius:"14px"}} >الكل</Button></Link>
         <Link to={"/Done"}><Button size="small" color="secondary" variant="outlined" style={{borderRadius:"14px"}}> منجز </Button></Link>
         <Link to={"/Undone"}><Button size="small" color="secondary" variant="outlined" style={{borderRadius:"14px"}}> غير منجز</Button></Link>
        </Stack>
    );
}