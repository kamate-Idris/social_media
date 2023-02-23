import "./register.css"

export default function Register() {
  return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h4 className="loginlogo">KamateSocial</h4>
                  <span className="loginDesc">Connect to Friends and the world around you on KamateSocial</span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input type="text" placeholder="Username" className="loginInput" />
                      <input type="text" placeholder="Email" className="loginInput" />
                      <input type="text" placeholder="Password" className="loginInput" />
                      <input type="text" placeholder="Password Again" className="loginInput" />
                      <button className="loginButton">Sign up</button>
                      <button className="loginRegisterButton">Create a new Account</button>

                  </div>
              </div>
          </div>
      
    </div>
  )
}
