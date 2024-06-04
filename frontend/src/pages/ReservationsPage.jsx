import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(8),
  },
}));

const ReservationsPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h1" gutterBottom>
        Reservations
      </Typography>
      <Typography variant="body1" paragraph>
        Book your stay with us today. Fill out the form below to check availability and make a reservation.
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField label="Name" fullWidth margin="normal" />
            <TextField label="Email" fullWidth margin="normal" />
            <TextField label="Phone" fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Check-in Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField
              label="Check-out Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <TextField label="Number of Guests" fullWidth margin="normal" />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Reserve
        </Button>
      </form>
    </Container>
  );
};

export default ReservationsPage;
