import {
  createContext,
  Dispatch,
  Reducer,
  ReducerAction,
  ReducerState,
  useContext,
  useEffect,
  useReducer
} from 'react';

interface Store {
  put<T>(key: string, value: T): T
  get<T>(key: string): T
}
class LocalStorageStore implements Store {
  put<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
    return value
  }
  get<T>(key: string) {
    const item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item) as T
    }
    return null
  }
}

type Favorite = {
  id: number,
  title: string,
}
type State = {
  favourites: Favorite[],
}
type Action<Type, Data> = {
  type: Type,
  data: Data,
}
type AddFavoriteAction = Action<'add', Favorite>;
type RemoveFavoriteAction = Action<'remove', Favorite>;
type FavouritesReducer = Reducer<State, AddFavoriteAction | RemoveFavoriteAction>;
const favoritesReducer: FavouritesReducer = ({ favourites }, { data, type }): State => {
  switch (type) {
    case 'add':
      return {
        favourites: favourites.some((favorite) => favorite.id === data.id)
          ? favourites
          : [...(favourites), data],
      }
    case 'remove':
      return {
        favourites: favourites.filter((favorite) => favorite.id !== data.id),
      }
    default:
      throw new Error("invalid action");
  }
}

export type FavoritesContextValue = {
  state: ReducerState<typeof favoritesReducer>,
  dispatch: Dispatch<ReducerAction<typeof favoritesReducer>>,
}
export const FavoritesContext = createContext<FavoritesContextValue>(null)

const store = new LocalStorageStore();
const favouritesKey = '__Favourites';

export const useFavouritesContextValue = () => {
  const [state, dispatch] = useReducer<FavouritesReducer>(favoritesReducer, {
    favourites: store.get(favouritesKey) || [],
  })
  // synchronize favourites inside the store
  useEffect(() => {
    store.put(favouritesKey, state.favourites)
  }, [state.favourites])
  return {
    state,
    dispatch,
  };
}

export const useFavourites = () => useContext(FavoritesContext);

