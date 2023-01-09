import React from 'react'

const Login = () =>{
    return(
        <div>
         <div className="mycard">
            <div className="card auth-card">
            <h2>Mosso</h2>
            <input 
            type="text"
            placeholder="email"
            />
            <input 
            type="text"
            placeholder="password"
            />
              <button className="btn waves-effect waves-light">
                Login
                
             </button>
             </div>
      </div>

        </div>
    )
}

export default Login