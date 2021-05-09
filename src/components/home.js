import React from 'react'
import NavButton from './home_components/nav_button'
import Silos from './home_components/silos'
import './css/home.css';

const Home = () => {

   return(
     <div>
         <div className="bottoni">
            <><NavButton text="Issues" alert={true}/></>
            <><NavButton text="Data Summary" alert={true}/></>
         </div>
         <div className="flex_col">
            <div className="map">
            <div className="left_column">
                  <><Silos number={1} alert={true}/></>
                  <><Silos number={2} alert={false}/></>
                  <><Silos number={3} alert={false}/></>
            </div>
               <div className="right_column">
                  <div className="silos4"><Silos number={4} alert={false}/></div>
                  <div className="leftSilos"><Silos number={5} alert={false}/></div>
                  <div className="silos6"><Silos number={6} alert={false}/></div>
                  <div className="leftSilos"><Silos number={7} alert={false}/></div>
               </div>
            </div>
         </div>
     </div>
   )
}

export default Home;