import React from 'react'
import './nav_button.css';
import Triangle from '../../common/alert_triangle/triangle'

const navButton = ({text, alert}) => {
   return(
      <>
         <div className="bottone">
            {text}
         </div>
         {alert ? (<Triangle/>) : (<div style={{visibility: "hidden"}}><Triangle/></div>)}
     </>
   )
}

export default navButton;
