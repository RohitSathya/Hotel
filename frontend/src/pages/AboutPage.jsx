import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(6),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
    marginTop: theme.spacing(8),
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  image: {
    width: '100%',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
  },
  section: {
    margin: theme.spacing(6, 0),
  },
  card: {
    backgroundColor: '#ffffff',
    boxShadow: theme.shadows[3],
    borderRadius: theme.spacing(2),
    textAlign: 'left',
    padding: theme.spacing(2),
  },
  cardMedia: {
    height: 200,
  },
  divider: {
    margin: theme.spacing(4, 0),
  },
  header: {
    fontFamily: 'Georgia, serif',
    fontSize: '2.5rem',
  },
  subheader: {
    fontFamily: 'Georgia, serif',
    fontSize: '2rem',
  },
  body: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '1.25rem',
  },
}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.header} variant="h2" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography className={classes.body} variant="body1" paragraph>
        Welcome to our luxurious hotel, where comfort meets elegance. Located in the heart of the city, our hotel offers a perfect blend of modern amenities and traditional hospitality.
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/featured/?hotel-room"
              title="Luxurious Rooms"
            />
            <CardContent>
              <Typography className={classes.subheader} variant="h5" component="h2" gutterBottom>
                Luxurious Rooms
              </Typography>
              <Typography className={classes.body} variant="body1" paragraph>
                Our rooms are designed to provide you with the utmost comfort and relaxation. Whether you're here for business or leisure, our dedicated staff is always ready to assist you with all your needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/featured/?spa"
              title="Tranquil Spa"
            />
            <CardContent>
              <Typography className={classes.subheader} variant="h5" component="h2" gutterBottom>
                Tranquil Spa
              </Typography>
              <Typography className={classes.body} variant="body1" paragraph>
                Our hotel features a state-of-the-art fitness center, a tranquil spa, and an exquisite dining experience at our on-site restaurant. We are committed to making your stay memorable and enjoyable.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.section}>
        <Grid item xs={12} md={6}>
          <Typography className={classes.subheader} variant="h4" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography className={classes.body} variant="body1" paragraph>
            To provide unparalleled hospitality and comfort to our guests, ensuring a memorable and delightful stay. We strive to exceed expectations and deliver exceptional service at every touchpoint.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="https://source.unsplash.com/featured/?cityscape" alt="Cityscape" className={classes.image} />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography className={classes.subheader} variant="h4" component="h2" gutterBottom>
        Our Team
      </Typography>
      <Typography className={classes.body} variant="body1" paragraph>
        Our dedicated and professional team is committed to ensuring your stay is nothing short of exceptional. With a passion for hospitality and a keen eye for detail, we are here to cater to your every need.
      </Typography>
    </Container>
  );
};

export default AboutPage;
