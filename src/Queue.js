import { Box, Text, Divider, Stack, Heading, Center, FormControl, FormLabel, Input, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Queue() {

    const [error, setError] = React.useState('')
    const [queue, setQueue] = React.useState({
        billing: "",
        pharmacy: "",
        reception: "",
        synlab: "",
        vital: ""
    })
const navigate = useNavigate()
    const handleChange = (e) => {
        setQueue({ ...queue, [e.target.id]: e.target.value })
        // console.log(queue)
    }

    const handleClick = () => {
        if (queue.billing == '' && queue.pharmacy == '' && queue.reception == '' && queue.synlab == '' && queue.vital == '') {
            setError('Please fill the form')
            return
        } else {
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
            navigate('/')
        }
    }


  return (
    <div>
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
              </Stack>
          </Center>
    </div>
  )
}

export default Queue