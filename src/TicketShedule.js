import { Box, Container, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr, Text } from '@chakra-ui/react'
import React from 'react'

function TicketShedule() {

    const [tickets, setTickets] = React.useState([])

    const getTickets = () => {
   
        fetch('http://192.168.0.153:9000/api/mails')
            .then(response => response.json())
            .then(data => {
                setTickets(data)
                console.log('data', data)
            })
  
    }
    React.useEffect(() => {
        getTickets()
    //call endpoint every 30 seconds
    setInterval(getTickets, 30000)
    }, [])

    return (

      <Container>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>Reception</Th>
                        <Th>Billing</Th>
                        <Th>Synlab</Th>
                        <Th>Vital</Th>
                        <Th>Pharmacy</Th>
                    </Tr>
                </Thead>
                <Tbody>
                   
                   {
                          tickets?.mails?.map(item => {
                            return (
                                <Tr key={item.id}>
                                    <Td>{item.reception}</Td>
                                    <Td>{item.billing}</Td>
                                    <Td>{item.synlab}</Td>
                                    <Td>{item.vital}</Td>
                                    <Td>{item.pharmacy}</Td>
                                </Tr>
                            )
                        })
                   }
                </Tbody>
            </Table>
      </Container>
    )
}

export default TicketShedule