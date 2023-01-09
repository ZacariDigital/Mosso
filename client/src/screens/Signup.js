import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () =>{
    return(
        <div>
         <div className="mycard">
            <div className="card auth-card">
            <h2>Mosso</h2>
            <input 
            type="text"
            placeholder="Username"
            />
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
                <Link to="/login">Already have an account?</Link>
             </h5>
             </div>
      </div>

        </div>
    )
}

export default Signup