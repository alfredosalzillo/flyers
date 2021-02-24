import { useSWRInfinite } from 'swr';

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
  API_URL = '',
} = process.env;

const getFlyersUrl = (limit: number) => (page: number) => `${API_URL}/flyers?page=${page}&limit=${limit}`
export type UseFlyersOptions = {
  limit?: number
}
const defaultUseFlyersOptions: UseFlyersOptions = {
  limit: 25,
}
export const useFlyers = (options = defaultUseFlyersOptions) => {
  const {
    limit = 25,
  } = options;
  return useSWRInfinite<Flyer[]>(getFlyersUrl(limit))
}
