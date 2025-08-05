import './App.css';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container,Button, Stack } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import NavBar from './navBar';
import AllTasks from './All';

import { Field } from './Context/Feild';
import Done from './Done';
import Undone from './Undone';
function App() {
  return (
    <div className="App">
     <Container maxWidth="md" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Card style={{marginTop:"60px", height:"500px",width:"80%",borderRadius:"24px"}}>
        <CardContent >
         <Typography variant='h3'>مهامي</Typography>
         <hr></hr>
         <NavBar />
         <Routes>
        <Route path='/All' element={<AllTasks />}></Route>
        <Route path='/Done' element={<Done />}></Route>
        <Route path='/Undone' element={<Undone />}></Route>
      </Routes>
        </CardContent>
      </Card>
      </Container>
      
    </div>
  );
}

export default App;
