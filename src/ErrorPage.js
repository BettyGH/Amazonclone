import React from 'react'
import "./ErrorPage.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function ErrorPage() {
  return (
    <>
    <div className="header">
        <Link to="/">
          <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
        </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search" />
        <SearchIcon className="header__searchIcon" />
      </div>
    </div>
    <div className='error'>
      <Link to="/">
        <img className='error__message' src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png" alt=""/>
      </Link>
      <div>
        <h1> hello </h1>
      </div>
    </div>
    </>
  )
}

export default ErrorPage