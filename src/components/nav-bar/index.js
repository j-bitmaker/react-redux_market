import React from 'react';
import {Link} from 'react-router-dom'; 
import './nav-bar.css'

const NavBar = ({countOfItems, sortLaptop, sortSSD, sortDocking, sortRAM, searchItems}) =>{

    return(
    <div>
      <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <Link to='./' className="navbar-brand">Let's go!</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/' className="nav-link">
              <i className="fa fa-home"></i>
              Home
              <span className="sr-only">(current)</span>
              </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to='./' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by category
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to='./' className="dropdown-item" onClick={sortLaptop}>Laptops</Link>
              <Link to='./' className="dropdown-item" onClick={sortSSD}>SSD</Link>
              <Link to='./' className="dropdown-item" onClick={sortDocking}>Docing stations</Link>
              <Link to='./' className="dropdown-item" onClick={sortRAM}>RAM</Link>
            </div>
          </li>
          <li>
            <Link to='./help' className="nav-link">
              Contact with us
            </Link> 
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='./cart' className="nav-link">
              <i className="fa fa-cart-plus">
                <span className="badge badge-success">{countOfItems}</span>
              </i>
              bask
            </Link>
          </li>
        </ul>
        <input className="form-control search" type="text" placeholder="Search" 
        aria-label="Search" onChange={e=>searchItems(e.target.value)}/>
      
      </div>
</nav>
    </div>
    )
}
export default NavBar;