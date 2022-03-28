import { Box, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

function TicketShedule() {
    return (
        <Box>
            <Table m='50px'>
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
                    <Tr>
                        <Td>E008</Td>
                        <Td></Td>
                        <Td>E015</Td>
                        <Td>E012</Td>
                        <Td>E026</Td>
                    </Tr>
                    <Tr>
                        <Td>E008</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>E008</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    )
}

export default TicketShedule