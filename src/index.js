import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


//add a theming provider in

const WrapApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <WrapApp />,
  document.getElementById('root')
);
