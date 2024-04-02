import {useContext} from 'react'
import { jwtDecode } from "jwt-decode"; 
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Navbar() {

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwtDecode(token) 
    var user_id = decoded.user_id
  }

  return (
    <div className="ms-lg-5"> 
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img style={{width:"80px",height:"80px", padding:"1px"}} src="https://salymbekov.com/wp-content/uploads/2020/12/cropped-2.png" alt="/" />

          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              {token === null && 
              <>
                <li class="nav-item">
                  
                  <Link class="nav-link" to="/login">  &nbsp; &nbsp; &nbsp; Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register"> &nbsp;Register</Link>
                </li>
                <li className="nav-item ms-auto"> 
                  <Link class="nav-link" to="/aboutus"> &nbsp; &nbsp;About us</Link>
                </li>
              </>
              }

            {token !== null && 
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/todo"> &nbsp; &nbsp;To Do List</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={logoutUser} style={{cursor:"pointer"}}> &nbsp; &nbsp;Logout</a>
                </li>
              </>
              }   
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar