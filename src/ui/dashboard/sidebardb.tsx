'use client'


import Link from 'next/link'
import { Box, colors, styled, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { usePathname } from 'next/navigation';
import sideiconl_01 from '../../icons/sideiconl_01.svg'
import sideiconl_02 from '../../icons/sideiconl_02.svg'
import sideiconl_03 from '../../icons/sideiconl_03.svg'
import sideiconl_04 from '../../icons/sideiconl_04.svg'
import sideiconl_05 from '../../icons/sideiconl_05.svg'
import sideiconl_06 from '../../icons/sideiconl_06.svg'
import sideiconl_07 from '../../icons/sideiconl_07.svg'
import sideiconl_08 from '../../icons/sideiconl_08.svg'

import sideicond_01 from '../../icons/sideicond_01.svg'
import sideicond_02 from '../../icons/sideicond_02.svg'
import sideicond_03 from '../../icons/sideicond_03.svg'
import sideicond_04 from '../../icons/sideicond_04.svg'
import sideicond_05 from '../../icons/sideicond_05.svg'
import sideicond_06 from '../../icons/sideicond_06.svg'
import sideicond_07 from '../../icons/sideicond_07.svg'
import sideicond_08 from '../../icons/sideicond_08.svg'
import Image from 'next/image';
import logo from '../../icons/logo.svg'


const useStyles = makeStyles({

    main__list: {
        padding: 15,
        margin: 0,
        listStyle: 'none',

    },
    list__item: {
        marginTop: '1rem',
    },

    mainDiv: {
       
        minHeight: '100vh',
        position: 'fixed',
        top: '0px',
        width:'260px',
        
        '@media(max-width : 1200px)': {
            width:'inherit',
        }
    },
    logo: {
        borderBottom: '1px solid #1e2329',
        display: 'block',
        padding: 15,
        height: '74px',

    },
    im_lg: {
        width: '180px',
        '@media(max-width : 1200px)': {
            width: '180px',
            height:'auto'
        }
    },
    seplink: {
        '@media(max-width : 1200px)': {
            gap: '10',
            padding: '10px'
        }
    }

});



const navLinks = [
    {
        name: 'Home',
        href: '/',
        iconl: sideiconl_01,
        icond: sideicond_01,
    },
    {
        name: 'Earning',
        href: '/earning',
        iconl: sideiconl_06,
        icond: sideicond_06,
    },
    // {
    //     name: 'Calculator',
    //     href: '/calculator',
    //     iconl: sideiconl_02,
    //     icond: sideicond_02,
    // },
    {
        name: 'Leaderboard',
        href: '/leaderboard',
        iconl: sideiconl_03,
        icond: sideicond_03,
    },
    {
        name: 'Referral',
        href: '/referral',
        iconl: sideiconl_04,
        icond: sideicond_04,
    },
    // {
    //     name: 'Transaction',
    //     href: '/transaction',
    //     iconl: sideiconl_05,
    //     icond: sideicond_05,
    // },
    
    {
        name: 'Profile',
        href: '/profile',
        iconl: sideiconl_07,
        icond: sideicond_07,
    },
     
]

const Sidebardb = () => {
    const classes = useStyles();
    const pathname = usePathname()

    return (
        <Box className={classes.mainDiv}>
            <Box>
                <Link className={classes.logo} href={'/'}><Image className={classes.im_lg} src={logo} alt={''} width={280} /></Link>
            </Box>
             
            <Box component={'ul'} className={classes.main__list}>
                {navLinks.map((item, index) => (
                    <Box key={index} component={'li'} className={classes.list__item}>
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: pathname === `${item.href}` ? '#000' : '#fff',
                                fontSize: '18px !important',
                                padding: '10px 14px',
                                backgroundColor: pathname === `${item.href}` ? '#00d632' : '',
                                width: '100%',
                                borderRadius: '30px',
                                transition: '0.5s',
                                display: 'flex',
                                gap: '1rem',

                            }}
                            className={classes.seplink}
                            href={item.href}>

                            <Image src={pathname === `${item.href}` ? item.icond : item.iconl} alt={''} />
                            {item.name}
                        </Link>
                    </Box>
                ))}
            </Box>

        </Box>
    )
}
export default Sidebardb