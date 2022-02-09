import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './login';
import Registracija from './registracija';
import DodajKlijenta from './dodajKlijenta';
import IzmeniKlijenta from './izmeniKlijenta';
import ListaKlijenata, {} from './listaKlijenata';
import PretraziKlijenta from './pretragaKlijenata';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Registracija />
      </Route>
      <Route path="/add">
       <DodajKlijenta />
      </Route>
       <Route path="/update/:id">
        <IzmeniKlijenta />
      </Route>

      <Route path="/pretraga" x={PretraziKlijenta}>
       <PretraziKlijenta />
      </Route>

      <Route path="/" x={ListaKlijenata}>
       <ListaKlijenata />
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
