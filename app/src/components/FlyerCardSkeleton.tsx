import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

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

const FlyerCardSkeleton: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        >
          <Skeleton variant="rect" height="100%" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="overline">
            <Skeleton variant="text" />
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <Skeleton variant="text" />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Skeleton variant="text" />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Skeleton width="100%" height="100%" />
      </CardActions>
    </Card>
  );
};

export default FlyerCardSkeleton;
