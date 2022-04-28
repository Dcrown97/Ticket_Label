import { Box, Text, Divider, Stack, Heading, Center, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React from 'react'

function TicketShedule() {

    const [billings, setBillings] = React.useState([])
    const [pharmacy, setPharmacy] = React.useState([])
    const [reception, setReception] = React.useState([])
    const [synlabs, setSynlabs] = React.useState([])
    const [vitals, setVitals] = React.useState([])
    const [show, setShow] = React.useState(false);
    const [queue, setQueue] = React.useState({
        billing: "",
        pharmacy: "",
        reception: "",
        synlab: "",
        vital: ""
    })
    const [error, setError] = React.useState('')

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

    const handleChange = (e) => {
        setQueue({ ...queue, [e.target.id]: e.target.value })
        // console.log(queue)
    }

    const handleClick = () => {
        if (queue.billing == '' && queue.pharmacy == '' && queue.reception == '' && queue.synlab == '' && queue.vital == '') {
            setError('Please fill the form')
            return
        } else {
            setShow(false)
            console.log('queue', queue)

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(queue),
            };
            console.log(requestOptions, "requestoptions")
            fetch("http://13.69.79.35/bluecoatmail/public/index.php/api/add", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log('result', result)

                })
                .catch(error => {
                    console.log('error', error)

                });
            setQueue('')
        }
    }

    const handleBack = () => {
        setShow(true);
    }

    const handleView = () => {
        setShow(false);
    }

    React.useEffect(() => {
        setShow(true)
        getTickets()
        //call endpoint every 30 seconds
        setInterval(getTickets, 10000)
    }, [])

    return (

        <>
            
            {
                show ?
                    <Center>
                        <Stack spacing='20px' mt='40px' p='20px'>
                            <Text color={'red'}>
                                {error}
                            </Text>
                            <FormControl>
                                <FormLabel htmlFor='billing'>Billing</FormLabel>
                                <Input id='billing' value={queue.billing} onChange={handleChange} type='billing' />
                                <FormLabel htmlFor='pharmacy'>Pharmacy</FormLabel>
                                <Input id='pharmacy' value={queue.pharmacy} onChange={handleChange} type='pharmacy' />
                                <FormLabel htmlFor='reception'>Reception</FormLabel>
                                <Input id='reception' value={queue.reception} onChange={handleChange} type='reception' />
                                <FormLabel htmlFor='synlab'>Synlabs</FormLabel>
                                <Input id='synlab' value={queue.synlab} onChange={handleChange} type='synlabs' />
                                <FormLabel htmlFor='vital'>Vitals</FormLabel>
                                <Input id='vital' value={queue.vital} onChange={handleChange} type='vitals' />
                            </FormControl>
                            <Button colorScheme='blue' onClick={handleClick}>Submit</Button>
                            <Button colorScheme='blue' onClick={handleView}>View Queue</Button>
                        </Stack>
                    </Center>

                    :

                    <Center>
                        <Stack spacing='20px' direction={'row'} bg='lightgreen' mt='40px' p='20px'>
                            <Box>
                                <Heading> Billing</Heading>
                                <Divider></Divider>
                                {
                                    billings.map((billing, index) => {
                                        return (
                                            <Box key={index}>
                                                <Text fontWeight={'bold'}>{billing.billing === '' ? '' : billing.billing}</Text>
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
                                                <Text fontWeight={'bold'}>{pharmacy.pharmacy}</Text>
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
                                                <Text fontWeight={'bold'}>{reception.reception}</Text>
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
                                                <Text fontWeight={'bold'}>{synlab.synlab}</Text>
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
                                                <Text fontWeight={'bold'}>{vital.vital}</Text>
                                                <Divider></Divider>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                            <Button colorScheme='blue' onClick={handleBack}>Back</Button>
                        </Stack>

                    </Center>

            }



        </>

    )
}

export default TicketShedule