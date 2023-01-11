import React,{createContext,useReducer, useEffect} from 'react'
import NavBar from "./components/Navbar";
import "./App.css"
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from "./screens/Signup"
import Profile from "./screens/Profile";
import Findsong from './screens/findsong';
import {reducer, initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () =>{
  const navigate = useNavigate()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      navigate('/')
    }else{
      navigate('/login')
    }

  },[])
  return(
    <Routes>
    <Route exact path="/Home" element={<Home />} />
    <Route exact path="/Login" element={<Login />} />
    <Route exact path="/Signup" element={<Signup />} />
    <Route exact path="/Profile" element={<Profile />} />
    <Route exact path="/Findsong" element={<Findsong />} />






  </Routes>
    
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />

  </BrowserRouter>
  </UserContext.Provider>
    

  );
}

export default App;
