import Text from '@/theme/components/text';
import { Box, Grid, InputBase, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Link from 'next/link';
import telegram from '../../icons/telegram.svg'



const useStyles = makeStyles({
    list__item: {
        color: '#fff',
        textDecoration: 'none',
        transition: '0.5s',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    listBox: {
        marginTop: '1rem'
    },
    list:{
        margin:0,
        padding:0,
        listStyle:'none'
    },
    input__box: {
        backgroundColor: '#080808',
        padding: '0px 0px 0px 10px',
        borderRadius: '12px',
        width: '100%',
        display:'flex',
        alignItems:'center',
        marginTop:'1.5rem',
        border:'1px solid #063939'

    },
    tele:{
        backgroundColor:'#00FFFF',
        display:'inline-block',
        padding:'0.8rem 1rem',
        borderRadius:'12px'
    },
    line:{
        width: '70%',
        margin:'auto',
    height: '1px',
    background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
    },
    box__listAlign:{

        '@media(max-width : 600px)':{
            textAlign:'center'
        }
    },
    heading__align:{
        '@media(max-width : 600px)':{
            fontSize:'20px'
        }
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <>
          <Box sx={{
                background: 'linear-gradient(0deg, #02b3b300, #02b3b317, #02B3B3)',
                margin: '-10rem 2rem 0rem 2rem',
                padding: '15rem 1rem 0rem 1rem',
                borderRadius: '12px',
            }}>
          <Box className={'bnrbg3'}>
                <Grid container spacing={2}>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Box className={classes.box__listAlign}>
                            <Typography className={classes.heading__align} variant='h5' color={'#fff'}>USEFULL LINKS</Typography>
                            <Box className={classes.list} component={'ul'}>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Contact us</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">How it Works</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Create</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Explore</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Terms & Services</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Box className={classes.box__listAlign}>
                            <Typography className={classes.heading__align} variant='h5' color={'#fff'}>SOLUTIONS</Typography>
                            <Box className={classes.list} component={'ul'}>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Token Suite</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Ecosystem</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Investment</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Portal</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Tokenization</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Box className={classes.box__listAlign}>
                            <Typography className={classes.heading__align} variant='h5' color={'#fff'}>USEFULL LINKS</Typography>
                            <Box className={classes.list} component={'ul'}>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Help Center</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Partners</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Suggestions</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Blog</Link>
                                </Box>
                                <Box className={classes.listBox} component={'li'}>
                                    <Link className={classes.list__item} href="">Newsletters</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Box className={classes.box__listAlign}>
                            <Typography className={classes.heading__align} variant='h5' color={'#fff'}>SUBSCRIBE NEWSLETTER</Typography>
                            <Typography mt={2} color={'#fff'}>Subscribe now to get the latest updates</Typography>
                            <Box className={classes.input__box}>
                                        <InputBase
                                            sx={{
                                                flex: 1,
                                                color: '#fff',
                                                width: '100%',
                                                padding: '0.3rem 0.5rem',
                                                ':-moz-placeholder': {
                                                    color: 'fff',
                                                }
                                            }}
                                            fullWidth
                                            placeholder={'info@gmail.com'}
                                            type={''}
                                        />
                                        <Link className={classes.tele} href={''}><Image  src={telegram} alt={''} width={30} style={{display:'block'}}/></Link>
                                    </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{padding:'3rem 0rem 0rem 0rem',
                    '@media(max-width : 600px)':{
                        padding:'2rem 0rem 0rem 0rem'
                    }
                 }}>
                <Box className={classes.line}/>
                </Box>
                <Box sx={{
                    '@media(max-width : 600px)':{
                        paddingBottom:'1rem'
                    }
                }} pt={4} pb={4} textAlign={'center'}>
                    <Typography color={'#fff'}>Copyright © 2024 mumblechat.com. All rights reserved.</Typography>
                </Box>
            </Box>
          </Box>
        </>
    )
}

export default Footer;