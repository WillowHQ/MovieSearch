
import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'


export default class TextInput extends React.Component {
   static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      url:'',
      title:'',
    }
  }


  handleUrlChange = (event) => {
    this.setState({
      url: event.target.value,
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


          value={this.state.title}
          onChange={this.handleTitleChange}
        /><TextField
          id="url"


          value={this.state.url}
          onChange={this.handleUrlChange}
        /><br />      
    	<input type="submit" value="Add Url"/>
	  </form>
    );
  }
}
