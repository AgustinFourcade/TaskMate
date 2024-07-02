import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtons() {
    return (
        <Box sx={{ '& > :not(style)': { marginTop: 15, marginInline: 15 } }}>
            <Fab color="secondary" variant="extended" aria-label="add"> 
                New Task
                <AddIcon />
            </Fab>
        </Box>
    );
}
