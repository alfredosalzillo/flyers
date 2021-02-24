import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { IconButton, makeStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Flyer } from '../api/flyers';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 140,
  },
});

export type FlyerCardProps = {
  value: Flyer,
  favorite?: boolean,
  onFavouriteClick?: (value: Flyer, favorite: boolean) => void,
}

const FlyerCard: React.FC<FlyerCardProps> = ({
   value,
   favorite= false,
   onFavouriteClick,
 }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={value.title}
          image="https://via.placeholder.com/150"
        />
        <CardContent>
          <Typography gutterBottom variant="overline">
            {value.retailer}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {value.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {value.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          color={favorite ? 'primary' : 'default'}
          onClick={() => onFavouriteClick?.(value, favorite)}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FlyerCard;
