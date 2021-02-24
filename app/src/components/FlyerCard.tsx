import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { IconButton, makeStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const FlyerCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Flyer Title"
          image="https://via.placeholder.com/150"
        />
        <CardContent>
          <Typography gutterBottom variant="overline">
            Retailer name
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Flyer Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category Name
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FlyerCard;
