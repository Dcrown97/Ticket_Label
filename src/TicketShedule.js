import { Box, Text, Divider, Stack, Heading, Center, FormControl, FormLabel, Input, Button, HStack } from '@chakra-ui/react'
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
        setInterval(getTickets, 10000)
    }, [])

    return (

                    <Center>
                        <Stack spacing='20px' direction={'row'} bg='lightgreen' mt='40px' p='20px' display={{ base: 'flex', md: '' }} flexDirection={{ base: 'column', md: 'row' }} >

                            <Box>
                                <HStack background='blue' width={'200px'} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'}>  <Heading textTransform={'uppercase'} size={'md'} > Reception</Heading>
                                </HStack>
                                <Divider></Divider>
                                {
                                    reception?.map((reception, index) => {
                                        return (
                                            <Box key={index} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'} background='white' >
                                                <Text fontWeight={'bold'}>{reception.reception}</Text>
                                                <Divider></Divider>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>

                            <Box>
                                <HStack background='pink.600' width={'200px'} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'}>  <Heading textTransform={'uppercase'} size={'md'} > Billing</Heading>
                                </HStack>
                                <Divider></Divider>
                                {
                                    billings?.map((billing, index) => {
                                        return (
                                            <Box key={index} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'} background='white'>
                                                <Text fontWeight={'bold'}>{billing.billing === '' ? '' : billing.billing}</Text>
                                                <Divider></Divider>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>

                            <Box>
                                <HStack background='yellow.400' width={'200px'} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'}>  <Heading textTransform={'uppercase'} size={'md'} > Pharmacy</Heading>
                                </HStack>
                                <Divider></Divider>
                                {
                                    pharmacy?.map((pharmacy, index) => {
                                        return (
                                            <Box key={index} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'} background='white' >
                                                <Text fontWeight={'bold'}>{pharmacy.pharmacy}</Text>
                                                <Divider></Divider>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>

                            <Box>
                    <HStack background='green.400' width={'200px'} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'}>  <Heading textTransform={'uppercase'} size={'md'} > Laboratory</Heading>
                                </HStack>
                                <Divider></Divider>
                                {
                                    synlabs?.map((synlab, index) => {
                                        return (
                                            <Box key={index} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'} background='white'  >
                                                <Text fontWeight={'bold'}>{synlab.synlab}</Text>
                                                <Divider></Divider>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>

                            <Box>
                                <HStack background='orange.500' width={'200px'} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'}>  <Heading textTransform={'uppercase'} size={'md'} > vital</Heading>
                                </HStack>
                                <Divider></Divider>
                                {
                                    vitals?.map((vital, index) => {
                                        return (
                                            <Box key={index} display='flex' flexDirection={'column'} justifyContent='center' alignItems={'center'} background='white' >
                                                <Text fontWeight={'bold'}>{vital.vital}</Text>
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