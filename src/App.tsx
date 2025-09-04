import React from 'react';
import HeaderNav from './components/HeaderNav'
import {BrowserRouter} from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={darkTheme}>
                <HeaderNav/>
                <div>body</div>
        </ThemeProvider>
    </div>
  );
}

export default App;
