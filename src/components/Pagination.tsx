import { useState } from 'react';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'

type PaginationProps = {
    total: number
    perPage: number;
    onChange: (page: number) => void
}


export const Pagination = ({ total, perPage, onChange }: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(total / perPage) - 1;

    const handlePageChange = (page: number) => {
        if (currentPage < 1) {
            setCurrentPage(1);
        } else if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        } else {
            setCurrentPage(page);
        }

        onChange(page);
    };

    const renderPageNumbers = () => {
        const maxDisplayedPages = 5;
        const pageNumbers = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
        let endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

        if (endPage - startPage < maxDisplayedPages - 1) {
            startPage = Math.max(1, endPage - maxDisplayedPages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <Button key={i} onClick={() => handlePageChange(i)} isActive={i === currentPage}>
                    {i}
                </Button>
            );
        }

        return pageNumbers;
    };

    return (
        <Flex justifyContent="flex-end">
            <ButtonGroup variant='outline' isAttached>
                <Button borderRadius={0} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</Button>
                {renderPageNumbers()}
                <Button borderRadius={0} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</Button>
            </ButtonGroup>
        </Flex>
    );
};