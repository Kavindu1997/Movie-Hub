import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "black !important",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
    const classes=useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
      if (value === 0) {
        history.push("/");
      } else if (value === 1) {
        history.push("/movies");
      } else if (value === 2) {
        history.push("/series");
      } else if (value === 3) {
        history.push("/search");
      }
    }, [value, history]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        className={classes.root}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
         style={{color:"white"}}
         label="Trending" 
         icon={<WhatshotIcon />} 
         />
        <BottomNavigationAction 
        style={{color:"white"}}
        label="Movies" 
        icon={<MovieIcon />} 
        />
        <BottomNavigationAction 
        style={{color:"white"}}
        label="TV Series" 
        icon={<LiveTvIcon />} 
        />
        <BottomNavigationAction 
        style={{color:"white"}}
        label="Search" 
        icon={<SearchIcon />} 
        />
      </BottomNavigation>
    </Box>
  );
}