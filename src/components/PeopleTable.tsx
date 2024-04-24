import {
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    useDisclosure,
    Spinner,
    Container
} from '@chakra-ui/react';
import usePeople from '../hooks/usePeople';
import { useState } from 'react';
import { People } from '../types/UserTypes';
import { PersonRow } from './PersonRow';
import { PersonModal } from './PersonModal';
import { CustomTable } from './CustomTable';
import { Pagination } from './Pagination';

export function PeopleTable() {
    const { people, headers, loading, pagination, updatePagination } = usePeople();
    const [selectedPerson, setSelectedPerson] = useState<People | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOnClick = (person: People) => {
        setSelectedPerson(person);
        onOpen();
    }

    if (loading) {
        return <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    }

    return (
        <Container>
            <Container maxW='2xl' overflowY='scroll' borderWidth='1px'>
                <TableContainer>
                    <CustomTable>
                        <Thead>
                            <Tr>
                                {headers.map(head => {
                                    return <Th key={head}>{head}</Th>
                                })}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {people.map((person) => (
                                <PersonRow key={person.id} person={person} onClick={() => handleOnClick(person)} />
                            ))}
                        </Tbody>
                    </CustomTable>
                </TableContainer>
            </Container>
            <Pagination onChange={updatePagination} perPage={10} total={pagination.total} />
            <PersonModal person={selectedPerson} isOpen={isOpen} onClose={onClose} />
        </Container>
    )
}
