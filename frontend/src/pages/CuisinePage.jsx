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

const CuisinePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h1" gutterBottom>
        Cuisine
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            Experience a culinary journey at our hotel's restaurant. Our chefs use the finest ingredients to create
            mouth-watering dishes that will delight your taste buds. From local specialties to international favorites,
            our menu offers something for everyone.
          </Typography>
          <Typography variant="body1" paragraph>
            Enjoy your meal in our elegant dining room or al fresco on our terrace with a stunning view. Whether you're
            in the mood for a hearty breakfast, a light lunch, or a gourmet dinner, our restaurant is the perfect place
            to satisfy your cravings.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="https://source.unsplash.com/featured/?cuisine" alt="Cuisine" className={classes.image} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CuisinePage;
