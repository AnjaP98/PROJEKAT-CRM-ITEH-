import React, {useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom';
import Meni from './meni';
import Registracija from "./registracija";

 function Login() {

     const [email,setEmail]=useState("");
     const [password,setLozinka]=useState("");
    const history = useHistory();
    useEffect(()=>{

        if(localStorage.getItem('user-info')){
            history.push("/listaKlijenata");
        }
    },[])


   async function login() {
        console.warn(email,password)
        let item={email,password};
        let result= await fetch("http://localhost:8000/api/login",
    {
        method:'POST',
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        },
        body: JSON.stringify(item)

    
     });
     
    //  .then(data =>{data.json(); 
    //     console.log(data)}  );
    // console.log(data);

    result = await result.json();
    console.log(result.Greska)
    if(result.Greska == "Email ili lozinka nisu ispravni!"){
    
    history.push("/login");
    
    }else{
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/listaKlijenata");
    }
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
<label><a href="http://localhost:3000/register">Registrujte se</a></label>
        </div>
        </div>
     )
     
 }
 export default Login