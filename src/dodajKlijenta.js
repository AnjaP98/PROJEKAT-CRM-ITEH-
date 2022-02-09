import { useHistory } from 'react-router-dom';
import React, {useEffect} from 'react';
import Meni from './meni'
import {useState} from 'react';

function DodajKlijenta() {

    const [ime,setIme]=useState("");
    const [email,setEmail]=useState("");
    
    const [kompanija_id,setKompanijaid]=useState("");
  
    const history=useHistory();
    useEffect(()=>{

        if(!localStorage.getItem('user-info')){
            history.push("/login");
        }
    },[])

   async function dodajKlijenta() {
        console.warn(ime,email,kompanija_id)
        const formData= new FormData();
        formData.append('ime',ime);
        formData.append('email',email);
        
        formData.append('kompanija_id',kompanija_id);
        
 
        let result= await fetch("http://localhost:8000/api/dodaj" ,{
            method:'POST',
            body: formData
        });
        alert("Podaci o klijentu su sacuvani.")

    }
    return(

       <div>
           <Meni />
       <h1>Dodaj novog klijenta</h1><br />
       <div className="col-sm-6 offset-sm-3">
<input type="text" onChange={(e)=>setIme(e.target.value)} className="form-control" placeholder="Ime i prezime klijenta..." /><br/>
<input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email adresa..." /><br/>

<input type="text" onChange={(e)=>setKompanijaid(e.target.value)} className="form-control" placeholder="ID kompanije..." /><br/>
<br/>
<br/>
<button onClick={dodajKlijenta} className="btn btn-primary">DODAJ</button>

       </div></div>
    )
    
}
export default DodajKlijenta