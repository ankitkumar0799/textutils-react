import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props){
	return(

    

	
		<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>


  <div className={`container-fluid text-${props.mode}`}>
    <a className="navbar-brand" href="#">{props.title}</a>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>


    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
        </li>







      </ul>



 <div className={`text-${props.mode==='light'?'dark':'light'} form-check form-switch`}>


  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >enable dark mode</label>








</div>






    </div>

  </div>

</nav>


		)
}
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
    aboutText: PropTypes.string 
}
Navbar.defaultProps = {
	title:"set title here",
    aboutText: "About"
}