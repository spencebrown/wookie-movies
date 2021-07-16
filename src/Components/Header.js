import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';



const Header = () => {
    return (
        <header>
       <div className="header-content">
          <div> 
            <h1>WOOKIE <br/> MOVIES</h1>
          </div>
          <div className="search-icon-and-box-container"> 

            <SearchIcon className="search-icon" />
            <input className="search-box" type="text"/> 
            
          </div>
       </div>
       
       
     </header>
    )
}

export default Header;