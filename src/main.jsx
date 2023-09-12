import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router
} from 'react-router-dom'


import { Global, css } from "@emotion/react";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import SegoeUI from "/assets/segoe-ui-4-cufonfonts/SegoeUI.ttf";
import { GoogleOAuthProvider } from '@react-oauth/google';


const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "SegoeUI, sans-serif",
      },
    }),
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider theme={theme}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>


        <Global
          styles={css`
          @font-face {
            font-family: "MiFuente";
            src: url(${SegoeUI}) format("truetype");
            font-weight: normal;
            font-style: normal;
          }
        `}
        />
      </GoogleOAuthProvider>
    </ChakraProvider>
  </>,
)
