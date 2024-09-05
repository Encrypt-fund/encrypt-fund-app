import Heading from '@/theme/components/heading';
import { Box, Grid, InputBase, Typography, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import document_shape from '../../icons/document_shape.png'
import Link from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import pdf from '../../icons/pdf.svg'

const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: '#00FFFF !important',
    color: '#000 !important',
    padding: '12px 30px',
    display: 'inline-flex',
    textDecoration: 'none',
    fontWeight: '700 !important',
    borderRadius: '5rem',
    transition: '0.5s',
    '&:hover': {
        backgroundColor: '#00FFFF !important',
        color: "#000"
    }
}));

const useStyles = makeStyles({
    hding_image: {
        textAlign: 'end',
        '@media(max-width : 1200px)': {
            textAlign: 'center'
        }
    },
    hding_Text: {
        textAlign: 'center'
    },
    Left__box: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        padding: '2rem',
        borderRadius: '12px',
        height: '100%',
        '@media(max-width : 600px)': {
            padding: '1rem',
        }
    },
    input__box: {
        backgroundColor: '#080808',
        padding: '6px 10px',
        borderRadius: '12px',
        width: '100%',
        border: '1px solid #063939',


    },
    flex__input: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.5rem',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            justifyContent: 'center'
        }

    },
    input__box__2: {
        backgroundColor: '#080808',
        padding: '6px 10px',
        borderRadius: '12px',
        width: '100%',
        marginTop: '1.5rem',
        border: '1px solid #063939'
    },
    send: {
        textAlign: 'center',
        marginTop: '1.5rem'
    },
    pdf__box: {
        backgroundColor: '#080808',
        border: '1px solid #063939',
        padding: '2rem 1rem',
        borderRadius: '12px',
        textAlign: 'center'
    },
    link_box: {
        textAlign: 'center',
        color: '#fff',
        textDecoration: 'none',
        transition: '0.5s',
        '&:hover': {
            color: '#00FFFF'
        }
    },
    touch__main: {
        margin: '3rem 3rem 0rem 3rem',
        '@media(max-width : 600px)': {
            margin: '2rem 1rem 0rem 1rem',
        }
    }
})

const PDF__title = [
    {
        Title: 'Whitepaper',
        link: 'MMCT Whitepaper.pdf'
    },
    {
        Title: 'Token Sale Terms',
        link: 'ICO Whitepaper MMCT.pdf'
    },
    {
        Title: 'Presentation',
        link: ''
    },
    {
        Title: 'Lightpaper',
        link: ''
    },
]

const GetInTouch = () => {
    const classes = useStyles();
    return (
        <>

            <Box>
                <Box className={classes.touch__main}>
                    <Box sx={{ textAlign: 'center', margin: '4rem 0rem 2rem 0rem' }}>
                        <Heading heading={"Have Any Questions?"} />
                        <Box sx={{
                            width: '30%',
                            height: '1px',
                            background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
                            margin: '3rem auto 3rem auto',
                            '@media(max-width : 600px)': {
                                margin: '1.5rem auto 1.5rem auto',
                            }
                        }} />
                    </Box>

                    <Grid container spacing={2}>
                        <Grid item lg={8} md={7} sm={12} xs={12}>
                            <Box className={classes.Left__box}>
                                <Typography sx={{
                                    '@media(max-width : 1200px)': {
                                        fontSize: '24px',
                                        '@media(max-width : 1200px)': {
                                            fontSize: '18px'
                                        }
                                    }
                                }} textAlign={'center'} mb={3} variant='h6' fontFamily={'Bruce Forever!important'} color={'#fff'}>Get In Touch Now</Typography>
                                <Box className={classes.flex__input}>
                                    <Box className={classes.input__box}>
                                        <InputBase
                                            sx={{
                                                flex: 1,
                                                color: '#05B7B8',
                                                width: '100%',
                                                padding: '0.3rem 0.5rem',
                                                ':-moz-placeholder': {
                                                    color: 'fff',
                                                }
                                            }}
                                            fullWidth
                                            placeholder={'Your Name'}
                                            type={''}
                                        />
                                    </Box>
                                    <Box className={classes.input__box}>
                                        <InputBase
                                            sx={{
                                                flex: 1,
                                                color: '#05B7B8',
                                                width: '100%',
                                                padding: '0.3rem 0.5rem',
                                                ':-moz-placeholder': {
                                                    color: 'fff',
                                                }
                                            }}
                                            fullWidth
                                            placeholder={'Your Email'}
                                            type={''}
                                        />
                                    </Box>
                                </Box>
                                <Box className={classes.input__box__2}>
                                    <InputBase
                                        sx={{
                                            flex: 1,
                                            color: '#05B7B8',
                                            width: '100%',
                                            padding: '0.3rem 0.5rem',
                                            ':-moz-placeholder': {
                                                color: 'fff',
                                            }
                                        }}
                                        fullWidth
                                        multiline
                                        rows={10}
                                        placeholder={'Enter you message.....'}
                                        type={''}
                                    />
                                </Box>

                                <Box className={classes.send}>
                                    <StyledLink href={""}>
                                        <Typography color={'#000 !important'}>Send Message</Typography>

                                    </StyledLink>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={4} md={5} sm={12} xs={12}>
                            <Box className={classes.Left__box}>
                                <Typography sx={{
                                    '@media(max-width : 1200px)': {
                                        fontSize: '24px',
                                        '@media(max-width : 1200px)': {
                                            fontSize: '18px'
                                        }
                                    }
                                }} textAlign={'center'} mb={3} variant='h6' fontFamily={'Bruce Forever!important'} color={'#fff'}>Read Documents</Typography>

                                <Grid container spacing={2}>
                                    {PDF__title.map((item, index) => (

                                        <Grid key={index} item lg={6} md={6} sm={6} xs={6}>
                                            <Box>
                                                <Link className={classes.link_box} href={item.link} target='_blank'>
                                                    <Box className={classes.pdf__box}><Image src={pdf} alt='' /></Box>
                                                    <Typography mt={1}>{item.Title}</Typography>
                                                </Link>
                                            </Box>
                                        </Grid>

                                    ))}
                                </Grid>

                                <Box className={classes.send}>
                                    <StyledLink href={""}>
                                        <Typography color={'#000 !important'}>Download All</Typography>
                                    </StyledLink>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}

export default GetInTouch