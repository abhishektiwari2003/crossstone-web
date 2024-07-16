import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'

const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'nature1',
            url: 'https://images.pexels.com/photos/355284/pexels-photo-355284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            alt: 'nature2',
            url: 'https://images.pexels.com/photos/213785/pexels-photo-213785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            alt: "nature3",
            url: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            alt: "nature4",
            url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            alt: "nature5",
            url: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));

    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Our Natural Gallery'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Nature Inspired
                </Typography>
                <Paragraph text={
                    'Explore our gallery to see the natural ingredients and inspiration behind our Ayurvedic face care products. \
                    We believe in the power of nature to bring out your natural beauty.'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery
