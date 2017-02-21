
import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'


export default class SearchInput extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }


  handleSearchTermChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  handleSubmit = (event) => {
  	console.log(`${event.target.value} was submitted now we need to pass this up to the parent`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<TextField
          id="title"


          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
    	<input type="submit" value="Search Term"/>
	  </form>
    );
  }
}
