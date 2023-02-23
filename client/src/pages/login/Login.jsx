import { useContext, useRef } from "react"
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"
import "./login.css"

export default function Login() {
    const email = useRef()
    const password = useRef()
    const {isFitching, error, dispatch, user} = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault()
        loginCall({email, password}, dispatch)
    }
    console.log(user)
  return (
      <form className="login" onSubmit={handleClick}>
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h4 className="loginlogo">KamateSocial</h4>
                  <span className="loginDesc">Connect to Friends and the world around you on KamateSocial</span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input type="email" placeholder="Email" className="loginInput" ref={email}  required/>
                      <input type="password" placeholder="Password" className="loginInput" ref={password} required />
                      <button className="loginButton">Log In</button>
                      <span className="loginForgot">Forgot Password ?</span>
                      <button className="loginRegisterButton">Create a new Account</button>

                  </div>
              </div>
          </div>
      
    </form>
  )
}
