import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PersonRow } from './PersonRow';
import { Table, Tbody } from '@chakra-ui/table';

describe('Person Row', () => {
    test('calls the onClick handler when clicked', async () => {
        const handleClick = jest.fn();
        render(
            <Table>
                <Tbody>
                    <PersonRow
                        onClick={handleClick}
                        person={{
                            id: 1,
                            name: 'person name',
                            birthYear: '01/01/1992',
                            eyeColor: 'blue',
                            gender: 'male',
                            hairColor: 'black',
                            height: 160,
                            mass: 120,
                        }}
                    />
                </Tbody>
            </Table>
        );
        const button = await waitFor(() => screen.getByTestId('person-1'));

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
