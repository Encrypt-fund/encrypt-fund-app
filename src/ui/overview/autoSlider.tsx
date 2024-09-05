


import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from '../../icons/brand_img01.svg'
import brand2 from '../../icons/brand_img02.svg'
import brand3 from '../../icons/brand_img03.svg'
import brand4 from '../../icons/brand_img04.svg'
import brand5 from '../../icons/brand_img05.svg'
import Image from 'next/image';
import Heading from '@/theme/components/heading';

const logos = [
  {
    brand: brand1,
  },
  {
    brand: brand2,
  },
  {
    brand: brand3,
  },
  {
    brand: brand4,
  },
  {
    brand: brand5,
  },
  {
    brand: brand1,
  },
  {
    brand: brand2,
  },
  {
    brand: brand3,
  },
  {
    brand: brand4,
  },
  {
    brand: brand5,
  },

  // Add more paths to your logo images here
];

const SliderWrapper = styled(Box)(({ theme }) => ({
  '.slick-slide': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '& img': {
      maxHeight: '80px',
      maxWidth: '100px',
    },
  },
}));

const AutoSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
       
    ]
  };

  return (
    <Container>
      <Box textAlign={'center'}>      <Heading heading={"Our Top Partner"} /> </Box>
      <Box sx={{
        width: '50%',
        height: '1px',
        background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
        margin: '3rem auto 3rem auto',
        '@media(max-width : 600px)':{
                        margin: '1.5rem auto 1.5rem auto', 
                    }
      }} />
      <SliderWrapper>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box key={index}>
              <Image src={logo.brand as any} alt={''} />
            </Box>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

export default AutoSlider;

