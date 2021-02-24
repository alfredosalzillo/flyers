import {
  Avatar,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer, SwipeableDrawerProps,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import { useFavourites } from '../api/favorites';

export type NavDrawerProps = Pick<SwipeableDrawerProps, 'open' | 'onClose' | 'onOpen'>
const NavDrawer: React.FC<NavDrawerProps> = ({
  open,
  onClose,
  onOpen,
}) => {
  const { state: { favourites } } = useFavourites();
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Avatar/>
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
      <Container>
        <List aria-label="Favourites flyers">
          {favourites.map((favorite) => (
            <ListItem button key={favorite.id}>
              <ListItemIcon>
                <FavoriteIcon/>
              </ListItemIcon>
              <ListItemText primary={favorite.title} />
            </ListItem>
          ))}
        </List>
      </Container>
    </SwipeableDrawer>
  );
}

export default NavDrawer;
