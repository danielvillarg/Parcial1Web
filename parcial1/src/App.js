import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import tituloImagen from './titulo.png'; 
import imagen1 from './imagen1.png';
import imagenAbajo from './parteAbajo.png';
import { useNavigate  } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState(null); // Estado para almacenar la URL de redirección





  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: formValues.username, password: formValues.password }),
      });

      if (response.ok) {
        setRedirectUrl('/listado-vehiculos');
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setError(true);
    }
  };

  const redirectTo = (url) => {
    window.location.href = url;
  };

  if (redirectUrl) {
    redirectTo(redirectUrl);
  }

  return (
    <div className="App">
      <img src={tituloImagen} alt="Titulo"  style={{ float: 'left'}}/> 
      <img src={imagen1} alt="Imagen 1" style={{width: '1034px', height: '267px'}} /> 
      <Form>
      <div style={{ textAlign: 'center', marginTop: "30px"}}>
        <h2 style={{ fontWeight: 'bold' }}>Inicio de Sesión</h2>
      </div>
      <div className="form-group"style={{marginTop: "30px"}}>
          <h2 style={{ fontSize: '1.2rem',marginLeft: '-385px', marginBottom: '5px', marginTop: "20px"}}>Nombre de usuario</h2>
          <Form.Control
            type="text"
            placeholder=""
            value={formValues.username}
            onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
            style={{ backgroundColor: '#D9D9D9', width: '556px', height: '58px', margin: '0 auto', borderRadius: "1px"}}
          />
        </div>

        <div className="form-group">
          <h2  style={{ fontSize: '1.2rem',marginLeft: '-460px', marginBottom: '5px', marginTop: "20px"}}>Contraseña</h2>
          <Form.Control
            type="password"
            placeholder=""
            value={formValues.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
            style={{ backgroundColor: '#D9D9D9', width: '556px', height: '58px', margin: '0 auto', borderRadius: "1px"}}
          />
        </div>

        <div className="button-group">
          <Button variant="primary"  onClick={handleLogin} style = {{marginTop: "20px", marginRight: "50px", borderRadius: "1px", backgroundColor: '#003B93', color: 'white', width: '253px', height: '53px' }}>Ingresar</Button>
          <Button variant="danger"  style = {{marginTop: "20px", borderRadius: "1px",  color: 'black', backgroundColor: '#E75D5D', width: '253px', height: '53px'}}>Cancelar</Button>
        </div>
        <div style={{ textAlign: 'center', marginTop: "90px"}}>
        <img src={imagenAbajo} alt="Imagen Abajo" />
      </div>
      {error && <p style={{ color: 'red' }}>Error de autenticación. Revise sus credenciales.</p>}
      </Form>
    </div>
    
  );
}

export default App;