import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(8),
  },
  card: {
    marginBottom: theme.spacing(3),
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 140,
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
  list: {
    marginTop: theme.spacing(2),
  },
}));

const MenusPage = () => {
  const classes = useStyles();

  const menuData = [
    {
      category: 'Breakfast',
      icon: <BreakfastDiningIcon className={classes.icon} />,
      image: 'https://source.unsplash.com/featured/?breakfast',
      items: [
        { name: 'Pancakes', description: 'Fluffy pancakes served with syrup' },
        { name: 'Omelette', description: 'Cheese and ham omelette' },
        { name: 'Fruit Salad', description: 'Fresh seasonal fruits' },
      ],
    },
    {
      category: 'Lunch',
      icon: <LunchDiningIcon className={classes.icon} />,
      image: 'https://source.unsplash.com/featured/?lunch',
      items: [
        { name: 'Caesar Salad', description: 'Classic Caesar salad with grilled chicken' },
        { name: 'Club Sandwich', description: 'Triple-decker sandwich with fries' },
        { name: 'Pasta Primavera', description: 'Pasta with fresh vegetables' },
      ],
    },
    {
      category: 'Dinner',
      icon: <DinnerDiningIcon className={classes.icon} />,
      image: 'https://source.unsplash.com/featured/?dinner',
      items: [
        { name: 'Steak', description: 'Grilled steak with mashed potatoes' },
        { name: 'Seafood Platter', description: 'Assorted seafood with dipping sauces' },
        { name: 'Vegetarian Curry', description: 'Spicy vegetable curry with rice' },
      ],
    },
  ];

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h1" gutterBottom>
        Menus
      </Typography>
      <Grid container spacing={3}>
        {menuData.map((menu) => (
          <Grid item xs={12} md={4} key={menu.category}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={menu.image} title={menu.category} />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {menu.icon} {menu.category}
                </Typography>
                <List className={classes.list}>
                  {menu.items.map((item) => (
                    <ListItem key={item.name}>
                      <ListItemText primary={item.name} secondary={item.description} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MenusPage;
