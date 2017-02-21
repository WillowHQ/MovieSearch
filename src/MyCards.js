//MyTableRow.js
import React, {Component} from 'react'

import MyCardLayout from './MyCardLayout'

class MyCards extends Component{
	render(){
		const sourceCards = this.props.sources
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