import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(8),
  },
  image: {
    width: '100%',
    borderRadius: theme.spacing(1),
  },
}));

const PrivateDiningPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h1" gutterBottom>
        Private Dining
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            For a more intimate dining experience, book our private dining room. Perfect for special occasions, business
            meetings, or a quiet meal with family and friends, our private dining room offers an exclusive setting with
            personalized service.
          </Typography>
          <Typography variant="body1" paragraph>
            Our chef will work with you to create a customized menu that suits your tastes and preferences. Enjoy the
            privacy and luxury of your own dining space, with all the amenities and attention to detail that our hotel
            is known for.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://source.unsplash.com/featured/?private-dining"
            alt="Private Dining"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PrivateDiningPage;
