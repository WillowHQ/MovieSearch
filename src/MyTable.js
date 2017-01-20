//MyTableRow.js
import React, {Component} from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table'

class MyTableRows extends Component{
	render(){
		const movies = this.props.data
		const movieRows = movies.map((movie) => {
			return (
				<TableRow>
					<TableRowColumn>{movie.title}</TableRowColumn>
					<TableRowColumn>{movie.actors}</TableRowColumn>
					<TableRowColumn>{movie.date}</TableRowColumn>
				</TableRow>
			)
		})
		return (
			<div>
				{movieRows}
			</div>
		)
	}
}
export default MyTableRows