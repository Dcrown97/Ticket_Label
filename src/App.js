import './App.css';
import TicketShedule from './TicketShedule';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Queue from './Queue';

function App() {
  return (
    
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Queue/>} ></Route>
          <Route path='/' element={<TicketShedule />} ></Route>
        </Routes>
             
      </BrowserRouter>
    </ChakraProvider>
   
  );
}

export default App;
