"use client"
import { Box, Typography } from "@mui/material"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const Error = () => {
    return (
        <>
            <Box sx={{ 
                backgroundColor: '#1e2329', 
                margin: 'auto', 
                height: '100vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
             }} >
                <Box
                sx={{
                    textAlign:'center'
                }}
                >
                <InfoOutlinedIcon sx={{color:"#ff3333"}} />
                <Typography color={'#fff'} margin={'auto'}>ERROR</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Error