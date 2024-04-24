import {
    Td, Tr,
} from '@chakra-ui/react'
import { People } from '../types/UserTypes';

type PersonRowProps = {
    person: People,
    onClick: () => void
}

export function PersonRow(props: PersonRowProps) {
    const { person } = props;
    return (
        <Tr data-testid={`person-${props.person.id}`} onClick={props.onClick} >
            <Td>{person.name} </Td>
            <Td>{person.hairColor}</Td>
            <Td>{person.height}</Td>
            <Td>{person.mass}</Td>
        </Tr>
    );
};