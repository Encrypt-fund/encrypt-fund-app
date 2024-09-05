import Heading from "@/theme/components/heading";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Link from "next/link";

const useStyles = makeStyles({
    heading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        marginTop: '5rem',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            marginTop: '3rem',
        }

    },
    presale: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '2.5rem'
    },
    grad: {
        background: 'linear-gradient(286deg, #00FFFF 0%, #00FFFF 47.6%, #080808 98.23%)',
        padding: '14px 10px',
        borderRadius: '30px',
        width: '80%'
    },
    datacount: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    dotBox: {
        textAlign: 'center'
    },
    arrowBtn: {
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#00FFFF !important',
        color: '#000 !important',
        padding: '14px 22px',
        display: 'inline-flex',
        textDecoration: 'none',
        fontWeight: '700 !important',
        borderRadius: '5rem',
        transition: '0.5s',
        '&:hover': {
            transform: 'translateX(-5px)'
        }
    },
    btn2: {
        backgroundColor: '#transparent !important',
        color: '#00FFFF',
        padding: '14px 22px',
        display: 'inline-flex',
        textDecoration: 'none',
        fontWeight: '700 !important',
        borderRadius: '5rem',
        transition: '0.5s',
        border: '1px solid #00FFFF',
        '&:hover': {
            transform: 'translateX(5px)'
        }
    },
    btnWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        marginTop: '1rem',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            gap: '1rem',
        }
    },
    circle: {
        width: '10px',
        height: '10px',
        borderRadius: '30px',
        backgroundColor: '#3DC1F2'
    },
    circle_wrap: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center'
    }
})


const Countribution = ({ramaPriceInUSD,ramaBalanceOfIco}:{ramaPriceInUSD:number|undefined,ramaBalanceOfIco:number|undefined}) => {
    const classes = useStyles();
 
    return (
        <>
            <Box>
                <Box className={classes.heading}>
                    <Box>
                        <Heading heading={`$${ramaPriceInUSD&&ramaBalanceOfIco?ramaBalanceOfIco*ramaPriceInUSD:'1000'}`} />
                    </Box>
                    

                    <Typography sx={{
                         '@media(max-width : 900px)':{
                            fontSize:'24px',
                            '@media(max-width : 600px)':{
                            fontSize:'20px'
                        }
                        }
                    }} variant="h4" fontFamily={'Bruce Forever!important'} color={'#fff'}>Contribution Receive</Typography>
                </Box>

                <Box className={classes.presale}>
                    <Box textAlign={'center'}>
                        <Typography color={'#aaabb2'}>PRIVATE SALE</Typography>
                        <Typography color={'#fff'}>|</Typography>
                    </Box>

                    <Box textAlign={'center'}>
                        <Typography color={'#aaabb2'}>PRE-SALE</Typography>
                        <Typography color={'#fff'}>|</Typography>
                    </Box>

                    <Box textAlign={'center'}>
                        <Typography color={'#aaabb2'}>PUBLIC SALE</Typography>
                        <Typography color={'#fff'}>|</Typography>
                    </Box>
                </Box>
                <Container>
                    {/* <SliderWithProgress/> */}
                    <Box
                        sx={{
                            backgroundColor: '#101012',
                            border: '1px solid #1D1D20',
                            padding: '4px',
                            borderRadius: '30px',
                            marginTop: '1rem'
                        }}
                    >
                        <Box className={classes.grad} />
                    </Box>

                    <Box className={classes.datacount}>
                        <Typography sx={{ '@media(max-width : 600px)': { fontSize: '15px' } }} fontWeight={600} variant="h5" color={'#fff'}>{ramaBalanceOfIco?ramaBalanceOfIco.toFixed(2):0} RAMA raised</Typography>
                        <Typography sx={{ '@media(max-width : 600px)': { fontSize: '15px' } }} fontWeight={600} variant="h5" color={'#fff'}>1 RAMA = ${ramaPriceInUSD?ramaPriceInUSD.toFixed(4):'0.1450'} = {ramaPriceInUSD?(ramaPriceInUSD/0.05).toFixed(4):(0.145/0.05).toFixed(4)} MMCT</Typography>
                    </Box>
                </Container>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            {/* <Box className={classes.dotBox}>
                                <Image src={contribution_shape01} alt="" />
                            </Box> */}

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box>
                                <Box className={classes.btnWrap}>
                                    <Link className={classes.btn} href={"/dashboard"}>
                                        <Typography>Purchase a Token</Typography>
                                    </Link>
                                    <Link className={classes.btn2} href={"ICO MMCT Whitepaper.pdf"} target="_blank">
                                        <Typography>Read White Paper</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            {/* <Box className={classes.dotBox}>
                                <Image src={contribution_shape02} alt="" />
                            </Box> */}
                        </Grid>

                    </Grid>

                </Box>


            </Box>
        </>
    )
}

export default Countribution;