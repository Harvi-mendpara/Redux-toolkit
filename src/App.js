import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import CreateForm from './component/CreateForm';
import ReadData from './component/ReadData';
import Update from './component/Update';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route exact path="/" element={<CreateForm />} />
   <Route exact path="/read" element={<ReadData />} />
   <Route exact path="/update/:id" element={<Update />} />

   </Routes>
   </BrowserRouter>
    </>
    
  );
}

export default App;
