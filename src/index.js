import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'

import App from './App'

const theme = {
  colors: {
    tan: '#fceed1',
    purple: '#7d3cff',
    yellow: '#f2d53c',
    red: '#c80e13',
  },
  fonts: {
    body: 'Arial, Helvetica, sans-serif',
  },
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement,
)
