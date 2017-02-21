//MyTableRow.js
import React, {Component} from 'react'

import MyCardLayout from './MyCardLayout'

class MyCards extends Component{	

	render(){
		console.log(this.props.sources)
		const sourceCards = this.props.sources.filter((source) => `${source.title}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase() ) >= 0)
		.map((source, index) => {
			return (
				<MyCardLayout
					{...source}
				/>
			)
		})
		
		return (
			<div>
				
				<div className="My-cards-container">
					<div className="My-cards-grid">
						{sourceCards}
					</div>
				</div>
			</div>
			)
		}
}

export default MyCards