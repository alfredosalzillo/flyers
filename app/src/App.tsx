import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FavoritesContext, useFavouritesContextValue } from './api/favorites';
import Home from './routes/Home';

const App: React.FC = () => {
  const favourites = useFavouritesContextValue();
  return (
    <FavoritesContext.Provider value={favourites}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </FavoritesContext.Provider>
  );
};

export default App;
