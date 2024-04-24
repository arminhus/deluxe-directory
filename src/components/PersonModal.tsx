import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Divider
} from '@chakra-ui/react'
import { People } from '../types/UserTypes'

type DetailedModalProps = {
    person: People | null
    isOpen: boolean;
    onClose: () => void;
}

export function PersonModal(props: DetailedModalProps) {
    const { person } = props;

    if (person === null) {
        return null;
    }

    return (
        <Modal isCentered isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{person.name}</ModalHeader>
                <Divider />
                <ModalCloseButton />
                <ModalBody>
                    <p>Height: {person.height}</p>
                    <p>Hair Color: {person.hairColor}</p>
                    <p>Eye Color: {person.eyeColor}</p>
                    <p>Birth Year: {person.birthYear}</p>
                    <p>Gender: {person.gender}</p>
                </ModalBody>
                <Divider />
                <ModalFooter>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}