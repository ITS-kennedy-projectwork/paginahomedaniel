import React from 'react'
import './silos.css'
import Triangle from '../../common/alert_triangle/triangle'

const silos = ({number, alert}) => {
  return(
  <>
    <div className="silos">
      {number}
    </div>
  </>
  )
}

export default silos;
