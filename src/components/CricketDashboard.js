import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query';

export default function CricketDashboard() {
  const [value, setValue] = React.useState(0);

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.cricapi.com/v1/series?apikey=c6a7ccd5-cae4-47b3-9b81-e475ad88a039&offset=0').then(
        (res) => {
          console.log(res.json());
        }
      ),
  });

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
    <React.Fragment>
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/match-info">Match Info</Link> */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Matches" />
          <Tab label="News" />
          <Tab label="Series Search" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Matches
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        News
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Series Search
      </CustomTabPanel>
    </React.Fragment>
  );
}
