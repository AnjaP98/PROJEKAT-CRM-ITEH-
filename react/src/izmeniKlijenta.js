import Meni from './meni';
import {withRouter} from 'react-router-dom';
import {useState,useEffect} from 'react';
import DodajKlijenta from './dodajKlijenta';
 //!!update
 
 function IzmeniKlijenta(props) {
const [klijent, setKlijent] = useState(0);
console.warn("props",props.match.params.id);

useEffect(async()=>{
   
   let result=await fetch("http://localhost:8000/api/klijent/"+props.match.params.id);
   result = await result.json();
   setKlijent(result)
},[])
    return(

       <div>
           <Meni />
        <div className="col-sm-6 offset-sm-3">
       <h1>Izmeni podatke o klijentu</h1><br/>
       <input type="text" defaultValue={klijent.ime} /> <br/><br/>
       <input type="text" defaultValue={klijent.email} /> <br/><br/>
       
       
       <button onClick={IzmeniKlijenta}>IZMENI</button>
       </div>

       </div>
    )
    
}

// export default withRouter(IzmeniKlijenta)
export default IzmeniKlijenta