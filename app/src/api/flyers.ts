import { useSWRInfinite } from 'swr';
import { SWRInfiniteResponseInterface } from 'swr/dist/use-swr-infinite';
import { fetcher } from './fetcher';

export type Flyer = {
  id: number,
  title: string,
  start_date: string,
  end_date: string,
  is_published: boolean,
  retailer: string,
  category: string,
}

const {
  REACT_APP_API_URL = '',
} = process.env;

const getFlyersUrl = (limit: number) => (page: number) => `${REACT_APP_API_URL}/flyers?page=${page + 1}&limit=${limit}`
export type UseFlyersOptions = {
  limit?: number
}
const defaultUseFlyersOptions: UseFlyersOptions = {
  limit: 25,
}
export const useFlyers = (options = defaultUseFlyersOptions): SWRInfiniteResponseInterface<Flyer[]> => {
  const {
    limit = 25,
  } = options;
  return useSWRInfinite<Flyer[]>(getFlyersUrl(limit), {
    fetcher: fetcher,
    revalidateOnMount: true,
  })
}
