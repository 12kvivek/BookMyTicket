import React from 'react'
// import { AppContext } from './context';
// import { useGlobalContext } from './context';
import Navbar from './navbar';

const Home = () => {
  // const name = useContext(AppContext);
  // const name  = useGlobalContext();
  return(
    <div>
      <Navbar />
        <div class="heading">New Releases</div>
        <div class="card">
        <a href = "/error"><img src="jawan.jpg" alt="Jawan"/>
           </a>
        </div>
        <div class="card">
        <a href = "/error"><img src="jawan.jpg" alt="Jawan"/>
         </a>
        </div>
        <div class="card">
        <a href = "/error"><img src="jawan.jpg" alt="Jawan"/>
          </a>
        </div>
        <div class="card">
          <a href = "/error"><img src="jawan.jpg" alt="Jawan"/>
          </a>
        </div>
    </div>
  )
} 

export default Home