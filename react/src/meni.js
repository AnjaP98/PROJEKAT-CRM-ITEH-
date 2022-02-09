import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Meni() {
  let user= JSON.parse(localStorage.getItem('user-info'))
  const history=useHistory();
  
  function odjava() {
    localStorage.clear();
    history.push('/login')
  }
    return(

       <div>
      <Navbar style={{background:"#9496D1"}}>
<Container>
    <Navbar.Brand href="" style={{color:"#333", fontSize:"30px"}}>CRM</Navbar.Brand>
    <Nav className="me-auto meni_style">
      {
        localStorage.getItem('user-info')? 
        <div>
      <Link to="/" style={{color:"#333", fontSize:"20px"}}>Klijenti</Link>
      <Link to="/add" style={{color:"#333", fontSize:"20px"}}>Dodaj novog klijenta</Link>
    
      <Link to="/pretraga" style={{color:"#333", fontSize:"20px"}}>Pronađi</Link>
        </div>:
        <div>
       <Link to="/" style={{color:"#333", fontSize:"20px"}}>Svi klijenti</Link>
      <Link to="/login" style={{color:"#333", fontSize:"20px"}}>Uloguj se</Link>
      <Link to="/register" style={{color:"#333", fontSize:"20px"}}>Registruj se</Link>
        </div>
      }
     
    
    </Nav>
    {localStorage.getItem('user-info')?
    <Nav>
      <NavDropdown title={user && user.ime} style={{background:"white",borderRadius:"25px", fontSize:"10px"}}>
        <NavDropdown.Item onClick={odjava}>Odjava</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    :null}
    </Container>
    
  </Navbar>

       </div>
    )
    
}
export default Meni