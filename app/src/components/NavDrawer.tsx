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

export type NavDrawerProps = Pick<SwipeableDrawerProps, 'open' | 'onClose' | 'onOpen'>
const NavDrawer: React.FC<NavDrawerProps> = ({
  open,
  onClose,
  onOpen,
}) => (
  <SwipeableDrawer
    anchor="left"
    open={open}
    onClose={onClose}
    onOpen={onOpen}
  >
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Avatar />
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
    <Divider />
    <Container>
      <List aria-label="Favourites flyers">
        {Array(10).fill(0).map(() => (
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Flyer Title" />
          </ListItem>
        ))}
      </List>
    </Container>
  </SwipeableDrawer>
)

export default NavDrawer;
