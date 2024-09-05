import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Link, Typography, styled } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Heading from "@/theme/components/heading";

const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: '#00FFFF !important',
    color: '#000 !important',
    padding: '12px 22px',
    display: 'inline-flex',
    textDecoration: 'none',
    fontWeight: '700 !important',
    borderRadius: '5rem',
    transition: '0.5s',
    '&:hover': {
        trasform:'translateY(-5px)'
    }
}));

const Roadmap__item = [
    {
        title: 'Ledger',
        text: 'Human resources'
    },
    {
        title: 'Colson',
        text: 'Blockchain Developer'
    },
    {
        title: 'Genesis',
        text: 'Visual Designer'
    },
    {
        title: 'Achilles',
        text: 'System administrator'
    },
    {
        title: 'Declan',
        text: 'Finance '
    },
    {
        title: 'Ledger',
        text: 'Human resources'
    },
    {
        title: 'Colson',
        text: 'Blockchain Developer'
    },
    {
        title: 'Genesis',
        text: 'Visual Designer'
    },
     
];

function Brick() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 5,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "10px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "10px",
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "10px",
                }
            }
        ]
    };

    const para="The MumbleChat platform is developed using open source principles, allowing developers from around the world to contribute code, suggest improvements, and participate in the platform's evolution. - Contributions to the MumbleChat project are welcomed and encouraged, fostering a collaborative and inclusive development enviroment."
    return (
        <Box className="slider-container">
             
                <Box sx={{ textAlign: 'center', margin: '4rem 1rem 2rem 1rem' }}>
                <Heading heading={"Meet the Brick Veneers"} />
                <Typography mt={2} color={'#fff'}>{para}</Typography>
                <Box sx={{
                    width: '30%',
                    height: '1px',
                    background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
                    margin: '3rem auto 3rem auto',
                    '@media(max-width : 600px)':{
                        margin: '1.5rem auto 1.5rem auto', 
                    }
                }} />
            </Box>
                    <Slider {...settings}>
                        {Roadmap__item.map((item, index) => (
                            <Box key={index}>
                                <Box sx={{ margin: '0rem 1rem' }}>
                                    <Box sx={{ textAlign: 'center',
                                        backgroundColor:'#101012',
                                        border:'1px solid #1D1D20',
                                        padding:'10px',
                                        borderRadius:'12px'
                                     }}>
                                        <Typography 
                                            fontFamily={'Bruce Forever!important'}
                                            variant="h6" color={'#fff'}>
                                            {item.title}
                                        </Typography>
                                        <Typography color={'#92939e'}>{item.text}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                        <StyledLink href={"/dashboard"}>
                            <Typography color={'#000 !important'}>Purchase a Token</Typography>
                        </StyledLink>
                    </Box>
                 
        </Box>
    );
}

export default Brick;
