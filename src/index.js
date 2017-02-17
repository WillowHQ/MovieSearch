import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


//add a theming provider in
//pass in initial state as a prop ?
const movies = JSON.parse(localStorage.getItem("movies")) || []

const WrapApp = (movies) => (
  <MuiThemeProvider>
    <App movies={movies}/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <WrapApp movies={movies}/>,
  document.getElementById('root')
);
