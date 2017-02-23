// MyTableRow.js
import React, {Component} from 'react'

import MyCardLayout from './MyCardLayout'

class MyCards extends Component {

  render () {
   
    const sourceCards = this.props.sources.filter((source) => `${source.title} ${source.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
		.map((source, index) => {
  return (
    <MyCardLayout
      key={index}
      {...source}
				/>
  )
})

    return (
      <div>

        <div className='My-cards-container'>
          <div className='My-cards-grid'>
            {sourceCards}
          </div>
        </div>
      </div>
    )
  }
}

export default MyCards
