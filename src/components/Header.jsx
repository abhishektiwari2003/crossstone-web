import React from 'react';
import { Box, Container, Grid, Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
// img
import crossstoneBg from '../assets/crossstoneBg.svg';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const RootStyle = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(10),
        backgroundColor: 'white',
        backgroundImage: `url(${crossstoneBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
            zIndex: 1,
        },
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            paddingTop: theme.spacing(5),
        }
    }));

    const ContentStyle = styled(Container)(({ theme }) => ({
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMobile ? 'center' : 'flex-start',
        color: '#FFFFFF',
        marginTop: '-64px',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            textAlign: 'center',
            padding: theme.spacing(2),
        }
    }));

    return (
        <RootStyle component='header' sx={{mb: 12}}>
            <ContentStyle>
                <Stack direction={isMobile ? 'column' : 'row'} spacing={isMobile ? 2 : 8}>
                    <Grid container direction='column' alignItems={isMobile ? 'center' : 'flex-start'}>
                        <Typography sx={{ fontSize: { xs: 40, md: 60 }, fontWeight: 'bold', color: '#FFFFFF', mb: 0 }}>
                            Construct Your
                        </Typography>
                        <Typography sx={{ fontSize: { xs: 50, md: 85 }, fontWeight: 'bold', color: '#F42A40', mt: 0 }}>
                            Dream Home
                        </Typography>
                        <Typography sx={{ fontSize: { xs: 18, md: 23 }, fontWeight: '600', color: '#FFFFFF', mt: 1 }}>
                            Building Your Vision, Crafting Your Dreams.<br />
                            Reliable Construction for a Stronger Future.
                        </Typography>
                    </Grid>
                    <Box 
                        sx={{
                            height: { xs: 401, md: 401 },
                            width: { xs: '100%', md: 750 },
                            backgroundColor: 'white',
                            marginTop: isMobile ? 2 : 0,
                            borderRadius: 5
                        }}
                    />
                </Stack>
            </ContentStyle>
        </RootStyle>
    )
}

export default Header;
