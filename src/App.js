import './App.css';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container,Button, Stack, Alert } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import NavBar from './navBar';
import AllTasks from './All';

import { toDoContext } from './Context/ToDoContext';
import Done from './Done';
import Undone from './Undone';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState([
            {
                id:0,
                content:'',
                status:false,
                confirmed:false
            }
         ])
         
  return (
    <div className="App">
      
     <Container maxWidth="md" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Card style={{marginTop:"60px", height:"500px",width:"80%",borderRadius:"24px"}}>
        <CardContent >
          
         <Typography variant='h3'>مهامي</Typography>
         <hr></hr>
         <NavBar />
         <toDoContext.Provider value={[{toDo, setToDo}]}>
         <Routes>
        <Route path='/All' element={<AllTasks />}></Route>
        <Route path='/Done' element={<Done />}></Route>
        <Route path='/Undone' element={<Undone />}></Route>
      </Routes>
      </toDoContext.Provider>
        </CardContent>
      </Card>
      </Container>
    </div>
  );
}

export default App;
