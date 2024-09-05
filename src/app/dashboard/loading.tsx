import { Box, CircularProgress, Typography } from "@mui/material"

const Loading=()=>{
    return(
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
                <CircularProgress sx={{color:"#00d632"}} />
                <Typography color={'#fff'} margin={'auto'}>LOADING...</Typography>
                </Box>
            </Box>
        
        </>
    )
}

export default Loading