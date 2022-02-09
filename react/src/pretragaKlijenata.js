import Meni from './meni'
import {useState} from 'react';
import Table from 'react-bootstrap/Table';

function PretraziKlijenta() {

    const[klijent,setKlijent]=useState([]);
    
    async function pretraga(ime) {
        console.warn(ime)
        let result= await fetch("http://localhost:8000/api/pretraga/"+ime);
        result=await result.json();
        console.warn(result)
        setKlijent(result)
    
    }
    return(

       <div>
           <Meni />
       <h1>Pretraga</h1><br />
       <div className="col-sm-6 offset-sm-3">
           <input type="text" onChange={(e)=>pretraga(e.target.value)} placeholder="Pronađi..." className="form-control"/>
           <Table striped bordered hover >
    <thead>
    <tr>
      <th>ID</th>
      <th>IME I PREZIME</th>
      <th>EMAIL</th>
      <th>ID KOMPANIJE</th>
     
    </tr>
  </thead>
 {
 klijent.map((item)=>
 <tbody>
<tr>
<td>{item.id}</td>
<td>{item.ime}</td>
<td style={{width:"350px", fontSize:"10px"}}>{item.email}</td>

</tr>
</tbody>
)}
         </Table>

 </div>
 </div>
    )
    
}
export default PretraziKlijenta