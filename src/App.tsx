import {SyntheticEvent, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DefaultSleep from "./components/DefaultSleep";
import CustomSleep from "./components/CustomSleep";
import {TabPanel} from "./components/TabPanel";
import {Tabs, Stack} from '@mui/material';
import Tab from '@mui/material/Tab';
import Feed from "./components/Feed";


function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

  return (
      <Stack alignItems="center" spacing={4}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="СОН" />
              <Tab label="Питание"/>
          </Tabs>
          <div style={{ display: 'flex', width: '80vw', justifyContent: 'space-around'}}>
              {/*<div>*/}
              {/*  <a href="https://vitejs.dev" target="_blank">*/}
              {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
              {/*  </a>*/}
              {/*  <a href="https://react.dev" target="_blank">*/}
              {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
              {/*  </a>*/}
              {/*</div>*/}
              {value === 0 && (<>
                  <DefaultSleep/>
                  <CustomSleep/>
              </>)}
              {value === 1 && (
                  <Feed />
              )}
          </div>
      </Stack>
  )
}

export default App
