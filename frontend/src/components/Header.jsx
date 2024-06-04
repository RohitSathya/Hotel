import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#FFD700',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  navLink: {
    color: 'inherit',
    textDecoration: 'none',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    fontSize: '1.25rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
      marginBottom: theme.spacing(1),
      fontSize: '1rem',
    },
  },
  menuButton: {
    fontSize: '2rem',
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
      <List>
        {['HOME', 'ABOUT', 'CUISINE', 'MENUS', 'RESERVATIONS', 'PRIVATE DINING', 'GALLERY', 'CONTACT'].map(
          (text) => (
            <ListItem button key={text} onClick={handleDrawerToggle}>
              <ListItemText>
                <Link to={`/${text.toLowerCase().replace(' ', '-')}`} className={classes.navLink}>
                  {text}
                </Link>
              </ListItemText>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" className={classes.title}>
              Chicago Foods
            </Typography>
            {drawer}
          </>
        ) : (
          <>
            <Typography variant="h4" component="div" className={classes.title}>
              Chicago Foods
            </Typography>
            <Box className={classes.navLinks}>
              <Button color="inherit">
                <Link to="/" className={classes.navLink}>
                  HOME
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/about" className={classes.navLink}>
                  ABOUT
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/cuisine" className={classes.navLink}>
                  CUISINE
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/menus" className={classes.navLink}>
                  MENUS
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/reservations" className={classes.navLink}>
                  RESERVATIONS
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/private-dining" className={classes.navLink}>
                  PRIVATE DINING
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/gallery" className={classes.navLink}>
                  GALLERY
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/contact" className={classes.navLink}>
                  CONTACT
                </Link>
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
