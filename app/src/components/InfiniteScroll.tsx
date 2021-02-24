import React from 'react';
import OnIntersect from './OnIntersect';

export type InfiniteScrollProps<T = any> = {
  loadMore: () => void,
  loading: boolean,
  hasMore: boolean,
  data: T[],
  renderItem: (item: T) => React.ReactNode,
  loadingFallback: React.ReactNode,
}
const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
   loadMore,
   loading,
   hasMore,
   data,
   renderItem,
   loadingFallback,
  }) => {
  return (
    <>
      {data.map(renderItem)}
      {(loading || hasMore) && loadingFallback}
      {(!loading && hasMore) && (
        <OnIntersect
          onChange={(intersecting) => {
            if (intersecting) {
              loadMore()
            }
          }}
        />
      )}
    </>
  )
}

export default InfiniteScroll
