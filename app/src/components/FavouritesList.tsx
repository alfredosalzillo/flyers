import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles,
  Theme,
  makeStyles, fade
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useFavourites } from '../api/favorites';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    '&:hover': {
      color: theme.palette.primary.main,
      background: fade(theme.palette.primary.light, 0.5),
      '& $icon': {
        color: theme.palette.primary.dark,
      }
    },
  },
  icon: {},
}))
export type FavouriteItemProps = {
  title: React.ReactNode,
}
export const FavouriteItem: React.FC<FavouriteItemProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <ListItem button className={classes.root}>
      <ListItemIcon className={classes.icon}>
        <FavoriteIcon/>
      </ListItemIcon>
      <ListItemText primary={title}/>
    </ListItem>
  );
}

const FavouriteList: React.FC = () => {
  const { state: { favourites } } = useFavourites();
  if (favourites.length === 0) {
    return (
      <Typography variant="body1">
        No favourites yet &#128545;
      </Typography>
    );
  }
  return (
    <List aria-label="Favourites flyers" disablePadding>
      {favourites.map((favorite) => (
        <FavouriteItem key={favorite.id} title={favorite.title}/>
      ))}
    </List>
  )
}

export default FavouriteList
