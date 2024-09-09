import shortenString from "@/lib/shortenString";
import AddressCopy from "@/theme/components/addressCopy";
import Modal from "@/theme/components/modal";
import { Box } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import { Address } from "viem";

import { useAccount } from "wagmi";


const useStyles = makeStyles({

    ref__link: {
        backgroundColor: '#00d632!important',
        padding: '0.5rem 1rem',
        borderRadius: '0px 0px 8px 8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
        '@media(max-width : 1200px)': {
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
    },


});

const RefBottom = () => {
    const classes = useStyles();
    const { address } = useAccount();
    return (
        <>
            <Box className={classes.ref__link}>
                 <AddressCopy hrefLink={`https://ico.encryptfund.com/dashboard/?ref=${address}`}  text={`https://ico.encryptfund.com/dashboard/?ref=${address}`} addresstext={`https://ico.encryptfund.com/dashboard/?ref=${shortenString(address as Address)}`} /> 
                <Modal />
            </Box>
        </>
    )
}

export default RefBottom