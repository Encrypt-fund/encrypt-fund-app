import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Heading from "@/theme/components/heading";
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import dot from '../../icons/dot.svg'

const useStyles = makeStyles({
    box_text: {
        backgroundColor: '#fff',
        width: '12px',
        height: '12px',
        borderRadius: '30px',
    },
    box_text_wrap: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '6px',

    }

})

const Roadmap__item = [
    {
        top__Title: 'Q2 2024',
        title: 'Launch of EF ICO',
        point1: 'Begin initial marketing and outreach for the ICO.',
        point2: 'Develop ICO smart contracts and platform.',
        point3: '',
        point4: '',
    },
    {
        top__Title: 'Q3 2024',
        title: 'Completion of ICO All Phases',
        point1: 'Execute ICO marketing campaigns.',
        point2: 'Conduct public and private sale phases.',
        point3: 'Finalize token distribution and allocation.',
        point4: '',
    },
    {
        top__Title: 'Q4 2024',
        title: 'Launch EF Platform',
        point1: 'Develop and test the EF platform.',
        point2: 'Implement necessary security measures.',
        point3: 'Ensure compliance with regulations.',
        point4: 'Launch the EF platform to the public.',
    },
    {
        top__Title: 'Q1 2025',
        title: 'Integration',
        point1: 'Foster partnerships and collaborations.',
        point2: 'Integrate EF into existing financial systems and services.',
        point3: 'Enhance platform functionality based on user feedback.',
        point4: 'Continuously improve security and scalability of the platform.',
    },
    {
        top__Title: 'Q2 2025',
        title: 'User Engagement Rewards',
        point1: 'Implement a reward system to incentivize user engagement on the EF platform.',
        point2: 'Reward users for actions such as transactions, referrals, and active participation in the community.',
        point3: 'Design and launch reward programs to encourage long-term user retention and loyalty.',
        point4: '',
    },
    {
        top__Title: 'Q3 2025',
        title: 'Voice Call Feature',
        point1: 'Develop and integrate a voice call feature into the EF platform.',
        point2: 'Enable users to make voice calls securely within the platform using encryption protocols.',
        point3: 'Enhance communication capabilities for users to facilitate real-time interactions and collaboration.',
        point4: '',
    },
    {
        top__Title: 'Q4 2025',
        title: 'Video Call Feature',
        point1: 'Implement a video call feature on the EF platform, allowing users to conduct video calls seamlessly.',
        point2: 'Ensure high-quality video streaming and encryption for secure communication.',
        point3: 'Integrate additional features such as screen sharing and group video calls to enhance user experience and collaboration.',
        point4: '',
    },
    {
        top__Title: 'Q1 2026',
        title: 'Optimization and Feedback',
        point1: 'Gather user feedback on the newly implemented features, including user engagement rewards, voice calls, and video calls.',
        point2: 'Analyze usage data and user feedback to identify areas for optimization and improvement.',
        point3: 'Iteratively enhance the platform based on user insights and technological advancements.',
        point4: '',
    },
    {
        top__Title: 'Q2 2026',
        title: 'Global Expansion',
        point1: 'Explore opportunities for global expansion and market penetration.',
        point2: 'Identify key markets for EF adoption and develop localized strategies for user acquisition and engagement.',
        point3: 'Expand language support and customer service to cater to diverse user demographics worldwide.',
        point4: '',
    },
    {
        top__Title: 'Q3 2026',
        title: 'Community Building and Education',
        point1: 'Strengthen community engagement through educational initiatives, webinars, and workshops.',
        point2: 'Empower users with knowledge about blockchain technology,cryptocurrency, and the EF platform.',
        point3: 'Foster a supportive and informed community to drive platform growth and adoption.',
        point4: '',
    },
    {
        top__Title: 'Q4 2026',
        title: 'Continuous Innovation',
        point1: 'Invest in research and development to stay at the forefront of technological innovation.',
        point2: "Explore emerging technologies such as AI, IoT, and decentralized finance (DeFi) to enhance the EF platform's capabilities.",
        point3: 'Collaborate with industry partners and academic institutions to drive innovation and create value for EF users.',
        point4: '',
    },
];

function Roadmap() {
    const classes = useStyles();
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: isMdUp ? 3 : isSmUp ? 2 : 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,




        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: "40px",
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                }
            }
        ]
    };

    return (
        <Box className="slider-container" sx={{ padding: '0 20px' }}>
            <Box sx={{ textAlign: 'center', margin: '4rem 0rem 2rem 0rem' }}>
                <Heading heading={"Our Roadmap"} />
                <Box sx={{
                    width: '50%',
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
                            <Typography color={'#92939e'}>{item.top__Title}</Typography>
                            <Box
                                sx={{
                                    border: '1px solid #1D1D20',
                                    padding: '1rem',
                                    alignItems: 'center',
                                    borderRadius: '20px',
                                    backgroundColor: '#101012',
                                    marginTop: '3rem',
                                    height: 'auto',
                                     
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '1px',
                                        height: '120px',
                                        backgroundColor: '#292a37',
                                        marginTop: '-4rem',
                                        marginLeft: '1.2rem'
                                    }}
                                />
                                <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <Box sx={{
                                        backgroundColor: '#ffffff1c',
                                        padding: '5px',
                                        display: 'inline-block',
                                        borderRadius: '5rem'
                                    }}>
                                        <Box sx={{
                                            background: 'linear-gradient(180deg, #080808, #08080880, #00FFFF)',
                                            padding: '8px',
                                            borderRadius: '6rem',
                                            width: '30px',
                                            height: '30px'
                                        }} />
                                    </Box>
                                    <Box>

                                        <Typography variant="h5" color={'#fff'}>{item.title}</Typography>
                                    </Box>
                                </Box>
                                <Box className={classes.box_text_wrap}>
                                    <Box>
                                        <Image src={dot} alt={""} />
                                    </Box>
                                    <Box><Typography mt={2} color={'#92939e'}>{item.point1}</Typography></Box>
                                </Box>
                                <Box className={classes.box_text_wrap}>
                                    <Box>
                                        <Image src={dot} alt={""} />
                                    </Box>
                                    <Typography mt={2} color={'#92939e'}>{item.point2}</Typography>
                                </Box>
                                <Box className={classes.box_text_wrap}>
                                    <Box>
                                        <Image src={dot} alt={""} />
                                    </Box>
                                    <Typography mt={2} color={'#92939e'}>{item.point3}</Typography>
                                </Box>
                                <Box className={classes.box_text_wrap}>
                                    <Box>
                                        <Image src={dot} alt={""} />
                                    </Box>
                                    <Typography mt={2} color={'#92939e'}>{item.point4}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Roadmap;
