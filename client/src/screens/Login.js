import React from 'react'
import {Link} from 'react-router-dom'


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
             <h5>
                <Link to="/signup">Don't have an account?</Link>
             </h5>
             </div>
      </div>

        </div>
    )
}

export default Login