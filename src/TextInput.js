
import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'


export default class TextInput extends React.Component {
   static propTypes = { 
    onSubmitMovie: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    console.log(this.props.value)
    this.state = {
      movieTitle: 'Title',
      actors: 'Actors',
      date: 'Date',
    }
    

  }


  handleMovieTitleChange = (event) => {
    this.setState({
      movieTitle: event.target.value,
    })
  }
  handleActorsChange = (event) => {
  	this.setState({
  		actors: event.target.value, 
  	})
  }
  handleDateChange = (event) => {
  	this.setState({
  		date: event.target.value, 
  	})
  }
  addMovie = (movie) => {
  
    let {title, actors, date} = movie
    localStorage.setItem(title, date)
    console.log(localStorage.getItem(title))


  }
  handleSubmit = (event) => {
  	alert('New Movie Submitted: ' + this.state.movieTitle)
    let movie = {}
    movie.title = this.state.movieTitle
    movie.actors = this.state.actors
    movie.date = this.state.date
    console.log(movie)
    this.addMovie(movie)
    this.props.onSubmitMovie(movie)
    //now let's send this to
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<TextField
          
          
          value={this.state.movieTitle}
          onChange={this.handleMovieTitleChange}
        /><br />

      
        <TextField
          
          
          value={this.state.actors}
          onChange={this.handleActorsChange}
        /><br />
        <TextField
          
          
          value={this.state.date}
          onChange={this.handleDateChange}
        /><br />
    	<input type="submit" value="Add Movie"/>
	  </form>
    );
  }
}
