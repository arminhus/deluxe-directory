import styled from 'styled-components'
import { Table } from "@chakra-ui/react";

type CustomTableProps = React.PropsWithChildren;

const StyledTable = styled(Table)`
    tbody tr {
        &:nth-child(odd) {
            background-color: #f3f3f3;
        }
        &:hover {
            background-color: #d1d1d1;
        }
    }
`

export function CustomTable(props: CustomTableProps) {
    return <StyledTable>{props.children}</StyledTable>
}