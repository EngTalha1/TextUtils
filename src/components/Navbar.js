import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className="`navbar navbar-expand-lg navbar navbar-dark bg-dark"> {/* here we are using template literals to set the class of navbar based on the mode prop passed from the parent component(App.js) */}
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutTextutils}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button> {/* here we are using bootstrap classes to make our search button outline and primary colored  if want to make red just do 'btn-outline-danger', or want to make green then btn-outline-success, and search for other colors go to components in booststrap website every thing is available there*/}
      </form>
      <div className="d-flex mx-3">
        <button
          className='btn btn-light mx-1 white-theme-btn'
          onClick={() => props.setTheme('white')}
        >
          Light Mode
        </button>
        <button
          className='btn btn-outline-light mx-1 black-theme-btn'
          onClick={() => props.setTheme('#1c344a')}
        >
          Dark Mode
        </button>
        <button
          className='btn btn-outline-primary mx-1'
          onClick={() => props.setTheme('#3c6fbb')}
        >
          Blue Mode
        </button>
        <button
          className='btn btn-outline-success mx-1'
          onClick={() => props.setTheme('#198754')}
        >
          Green Mode
        </button>
        
  </div>
  </div>
  </div>
</nav>
  )
}
// PropTypes is used to check the type of props passed to the component. 
// It helps in catching bugs and ensuring that the correct data types are
//  being used. In this case, we are specifying that the 'title' and 
// 'aboutTextutils' props should be of type string.
//  If a different type is passed, a warning will be shown in the console.
Navbar.propTypes = {title: PropTypes.string,
    aboutTextutils: PropTypes.string  
    }
// Default props are used to specify default values for props 
// in case they are not provided by the parent component. 
// These values will be used if the parent component(means in main page) 
// does not pass any value for the props.
Navbar.defaultProps = {
  title: "Set title here",
  aboutTextutils: "About"
}