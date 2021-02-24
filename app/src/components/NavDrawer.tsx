import {
  Avatar,
  Container,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  SwipeableDrawer, SwipeableDrawerProps,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import FavouriteList from './FavouritesList';


const useStyles = makeStyles((theme) => createStyles({
  paper: {
    paddingTop: theme.spacing(3),
  },
  header: {
    padding: theme.spacing(3, 2),
  },
  favouritesContainer: {
    paddingTop: theme.spacing(3),
  },
  avatar: {
    width: 75,
    height: 75,
  }
}))

export type NavDrawerProps = Pick<SwipeableDrawerProps, 'open' | 'onClose' | 'onOpen'>
const NavDrawer: React.FC<NavDrawerProps> = ({
   open,
   onClose,
   onOpen,
 }) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      classes={{
        paper: classes.paper,
      }}
    >
      <Container className={classes.header}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Avatar className={classes.avatar}/>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2">
              Favourites
            </Typography>
            <Typography variant="subtitle1">
              The list of your preferred flyers
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider/>
      <Container className={classes.favouritesContainer}>
        <FavouriteList />
      </Container>
    </SwipeableDrawer>
  );
}

export default NavDrawer;
