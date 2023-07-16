import React from 'react';
import { useQuery } from '@tanstack/react-query';

import SeriesCard from './SeriesCard';

const SeriesList = () => {
  const useFetchSeries = () => {
    const { isLoading, error, data } = useQuery({
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      queryKey: ['seriesListData'],

      queryFn: () =>
        fetch('https://api.cricapi.com/v1/series?apikey=c6a7ccd5-cae4-47b3-9b81-e475ad88a039&offset=0').then(
          (res) => res.json()
        ),
    });

    return { isLoading, error, data: data?.data };
  };

  const { isLoading, error, data } = useFetchSeries();
  console.log(data);
  return (
    <React.Fragment>
      {data &&
        data?.map((series) => {
          return <SeriesCard series={series} key={series?.id} />;
        })}
      ;
    </React.Fragment>
  );
};

export default SeriesList;
