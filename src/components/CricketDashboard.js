import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ImageSlider from './ImageSlider';
// import { useQuery } from '@tanstack/react-query';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CricketDashboard() {
  const [value, setValue] = React.useState(0);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch('https://api.cricapi.com/v1/series?apikey=c6a7ccd5-cae4-47b3-9b81-e475ad88a039&offset=0').then(
  //       (res) => {
  //         console.log(res.json());
  //       }
  //     ),
  // });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
      <Grid container>
        <Grid item xs={12}>
          <Item><ImageSlider /></Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="cricket tabs">
                <Tab label="Series List" index={0} component={Link} to={'/cricket'} />
                <Tab label="Live Matches" index={1} component={Link} to={'/cricket/live'} />
                <Tab label="Search Series" index={2} component={Link} to={'/cricket/search'} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={value}>
              <Outlet />
            </CustomTabPanel>
          </Item>
        </Grid>
      </Grid>
  );
}
