import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({ countryData }) => {

    // Pagination logic -----
    const [page, setPage] = useState(1);
    const itemsPerPage = 24;

    // Calculate the total number of pages
    const totalItems = 248; // Total number of items to show
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    // Calculate the starting and ending index for the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const slicedData = countryData.slice(startIndex, endIndex);

    return (
        <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
        />
    )
}

export default PaginationComponent;
