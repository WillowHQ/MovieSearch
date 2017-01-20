import React, { Component } from 'react'
import MenuBarLayout from './MenuBarLayout'
import AutoComplete from 'material-ui/AutoComplete'
import TextInput from './TextInput'
import MyTable from './MyTable'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
]

class App extends Component {
  constructor(props) {
    super(props)
    //debugger
    let x = JSON.parse(localStorage.getItem("movies"))
    
    this.state = {
      
      movies: x || [],
      searchText: '',

    }
    console.log()
    

  }
  handleSearchUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    })
  }
  handleNewRequest = () => {
    this.setState({
      searchText: '',
    })
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
           <AutoComplete
            hintText="Type 'r', case insensitive"
            searchText={this.state.searchText}
            onUpdateInput={this.handleSearchUpdateInput}
            onNewRequest={this.handleNewRequest}
            dataSource={colors}
            filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
            openOnFocus={true}
          />
        </div>
        <div className="App-table">
          <MyTable 
            data={this.state.movies}
            searchTerm={this.state.searchText}
            /> 
        </div>
      </div>
    );
  }
}

export default App;
