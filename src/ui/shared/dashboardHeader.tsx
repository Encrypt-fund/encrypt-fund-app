'use client'
import { Box, styled, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import disconnect from '../../icons/disconnect.svg'
import DashboardSidebar from "./dashboardSidebar";
import backbtn from '../../icons/backbtn.svg'
import { useAccountModal, useChainModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import ConnectWallet from "./connectWallet";

const useStyles = makeStyles({

    mainDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2b3139',
        padding: '10px 40px',
        height: '74px',
        position: 'sticky',
        backgroundColor: '#1e2329',
        zIndex: '100',
        top: '0px',
        '@media(max-width : 900px)': {
            padding: '10px 20px',
            flexDirection: 'row-reverse'
        }
    },
    dis__connect: {
        display: 'block'
    },
    bthome: {
        color: '#fff',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor:'transparent !important'
    },
    texthdr: {
        '@media(max-width : 900px)': {
            display: 'none'
        }
    },
    texthdrBox:{
display:'flex',
gap:'1rem',
alignItems:'center'
    }

});

const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: '#101012',
    border: '1px solid #2b3139',
    color: '#fff',
    padding: "13px 16px",
    borderRadius: '36px',
    display: 'block',
    textDecoration: 'none',
    fontSize: '14px !important'
}));

const DashboardHeader = () => {
    const classes = useStyles();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    const router = useRouter()

    const { isDisconnected } = useAccount();

    // useEffect(() => {
    //     if (isDisconnected) {
    //         router.push("/")
    //     }
    // }, [isDisconnected])
    return (
        <>
            <Box className={classes.mainDiv}>
                <Box sx={{ display: 'none', '@media(max-width : 900px)': { display: 'block' } }}>
                    <DashboardSidebar />
                </Box>
                {/* <Box sx={{'@media(max-width : 1200px)':{display:'none'}}}><Link className={classes.bthome} href={"/"}><Image src={backbtn} alt={""} /><Typography color={'#fff'} sx={{'@media(max-width : 600px)':{display:'none'}}}>Back to home</Typography></Link></Box> */}
                <Box className={classes.texthdr}><Typography fontSize={20} fontWeight={300} color={'#fff'}>Welcome to Encryptfund</Typography></Box>
             
                    

                       {/* {openChainModal &&
                        <StyledLink onClick={openChainModal} href={"#"}>

                        <Box m={0} component={'p'}>Wrong network</Box>
                    </StyledLink> 
                  } */}
                     
                        

                    {/* {openAccountModal &&
                        <Link onClick={openAccountModal} href={""}>
                        <Image src={disconnect} alt={""} className={classes.dis__connect} />
                    </Link>
                    } */}
                    <ConnectWallet/>
                 
            </Box>
        </>
    )
}

export default DashboardHeader