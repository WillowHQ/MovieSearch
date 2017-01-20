//MyTableRow.js
import React, {Component} from 'react'
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'


class MyTable extends Component{
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
				<Table>
				  	<TableHeader>
			      		<TableRow>
					        <TableHeaderColumn>TITLE</TableHeaderColumn>
					        <TableHeaderColumn>ACTORS</TableHeaderColumn>
					        <TableHeaderColumn>YEAR</TableHeaderColumn>
				      	</TableRow>
				    </TableHeader>
					
					<TableBody>
						{movieRows}
					</TableBody>
				</Table>
			</div>
		)
	}
}
export default MyTable