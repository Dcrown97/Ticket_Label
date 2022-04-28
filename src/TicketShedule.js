import { Box, Container, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr, Text, HStack, Divider, Stack, Heading, Center } from '@chakra-ui/react'
import React from 'react'

function TicketShedule() {

    const [billings, setBillings] = React.useState([])
    const [pharmacy, setPharmacy] = React.useState([])
    const [reception, setReception] = React.useState([])
    const [synlabs, setSynlabs] = React.useState([])
    const [vitals, setVitals] = React.useState([])

    const getTickets = () => {

        fetch('http://13.69.79.35/bluecoatmail/public/index.php/api/mails')
            .then(response => response.json())
            .then(data => {
                setBillings(data.billings)
                setPharmacy(data.pharmacies)
                setReception(data.receptions)
                setSynlabs(data.synlabs)
                setVitals(data.vitals)
                console.log('data', data)
            })

    }
    React.useEffect(() => {
        getTickets()
        //call endpoint every 30 seconds
        setInterval(getTickets, 30000)
    }, [])

    return (


        <Center>
            <Stack spacing='20px' direction={'row'} bg='lightgreen' mt='40px' p='20px'>
                <Box>
                    <Heading> Billing</Heading>
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
                <Box>
                    <Heading> Pharmacy</Heading>
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
                <Box>
                    <Heading> Reception</Heading>
                    <Divider></Divider>
                    {
                        reception.map((reception, index) => {
                            return (
                                <Box key={index}>
                                    <Text>{reception.reception}</Text>
                                    <Divider></Divider>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box>
                    <Heading>Synlabs</Heading>
                    <Divider></Divider>
                    {
                        synlabs.map((synlab, index) => {
                            return (
                                <Box key={index}>
                                    <Text>{synlab.synlab}</Text>
                                    <Divider></Divider>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box>
                    <Heading>Vitals</Heading>
                    <Divider></Divider>
                    {
                        vitals.map((vital, index) => {
                            return (
                                <Box key={index}>
                                    <Text>{vital.vital}</Text>
                                    <Divider></Divider>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Stack>
        </Center>

    )
}

export default TicketShedule