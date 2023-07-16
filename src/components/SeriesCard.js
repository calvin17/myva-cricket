import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardInfo = ({ series }) => {
  debugger;
  const { endDate, id, matches, name, odi, startDate, t20, test } = series;

  return (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontSize: 16, fontWeight: 'bold' }}
          color="text.secondary"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: 12 }}>
          {startDate} - {endDate || '-'}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Matches: {matches} odi: {odi} t20: {t20} test: {test}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ mt: 'auto' }}>
        <Button size="small">More Info</Button>
      </CardActions>
    </React.Fragment>
  );
};

export default function SeriesCard({ series }) {
  return (
    <Box sx={{ display: 'inline-flex' }}>
      <Card
        variant="outlined"
        sx={{
          width: 300,
          minWidth: 300,
          maxWidth: 300,
          height: 200,
          p: 1.5,
          m: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardInfo series={series} />
      </Card>
    </Box>
  );
}
