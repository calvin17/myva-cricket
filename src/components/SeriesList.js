import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import SeriesPlaceholderCard from './PlaceholderCard/SeriesPlaceholderCard';
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
      {
        isLoading && (
          [...Array(9)].map((_, i) => {
            return (
              <Box sx={{ display: 'inline-flex' }}>
                <Card key={i} sx={{
                    width: 300,
                    minWidth: 300,
                    maxWidth: 300,
                    height: 200,
                    p: 1.5,
                    m: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }} 
                  variant="outlined"
                >
                  <SeriesPlaceholderCard />
                </Card>
              </Box>
            )})
        )
      }
      {data &&
        data?.map((series) => {
          return <SeriesCard series={series} key={series?.id} />;
        })}
      ;
    </React.Fragment>
  );
};

export default SeriesList;
