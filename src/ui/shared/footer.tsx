import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, styled, Typography } from '@mui/material';
import instagram from '../../icons/instagram.png'
import YouTubeIcon from '@mui/icons-material/YouTube';

import {
    FacebookIcon,
    FacebookShareButton,
} from "react-share";



const BoxSocial = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '1.2rem 0rem',
    padding: '0rem 2rem'
}));

export default function Footer() {




    return (
        <>
            <BoxSocial>


                <FacebookShareButton
                    url={'https://www.facebook.com/profile.php?id=61565893463853'}
                >
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <Link href={'https://www.instagram.com/encryptfund/'} target='_blank'><Image src={instagram} alt={''} width={32} /></Link>

                <Link style={{
                    backgroundColor: 'red',
                    width: '32px',
                    height: '32px',
                    borderRadius: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} href={'https://www.youtube.com/channel/UCAUhJWMLWKtZ1BQbeg1otpg'} target='_blank'><YouTubeIcon sx={{ width: 32, color: '#fff' }} /></Link>



            </BoxSocial>
        </>
    );
}
