import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Global, css } from "@emotion/react";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import SegoeUI from "/assets/segoe-ui-4-cufonfonts/SegoeUI.ttf";

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
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>

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
    </ChakraProvider>
  </React.StrictMode>,
)
