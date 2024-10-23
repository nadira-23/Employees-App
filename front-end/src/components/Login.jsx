import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';



const Login = () => {
    
    const[user,setUser]=useState({username:'',password:''});
    
    
    
    let updateUser=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    const navigate=useNavigate();
    const sendData=(event)=>{
        
        
        
        axios.post("http://localhost:3000/user/login",user)
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            if(res.data.usertoken){
                localStorage.setItem("token",res.data.usertoken)
                navigate('/home')
            }
        })
        
    }
    

  return (
    <>
    <style>
        {`
          body, html {
            height: 250px;
            margin: 0;
            padding: 0;
          }
          #root {
            height: 100%;
          }
        `}
      </style>
    <div >
        <Box sx={{backgroundImage:'url(data:image/jpeg;base64,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)',backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat: 'no-repeat',  height: '100vh',  width: '100wh',display:'flex', justifyContent:'center', alignItems:'center',margin:0,padding:0 }} >
            
        <Stack spacing={2} direction="column" sx={{ width: '300px',padding: '10px',  borderRadius: '5px' }}>
    
        <Typography variant='h4'sx={{fontSize: '24px',  fontWeight: '700',   color: '#257180',  textTransform: 'uppercase',   letterSpacing: '2px'
}} >Login</Typography>
        <TextField id="outlined-basic" label="Username"  name="username" value={user.username} variant="outlined" onChange={updateUser} />
        <TextField id="outlined-basic" label="Password"  name="password" value={user.password} variant="outlined" onChange={updateUser} />
        <Button   variant="contained"  onClick={sendData}>Login</Button>
        </Stack>
        </Box>
    </div>
    </>
  )
}

export default Login