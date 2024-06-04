import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Masonry from 'react-masonry-css';

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
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
    },
  },
  masonryGrid: {
    display: 'flex',
    marginLeft: '-15px', // gutter size offset
    width: 'auto',
  },
  masonryColumn: {
    paddingLeft: '15px', // gutter size
    backgroundClip: 'padding-box',
  },
}));

const GalleryPage = () => {
  const classes = useStyles();

  const images = [
    'https://source.unsplash.com/featured/?hotel',
    'https://source.unsplash.com/featured/?hotel-room',
    'https://source.unsplash.com/featured/?hotel-lobby',
    'https://source.unsplash.com/featured/?hotel-pool',
    'https://source.unsplash.com/featured/?hotel-dining',
    'https://source.unsplash.com/featured/?hotel-spa',
    'https://source.unsplash.com/featured/?hotel-gym',
    'https://source.unsplash.com/featured/?hotel-restaurant',
    'https://source.unsplash.com/featured/?hotel-luxury',
    'https://source.unsplash.com/featured/?hotel-view',
  ];

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h1" gutterBottom>
        Gallery
      </Typography>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.masonryGrid}
        columnClassName={classes.masonryColumn}
      >
        {images.map((image, index) => (
          <Box key={index} mb={3}>
            <img src={image} alt={`Gallery ${index + 1}`} className={classes.image} />
          </Box>
        ))}
      </Masonry>
    </Container>
  );
};

export default GalleryPage;
