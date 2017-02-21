import React from "react"



const MyCardLayout = (props) => (
  <div className="Card-container"
    key={props.id}
  >
        <div className='Card-title'>
          <h1>{props.title}</h1>
        </div>

        <div className='Card-img-panel'>
          <img src={props.image}/>
        </div>
        <div className='Card-description'>
          <p>{props.description}</p>
        </div>
      </div>
)
export default MyCardLayout