'use client'


import Link from 'next/link'
import { Box, colors, styled, Typography } from '@mui/material'
import { usePathname } from 'next/navigation';
import ConnectWallet from './connectWallet';
import { useAccount } from 'wagmi';




const LinkStyled = styled(Link)(({ theme }) => ({
    color: '#fff',

    ':hover': {
        color: '#fbd8af'
    }

}));

const LoginStyled = styled(Link)(({ theme }) => ({
    backgroundColor: '#fbd8af !important',
  color: '#000 !important',
  padding: '14px 22px !important',
  display: 'inline-flex',
  textDecoration: 'none',
  fontWeight: '700 !important',
  borderRadius: '5rem !important',
  transition: '0.5s',
    ':hover': {
        transform: 'translateY(-5px)'
    },
     
}));

const ListBox = styled('ul')(({ theme }) => ({
    padding: 8,
    listStyle: 'none',
    display: 'inline-flex',
    gap: '0.5rem',
    backgroundColor: '#101012',
    border: '1px solid #2b3139',
    borderRadius: '5rem',
    '@media(max-width : 1200px)': {
        display: 'inherit',
        backgroundColor: 'transparent',
        border: 'none'
    }

}));

const ListItem = styled('li')(({ theme }) => ({
    'a': {
        padding: '4px 14px',
        display: 'inline-block',
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
        borderRadius: '6px',
        width: 'max-content',
        '@media(max-width : 1200px)': {
            padding: '4px 10px',
            marginTop: '1rem'
        }
    }
}));

const BoxConnect = styled(Box)(({ theme }) => ({
    display: 'none',
    '@media(max-width : 600px)': {
        display: 'block',

    }
}));

const navLinks = [
    {
        name: 'Overview',
        href: '/'
    },
    {
        name: 'Validators',
        href: '/validators'
    },
    {
        name: 'Delegator',
        href: '/delegator'
    },
    {
        name: 'My Account',
        href: '/account'
    },
    {
        name: 'History',
        href: '/history'
    },
]

const Navbar = () => {
    const { address, isConnected } = useAccount()
    const pathname = usePathname()

    return (
        <Box>
            <ListBox>
                <ListItem>
                    <LinkStyled
                        href="/">
                        Home
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled
                        href="/#partner"
                    >
                        Our Partner
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled
                        href="/#chart"
                    >
                        ICO Chart
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled
                        href="/#roadmap"
                    >
                        Roadmap
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled
                        href="/#faq"
                    >
                        FAQs
                    </LinkStyled>
                </ListItem>

                <ListItem>
                    <LinkStyled
                        href="/#contact"
                    >
                        Contact
                    </LinkStyled>
                </ListItem>

                <ListItem>
                    <BoxConnect>
                        {address &&
                            <LoginStyled
                                href={"/dashboard"}>
                                <Typography>Dashboard</Typography>
                            </LoginStyled>
                        }
                        <Box mt={2}/>
                        <ConnectWallet />
                    </BoxConnect>
                </ListItem>

            </ListBox>

        </Box>
    )
}
export default Navbar