"use client"
import { Box, IconButton, Snackbar, Typography, styled } from "@mui/material";
import copy from 'clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";
import React, { useState } from "react";
import { useAccount } from "wagmi";

interface props {
    text: string;
    textColor?: string;
    addresstext: string;
    hrefLink: string;
    
}
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'inherit',
    borderRadius: '8px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#000 !important',
    fontWeight: 500,
    fontSize:'17px !important',
    '@media(max-width : 600px)':{
            fontSize:'13px !important',
        }
}));

const AddressCopy = ({ text,textColor, addresstext, hrefLink  }: props) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const { address } = useAccount();
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
                <StyledLink sx={{color: textColor}} href={hrefLink} target="_black">
                    {addresstext}
                </StyledLink>

                <Box onClick={handleCopy}>
                    <ContentCopyIcon sx={{ color: textColor, width: 18 }} />
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

export default AddressCopy;