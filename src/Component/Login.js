
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../Config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';



import './Login.css'




const Login = () => {
    const [user, setuser] = useState([])
    const [pass, setpass] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log("logged in")
                // navigate('/landing')
            }
            else{
                console.log("failed")
            }
        })
    },[])

    const loginfunc = (e) => {
        setLoading(true)
        e.preventDefault();
        e.stopPropagation()
        signInWithEmailAndPassword(auth, user, pass)
            .then(() => {
                console.log("loggedin")
                navigate('/landing')
            })
            .catch(() => console.log("failed to login"))
    }

    return (
       
<div className="login-box">
  <p>LOGIN</p>
  <form>
    <div className="user-box">
      <input  required="" name="" type="text" onChange={(e) => { setuser(e.target.value) }}></input>
      <label><FontAwesomeIcon icon={faUser} />  USERNAME</label>
    </div>
    <div className="user-box">
      <input required="" name="" type="password" onChange={(e) => { setpass(e.target.value) }}></input>
      <label><FontAwesomeIcon icon={faLock} />   PASSWORD</label>
    </div>
    <a href="#" onClick={loginfunc}> {loading ? 'LOGGING IN...' : 'LOGIN'} 
      <span></span>
      <span></span>
      <span></span>
      <span></span>
     
    </a>
  </form>
  <p>Don't have an account? <Link className='a2' to={'/signup'}>:Signup</Link></p>
</div>
    )
}

export default Login
     