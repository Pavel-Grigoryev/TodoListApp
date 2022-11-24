import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Provider} from "react-redux";
import {App} from "./App";
import {store} from "./store";


const theme = createTheme({
    palette: {
        primary: {
            main: '#c6ff00',
        },
        secondary: {
            main: '#8C9296',
        },
    },

});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
