import React from 'react';
import { 
    Box,
    Divider,
    Grid,
    Stack,
    styled,
    Typography,
    useTheme,
    useMediaQuery
} from '@mui/material';
import architecture from '../assets/architecture.svg';
import interior from '../assets/interior.svg';
import construction from '../assets/construction.svg';
import project from '../assets/project.svg';

const GetStarted = () => {
    const services = [
        { image: architecture, title: 'Architectural Drawings' },
        { image: interior, title: 'Interior Design' },
        { image: project, title: 'Project Management' },
        { image: construction, title: 'Construction' },
    ];

    const ServiceCard = styled(Box)(({ theme }) => ({
        position: 'relative',
        '& img': {
            width: '100%',
            height: 'auto',
            marginBottom: theme.spacing(-1),
        },
        '& .overlay': {
            position: 'absolute',
            bottom: -10,
            left: 0,
            width: '100%',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            padding: theme.spacing(1),
            boxSizing: 'border-box',
        },
    }));

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container justifyContent={'center'} spacing={4}>
            <Grid item xs={12}>
                <Stack direction={'column'} spacing={1} alignItems="center">
                    <Typography sx={{color: '#202020', fontWeight: 'bold', fontSize: 60}}>
                        Services
                    </Typography>
                    <Divider sx={{borderColor : '#F42A40', width: '25%'}}/>
                </Stack>
            </Grid>
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <ServiceCard>
                            <img src={service.image} alt={service.title} />
                            <Box className="overlay">
                                <Typography>{service.title}</Typography>
                            </Box>
                        </ServiceCard>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}

export default GetStarted;
