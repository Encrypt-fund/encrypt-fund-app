import { Box, Grid, Typography } from "@mui/material"
import DistributeTab from "./distributeTab"
import Image from "next/image"
import chart_img from '../../icons/banner_shape01.png'
import { makeStyles } from '@mui/styles';
import Text from "@/theme/components/text";


const useStyles = makeStyles({
    listItem: {
        display: 'flex',
        alignItem: 'center',
        gap: '1rem',
        padding: '0.6rem 1rem',
        borderRadius: '8px',
        marginTop: '0.4rem',
        '&:hover': {
            background: 'linear-gradient(85deg, #00FFFF, #010314)',
        },
        '@media(max-width : 1200px)':{
            gap:'8px',
            '@media(max-width : 900px)':{
                justifyContent:'center'
            }
        }
    },
    round: {
        backgroundColor: '#101012',
        border:'1px solid #1D1D20',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6rem'
    },
    boxtext: {
        margin: '1.5rem 3rem 1.5rem 3rem'
    },
    abs: {

    },
    line: {
        width: '2px',
        height: '100%',
        background: 'linear-gradient(0deg, #071616, #00FFFF, #071616)',
    }

})

const Distribute = ({ramaPriceInUSD,ramaBalanceOfIco}:{ramaPriceInUSD:number|undefined,ramaBalanceOfIco:number|undefined}) => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={5.5} md={7} sm={12} xs={12} >

                    <Box className={classes.abs}>
                        <DistributeTab />
                    </Box>

                </Grid>
                <Grid item lg={1} md={1} sm={12} xs={12} display={'flex'} justifyContent={'center'}>

                    <Box className={classes.line} />

                </Grid>
                <Grid item lg={5.5} md={4} sm={12} xs={12}>
                    <Box
                    sx={{
                        '@media(max-width : 900px)':{
                            textAlign:'center'
                        }
                    }}
                    >
                        <Box textAlign={'center'}>
                        <Image src={chart_img} alt={""} />
                        </Box>
                        <Box className={classes.boxtext}>
                           <Typography textAlign={'center'} fontSize={20} color={'#00FFFF'} fontFamily={'Bruce Forever !important'}>RAMESTTA is a decentralized, open-source blockchain</Typography>
                          
                        </Box>

                        <Box component={'ul'}>
                            <Box className={classes.listItem} component={'li'}>
                                <Typography className={classes.round} color={'#fff'}>1</Typography>
                                <Typography color={'#fff'}>Symbol: RAMA</Typography>
                            </Box>
                            <Box className={classes.listItem} component={'li'}>
                                <Typography className={classes.round} color={'#fff'}>1</Typography>
                                <Typography color={'#fff'}>Initial Value : 1 RAMA = ${ramaPriceInUSD?ramaPriceInUSD.toFixed(4):'0.1450'} = {ramaPriceInUSD?(ramaPriceInUSD/0.05).toFixed(4):(0.145/0.05).toFixed(4)} MMCT</Typography>
                            </Box>
                            <Box className={classes.listItem} component={'li'}>
                                <Typography className={classes.round} color={'#fff'}>1</Typography>
                                <Typography color={'#fff'}>Type : RAMA20</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Distribute