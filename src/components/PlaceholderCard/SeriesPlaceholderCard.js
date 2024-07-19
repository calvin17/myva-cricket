import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SeriesPlaceholderCard() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={275} height={30} />
      <Skeleton variant="rounded" width={230} height={60} />
      <Skeleton variant="rounded" width={120} height={25} />
    </Stack>
  );
}
