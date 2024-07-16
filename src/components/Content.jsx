import React from 'react'
import {  
    Grid, 
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import SpaIcon from '@mui/icons-material/Spa';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import VisibilityIcon from '@mui/icons-material/Visibility';
// components
import Title from './Title'
import Paragraph from './Paragraph'

const Content = () => {
  return (    
        <Grid container spacing={0}   
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10,
            px: 2,
        }}
        >
            <Grid item xs={12} sm={12} md={5}
            component = 'section'
            >
                <Title
                text={
                    'What We Offer?'
                }
                textAlign={'start'}
                />

                <Typography 
                variant='h6'
                component='h4' 
                sx = {{
                    fontWeight: '400',
                    paddingTop: 1,
                }}
                >
                    Our Face Care Products
                </Typography>

                <Paragraph 
                text={
                    'Our Ayurvedic face care products are trusted by over 5000 customers. \
                    We prioritize quality and natural ingredients to bring you the best skincare solutions.'
                }
                maxWidth = {'75%'}
                mx={0}
                textAlign={'start'}
                />
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                }}>
                    <CardContent>
                        <IconButton>
                            <SpaIcon 
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Anti Blemish Cream
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <CardContent>
                        <IconButton>
                            <Brightness5Icon 
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Whitening Cream
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2}
            sx={{
                display: {xs: 'none', sm: 'block'},
            }}  
            >
                <Card 
                square={ true }
                sx={{ 
                    boxShadow: 'none',
                    minHeight: 180,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    {/* <CardContent>
                        <VisibilityIcon
                        fontSize="large"
                        color="secondary" />
                    </CardContent> */}
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>    
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #ccc'
                }}>
                    <CardContent>
                        <IconButton>
                            <LocalFloristIcon
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Vitamin C Foaming Face Wash
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',                    
                    border: '1px solid #ccc',
                }}
                >
                    <CardContent>
                        <IconButton>
                            <VisibilityIcon 
                            fontSize="large"
                            color="secondary" />
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Under Eye Gel
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Content
