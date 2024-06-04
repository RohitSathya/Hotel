import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
  hero: {
    position: 'relative',
    height: '600px',
    background: 'url(https://source.unsplash.com/featured/?luxury-hotel) center/cover no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: theme.spacing(1),
  },
  heroText: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  feature: {
    marginTop: theme.spacing(3),
    textAlign: 'left',
  },
  featureImage: {
    width: '100%',
    borderRadius: theme.spacing(1),
  },
  featureText: {
    marginTop: theme.spacing(1),
  },
  testimonials: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
  },
  testimonialText: {
    fontStyle: 'italic',
  },
  parallax: {
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '2rem',
    marginTop: theme.spacing(4),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.hero}>
        <Box className={classes.overlay}></Box>
        <Box className={classes.heroText}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Our Luxury Hotel
          </Typography>
          <Typography variant="h5" component="p">
            Experience the finest hospitality and comfort.
          </Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary" size="large">
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>

      <Grid container spacing={3} className={classes.feature}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <img
              src="https://source.unsplash.com/featured/?hotel-room"
              alt="Hotel Room"
              className={classes.featureImage}
            />
            <Typography variant="h5" component="h2" className={classes.featureText}>
              Luxurious Rooms
            </Typography>
            <Typography variant="body1">
              Our rooms offer a perfect blend of luxury and comfort with stunning views and modern amenities.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <img src="https://source.unsplash.com/featured/?hotel-spa" alt="Spa" className={classes.featureImage} />
            <Typography variant="h5" component="h2" className={classes.featureText}>
              Relaxing Spa
            </Typography>
            <Typography variant="body1">
              Indulge in our spa services and experience ultimate relaxation and rejuvenation.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <img
              src="https://source.unsplash.com/featured/?hotel-dining"
              alt="Dining"
              className={classes.featureImage}
            />
            <Typography variant="h5" component="h2" className={classes.featureText}>
              Exquisite Dining
            </Typography>
            <Typography variant="body1">
              Savor delicious cuisines from around the world at our in-house restaurant.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box className={classes.testimonials}>
        <Typography variant="h4" component="h2" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography className={classes.testimonialText} variant="body1">
                "An unforgettable experience! The service was impeccable and the rooms were stunning."
              </Typography>
              <Typography variant="subtitle1" align="right">
                - John Doe
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography className={classes.testimonialText} variant="body1">
                "The best hotel I've ever stayed at. Everything was perfect from start to finish."
              </Typography>
              <Typography variant="subtitle1" align="right">
                - Jane Smith
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography className={classes.testimonialText} variant="body1">
                "Luxury redefined. I can't wait to come back again."
              </Typography>
              <Typography variant="subtitle1" align="right">
                - Emily Johnson
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box
        className={classes.parallax}
        style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?hotel-pool)' }}
      >
        <Typography variant="h3">Relax by the Pool</Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
