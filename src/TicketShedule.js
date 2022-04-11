import { Box, Container, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr, Text, HStack, Divider, Stack } from '@chakra-ui/react'
import React from 'react'

function TicketShedule() {

    const [billings, setBillings] = React.useState([])
    const [pharmacy, setPharmacy] = React.useState([])
    const [reception, setReception] = React.useState([])

    const getTickets = () => {

        fetch('http://127.0.0.1:9000/api/mails')
            .then(response => response.json())
            .then(data => {
                setBillings(data.billings)
                setPharmacy(data.pharmacies)
                setReception(data.receptions)
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
            <Stack spacing='10px' direction={'row'}>
                <Box w='20%' bg='yellow.200'>
                    <Text> Billing</Text>
                    <Divider></Divider>
                    {
                        billings.map((billing, index) => {
                            return (
                                <Box key={index}>
                                    <Text>{billing.billing}</Text>
                                    <Divider></Divider>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box w='20%' bg='tomato'>
                    <Text> Pharmacy</Text>
                    <Divider></Divider>
                    {
                        pharmacy.map((pharmacy, index) => {
                            return (
                                <Box key={index}>
                                    <Text>{pharmacy.pharmacy}</Text>
                                    <Divider></Divider>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box w='20%' bg='pink.100'>
                    <Text> Reception</Text>
                    {
                        reception.map((reception, index) => {
                            return (
                                <Box key={index}>
                                    <Text>{reception.reception}</Text>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box w='20%' bg='pink.100'>
                    <Text>Synlabs</Text>
                </Box>
                <Box w='20%' bg='pink.100'>
                    <Text>Vitals</Text>
                </Box>
            </Stack>
        </Container>
    )
}

export default TicketShedule