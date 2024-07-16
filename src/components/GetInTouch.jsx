import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Get in Touch with Velovita'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Experience the best of Ayurvedic cosmetic products with Velovita. \
                Whether you are looking for premium face care, hair care, body care, or wellness products, \
                we are here to assist you. \
                Click the button below to contact us and start your journey towards natural beauty and wellness.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                Get in Touch
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;
