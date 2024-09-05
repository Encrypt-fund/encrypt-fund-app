import { Typography } from "@mui/material"

interface props{
    heading:any;
}

const Heading=({heading}:props)=>{
    return(
        <>
        <Typography
        sx={{
            fontFamily:'Coolvetica Rg !important',
            color:'#00d632',
            '@media(max-width : 1200px)':{
                fontSize:'22px',
                '@media(max-width : 900px)':{
                fontSize:'20px'
            }
            }

        }}
         variant="h4">{heading}</Typography>
        </>
    )
}

export default Heading