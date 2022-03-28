import { Heading } from '@chakra-ui/react';
import './App.css';
import TicketShedule from './TicketShedule';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    
    <ChakraProvider>
      <TicketShedule />  
    </ChakraProvider>
   
  );
}

export default App;
