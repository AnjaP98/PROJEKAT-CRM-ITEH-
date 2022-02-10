import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Meni from './meni'

function Registracija() {

    useEffect(()=>{

        if(localStorage.getItem('user-info')){
            history.push("/listaKlijenata");
        }
    },[])
    const [ime,setIme]=useState("")
    const [email,setEmail]=useState("")
    const [lozinka,setLozinka]=useState("")
    const history = useHistory();
    
   async function reg() {
        
        let item={ime,email,lozinka}
        console.warn(item)

      let result = await  fetch("http://localhost:8000/api/register",{

            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept": 'application/json'
        }
        })
        result =  await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/listaKlijenata");

    }


    return(
<div>
            <Meni />
       
       <div className="col-sm-3 offset-sm-4" >
          
       <h1>Registracija</h1>
      
       <input type="text" value={ime} onChange={(e)=>setIme(e.target.value)} className="form-control" placeholder="Unesite ime:" /><br></br>
       <input type="text"  value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Unesite email:" /><br></br>
       <input type="password"  value={lozinka}  onChange={(e)=>setLozinka(e.target.value)} className="form-control" placeholder="Unesite lozinku:" /><br></br>
       <button onClick={reg}  style={{color:"black",backgroundColor:"grey",borderColor:"transparent"}} className="btn btn-primary">Registruj se</button>
       
       </div>
       </div>
       
    )
    
}
export default Registracija
