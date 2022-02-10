import Meni from './meni'
import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'

function ListaKlijenata(){

    const[klijenti,setKlijenti]=useState([]);
    useEffect(()=>{
        vidiKlijenta();
    },[])

   async function obrisiKlijenta(id){

console.log(id);
       let result= await fetch("http://localhost:8000/api/obrisi/"+id,{
            method:'DELETE'
        });
        result= await result.json();
        console.warn(result)
        vidiKlijenta();
    }
   async function vidiKlijenta(){

        let result = await fetch("http://localhost:8000/api/klijenti");
        let res = await result.json();
        setKlijenti(res)
    }
    
    const KlijentList = klijenti.map(klijent => (
      <tr>
          id={klijent.id}
          ime={klijent.name}
          
          key={klijent.id}
          </tr>
      
      )
    );
 
    const ukupno = `Ukupno klijenata: ${KlijentList.length}`;
  
return (

     <div>
         <Meni />
         <br></br>
     <h5 id="list-heading">{ukupno}</h5>  

         {/* <h1 style={{color:"green", fontStyle:"italic"}}>KLIJENTI</h1> */}
         <div className="col-sm-10 offset-sm-1" >
         <Table striped bordered hover >
    <thead>
    <tr>
      <th>ID</th>
      <th>IME</th>
      <th>EMAIL</th>
      <th>ID KOMPANIJE</th>
      
      {
        localStorage.getItem('user-info')?
        <>
      <th style={{color:"red"}}>BRISANJE  </th>
      <th style={{color:"#47A2B7"}}>  IZMENA</th>
      </>:<>
      </>
      }
    </tr>
  </thead>
 {
 klijenti.map((item)=>
 <tbody>
<tr>
<td>{item.id}</td>
<td>{item.ime}</td>

<td>{item.email}</td>
<td>{item.kompanija_id}</td>

{
        localStorage.getItem('user-info')?<>
        <td><span onClick={()=>obrisiKlijenta(item.id)} 
        style={{color:"red",background:"#F6D7D8", borderRadius:"30px", cursor:"pointer",fontSize:"20px"}}>Obriši</span></td>
        <td>
    <Link to={"update/"+klijenti.id}>
    <span style={{color:"black",background:"#7AD3A4", borderRadius:"30px", cursor:"pointer",fontSize:"20px"}}>Izmeni</span>
    </Link>
        </td></> :<>
        
        </>
      }

</tr>
</tbody>
)}
         </Table>

</div>
     </div>
)
}
export default ListaKlijenata;
