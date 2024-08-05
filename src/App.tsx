import {SyntheticEvent, useState} from 'react'
import './App.css'
import DefaultSleep from "./components/DefaultSleep";
import CustomSleep from "./components/CustomSleep";
import {Tabs, Stack, Typography} from '@mui/material';
import Tab from '@mui/material/Tab';
import Feed from "./components/Feed";
import DefaultFeed from "./components/DefaultFeed";


function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const formatDate = (date: Date): string => {
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return  dd + '/' + mm + '/' + yyyy;
    }

  return (
      <Stack alignItems="center" spacing={4}>
          <Typography fontWeight="bold">{formatDate(new Date())}</Typography>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="СОН" />
              <Tab label="Питание"/>
          </Tabs>
          <>
              {/*<div>*/}
              {/*  <a href="https://vitejs.dev" target="_blank">*/}
              {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
              {/*  </a>*/}
              {/*  <a href="https://react.dev" target="_blank">*/}
              {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
              {/*  </a>*/}
              {/*</div>*/}
              <div style={{ display: value === 0 ? 'flex' : 'none', width: '95vw', justifyContent: 'space-around'}}>
                  <DefaultSleep/>
                  <CustomSleep/>
              </div>
              <div style={{ display: value === 1 ? 'flex' : 'none', width: '95vw', justifyContent: 'space-around'}}>
                  <DefaultFeed />
                  <Feed />
              </div>
          </>
      </Stack>
  )
}

export default App
