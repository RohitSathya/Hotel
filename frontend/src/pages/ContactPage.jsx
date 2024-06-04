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

const ContactPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        Have questions or need assistance? Get in touch with us by filling out the form below.
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
              label="Message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactPage;
