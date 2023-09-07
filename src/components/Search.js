import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = () => {
    const [filter, setFilter] = useState('');

    const handleChangeFilter = event => {
        setFilter(event.target.value);
    }
    return (
        <div className='relative'>
            <Box sx={{ width: 200, position: "absolute", left: 40, top: 35 }} component="form" noValidate autoComplete="off" >
                <TextField id="outlined-basic" label="Search" variant="outlined" />
            </Box>
        </div>
    )
}

export default Search;