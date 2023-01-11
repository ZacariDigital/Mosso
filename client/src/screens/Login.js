import React,{useState,useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'



const Login = () =>{
  const {state,dispatch} = useContext(UserContext)
  const navigate= useNavigate()
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const PostData = ()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
          M.toast({html:"invalid email"})
          return
      }
      fetch("http://localhost:5000/signup",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              password,
              email,

          })
      }).then(res=>res.json())
      .then(data=>{
          if(data.error){
              M.toast({html:data.error})
          }
          else{

              dispatch({type:"USER", payload:data.user})
              M.toast({html:"signed in"})
              navigate('/home')
          }

      })
  }
    return(
        <div>
         <div className="mycard">
            <div className="card auth-card">
            <h2>Mosso</h2>
            <input 
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

            />
            <input 
            type="text"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
              <button className="btn waves-effect waves-light"
              onClick={()=>PostData()}>
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