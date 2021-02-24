import { Grid } from '@material-ui/core';
import FlyerCard from '../components/FlyerCard';
import Page from '../components/Page';
import React from 'react';
import { Flyer, useFlyers } from '../api/flyers';
import FlyerCardSkeleton from '../components/FlyerCardSkeleton';
import InfiniteScroll from '../components/InfiniteScroll';
import { useFavourites } from '../api/favorites';

const Home = () => {
  const {
    state: {
      favourites
    },
    dispatch,
  } = useFavourites();
  const {
    data = [],
    size,
    setSize,
    isValidating,
  } = useFlyers({ limit: 16 });
  const flyers = data.flat();
  const hasMore = flyers.length === 16 * size;
  return (
    <Page>
      <Grid container spacing={2}>
        <InfiniteScroll
          loading={isValidating}
          hasMore={hasMore}
          data={flyers}
          loadMore={() => setSize((size) => size + 1)}
          renderItem={(flyer: Flyer) => (
            <Grid key={flyer?.id} item xs={6} md={3} lg={2}>
              <FlyerCard
                value={flyer}
                favorite={favourites.some((favourite) => flyer.id === favourite.id)}
                onFavouriteClick={(data, favourite) => {
                  if (favourite) {
                    return dispatch({ type: 'remove', data })
                  }
                  return dispatch({ type: 'add', data })
                }}
              />
            </Grid>
          )}
          loadingFallback={
            Array(4).fill(0).map(() => (
              <Grid item xs={6} md={3} lg={2}>
                <FlyerCardSkeleton/>
              </Grid>
            ))
          }
        />
      </Grid>
    </Page>
  );
}

export default Home;
