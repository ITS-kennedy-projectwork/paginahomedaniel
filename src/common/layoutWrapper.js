import React from 'react'
import NavBar from './navbar'
import './css/commons.css';

const LayoutWrapper = (props) => {
   return (
      <div className="tablet">
         <NavBar/>
         {props.children}
      </div>
   )
}
export default LayoutWrapper