import React, { Component } from 'react'
import MenuBarLayout from './MenuBarLayout'
import MyTable from './MyTable'
import TextInput from './TextInput'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props)
    //debugger
    let x = JSON.parse(localStorage.getItem("movies"))
    
    this.state = {
      
      movies: x || []
    }
    console.log()
    

  }
  
  handleSubmitMovie = (movie) => {
    var newMovies = this.state.movies.slice()
    console.log(movie)
    
    newMovies.push(movie)
    console.log(`this is new movies ${newMovies[0].title}`)
    let movieString = JSON.stringify(newMovies)
    console.log(movieString)
    localStorage.setItem("movies", movieString)

    this.setState({ 
      movies: newMovies
    })
  }

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <MenuBarLayout />
        </div>
        <TextInput
        value="something"
        onSubmitMovie={this.handleSubmitMovie}

        />
        <div className="SearchBar">
          <p> Search Bar </p>
        </div>
        <div className="App-table">
          <MyTable data={this.state.movies}/> 
        </div>
      </div>
    );
  }
}

export default App;
