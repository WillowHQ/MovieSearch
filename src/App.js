import React, { Component } from 'react'
import MenuBarLayout from './MenuBarLayout'
import TableLayout from './TableLayout'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <MenuBarLayout />
          
          
        </div>
        <div className="App-table">
          <TableLayout/>
        </div>
      </div>
    );
  }
}

export default App;
