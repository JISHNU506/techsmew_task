
import './App.css';
import MainForm from './Components/MainForm';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Show from './Components/Show';

function App() {
  return (
   <>
   
 
   <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainForm/>}/>
        <Route path="/show" element={ <Show/>}/>
         
        
{/*          

          <Route path="/Ser" element={<Ser/>} /> */}
 
      </Routes>
    </BrowserRouter>
   </>
 
  );
}

export default App;
