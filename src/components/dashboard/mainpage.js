import React,{useState} from 'react'
import "./mainpage.css";
import {  Link } from 'react-router-dom';
import cardImage from './bulb.png';
import img1 from "./profileimg.png";
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import { lightBlue } from '@mui/material/colors';
import { Dialog,DialogTitle,DialogContent,DialogActions,Button,TextField } from '@material-ui/core';
const MainPage = () => {
 
  const[yuserName,setYuserName]=useState("YourName");
  const[state,setState]=useState(img1);
  const [open, setOpen] = React.useState(false);
  const[userEmail,setUserEmail]=useState("");
  const[userName,setUserName]=useState("");
 const handleEmail= (e) =>{ 
   setUserEmail(e.target.value);
  }
  const imageHandler=(e)=>{
    const reader=new FileReader();
    reader.onload=()=>{
      if(reader.readyState===2){
        setState(reader.result);
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  const handleName= (e) =>{ 
    setUserName(e.target.value);
   }

   const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    
    setYuserName(userName);

    sessionStorage.setItem('email',userEmail)
    
    setOpen(false);
  };
  
  return (
    <>
    <div className="header" style={{backgroundColor:"#bbdefb"}}>
      <p id="title">infotainment</p>
      
    </div>
    <div className="row">
  <div className="column left" style={{backgroundColor:"white"}}>                 
    
    <div className='card' style={{backgroundColor:"#bbdefb"}} >
      <img  src={state} id="pimage" alt="profile picture"/>
      <p id='username'>{yuserName}</p> 
      
      <p id='email'>{sessionStorage.getItem("email")}</p>
      <button className="profilebutton" onClick={handleClickOpen} >Edit Profile</button>
    </div>
  </div>
  <div className="column right" style={{backgroundColor:"white"}}>
    <h5>Let's infotain you</h5>
    <div className="quiz_card" style={{backgroundColor:"#bbdefb"}} >
     <img src={cardImage} id="brainQuiz" alt="brain"/><br></br>
   
     <Link className="link"to="/quiz">Let's quiz</Link>
    </div>
  </div>
</div>
    /*----------------------------------------------------------*/
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Your Profile</DialogTitle>
        <DialogContent>
        <TextField autocomplete="off"
            autoFocus 
            margin="dense" id="name" label="Name" type="email"
            fullWidth
            variant="standard"
            required value={userName} onChange={handleName}
            
            InputLabelProps={{
              style: { color: '#1565c0' }, 
            }} 
          />
       
          <TextField autocomplete="off"
            autoFocus
            margin="dense" id="name" label="Email Address" type="email"
            fullWidth
            className="textfield"
            variant="standard"
            required value={userEmail} onChange={handleEmail} 
            InputLabelProps={{
              style: { color: '#1565c0' }, 
           }}
          />
          <div class="label">
   
            <label htmlFor="input" className="image-upload "><AddAPhoto style={{ color: lightBlue[800] }}/>add profile picture</label>
          </div>
          <input type="file" name="image_upload" id="input" accept='image/*'onChange={imageHandler}/>
          
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose}>Update Profile</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MainPage
