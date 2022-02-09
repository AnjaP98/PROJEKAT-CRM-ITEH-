import React, {useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom';
import Meni from './meni';
import Registracija from "./registracija";

 function Login() {

     const [email,setEmail]=useState("");
     const [lozinka,setLozinka]=useState("");
    const history = useHistory();
    useEffect(()=>{

        if(localStorage.getItem('user-info')){
            history.push("/add");
        }
    },[])


   async function login() {
        console.warn(email,lozinka)
        let item={email,lozinka};
        let result= await fetch("http://localhost:8000/api/login",{
        method:'POST',
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        },
        body: JSON.stringify(item)
    
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
    }

     return(
        
        <div>
         <Meni />
        <h1>Prijava</h1>
        <div className="col-sm-6 offset-sm-3" ><br/>

        <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="form-content" />
<br/><br/>
<input type="password" placeholder="Lozinka" onChange={(e)=>setLozinka(e.target.value)} className="form-content" /><br /><br/>
<button className="btn btn-primary" onClick={login} >Prijava</button><br/><br/>
<label><a href="http://localhost:3000/register">Nemate nalog? Napravite nalog</a></label>
        </div>
        </div>
     )
     
 }
 export default Login