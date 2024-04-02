import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import './Page.css';

function Loginpage() {
  const {loginUser} = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
  }

  return (
    <div className='abut-container'>
      <br/><br/>       <br/>
      <section className="vh-70" style={{ backgroundColor: "#d0aaa9" }}> 
      
        <div className="container py-5 h-100">
          
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              
              <div className="card" style={{ borderRadius: "1rem", maxWidth: "1000px" }}>
                <div className="row g-0 align-items-center">
                  <div className="col-md-2 col-lg-5 d-none d-md-block ">
                    <img
                      src="https://img.freepik.com/premium-vector/pensive-girl-online-sign-up-concept-female-character-flat-design-vector-cartoon-illustration-web-apps-landing-page_258190-1305.jpg"
                      alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={handleSubmit}>
                        <h5 className="fw-normal mb-1 pb-1" style={{ letterSpacing: 1 }}>
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            name='email'
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            name='password'
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-1 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <Link to="/register" style={{ color: "#393f81" }}>
                            Register Now 
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Loginpage
