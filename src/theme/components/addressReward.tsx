"use client"
import { Box, IconButton, Snackbar, Typography, styled } from "@mui/material";
import copy from 'clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";
import React, { useState } from "react";

interface props {
    text: any;
    address: any;
    textColor?:string;
}
const StyledBox = styled(Box)(({ theme }) => ({
    // display: 'flex',
    // alignItems: 'center',
    // gap: '10px',
    // justifyContent: 'space-between',
    // borderRadius: '8px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#00d632',
    backgroundColor:'#000',
    padding:'10px',
    display:'block',
    textAlign:'center',
    fontWeight: 300,
    fontSize:'17px !important',
    '@media(max-width : 600px)':{
            fontSize:'13px !important',
        }
}));

const AddressReward = ({ text, address,textColor  }: props) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleCopy = () => {
        copy(text);
        setOpenSnackbar(true);
        // alert('Text copied to clipboard!');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <StyledBox>
                <StyledLink href={'#'}>
                    {address}
                </StyledLink>

                <Box sx={{justifyContent:'center', display:'flex', marginTop:'1.5rem'}}>
                <Box
                sx={{
                    backgroundColor:'#00d632',
                    padding:'1rem',
                    borderRadius:'30px',
                    display:'flex',
                    width:'220px',
                    gap:'10px',
                    alignItems:'center',
                    justifyContent:'center',
                    cursor:'pointer',
                }}
                 onClick={handleCopy}>
                    <Typography color={textColor} fontWeight={500}>Copy Referral Link</Typography>
                    <ContentCopyIcon sx={{ color: textColor, width: 18 }} />
                </Box>
                </Box>
                <Snackbar

                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message="Address copied"

                />
            </StyledBox>
        </>
    );
};

export default AddressReward;