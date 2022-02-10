import React,{useState} from 'react';
import "./loginstyle.css";
import{Button}from "@material-ui/core"

const LoginForm = () => {
  const[email,setEmail]=useState("");
 const handle= (e) =>{ 
   setEmail(e.target.value);
   
}
const onSubmit=()=>{

  sessionStorage.setItem("email",email);
}
  return (
    <div className='login'>
    
        <form action="/dashboard" onSubmit={onSubmit}>
            <div className='container'>
                <h1 id="label">Infotainment</h1>
            <label for="email">email</label>
            <input type="text" name='email'autocomplete="off" id='loginemail'placeholder="Enter Username" required value={email} onChange={handle} />
            
            <label for="password">password</label>
            <input type="password" name='password' id='password'placeholder="Enter password" required onChange/>
            <Button onSubmit style={{backgroundColor:" #1565c0"}} type='submit' variant="contained" className='button' color="primary" disableElevation>Sign In</Button>
              <p>Not regitered?<a>signup</a></p>

            </div>
        </form>
    
    
    </div>
  )
}

export default LoginForm
