import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import tituloImagen from '../imagenes/titulo.png'; 
import imagen1 from '../imagenes/imagen1.png';
import imagenAbajo from '../imagenes/parteAbajo.png';
import { useNavigate  } from 'react-router-dom';
import { FormattedMessage } from "react-intl";


function Inicio() {
  const [formValues, setFormValues] = useState({login: "", password: ""});
  const navigate = useNavigate();
  const [error, setError] = useState(false);

     const handleLogin = () => {
      const URL = "http://localhost:3001/login";
      fetch(URL, {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify(formValues)})
        .then((data) => {
            if (data.ok) {
                navigate("/vehiculos");
            } else {
                setError(true);
            }
        });
    }
    
  return (
    <div className="App">
    <img src={tituloImagen} alt="Titulo"  style={{ float: 'left', width: '253px', height: '61px'}}/> 
    <hr style={{ border: '1px solid rgba(0, 0, 0, 0.23)', clear: 'both' }} /> 
      <img src={imagen1} alt="Imagen 1" style={{width: '1244px', height: '323px'}} /> 
      <hr style={{ border: '1px solid rgba(0, 0, 0, 0.2)', opacity: '0.8', clear: 'both' }} />
      <Form style={{ weight:"625px", height:"369px"}}>
      <div style={{ textAlign: 'center', marginTop: "30px"}}>
        <h2 style={{ fontWeight: 'bold', fontSize: '32px'}}>Inicio de sesión</h2>
      </div>
      <div className="form-group"style={{marginTop: "30px"}}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold',marginLeft: '-385px', marginBottom: '5px', marginTop: "20px"}}>Nombre de usuario</h2>
          <Form.Control
            type="text"
            placeholder=""
            value={formValues.login}
            onChange={(e) => setFormValues({ ...formValues, login: e.target.value })}
            style={{ backgroundColor: '#D9D9D9', width: '556px', height: '58px', margin: '0 auto', borderRadius: "1px", borderColor: error ? '#6A0B0B' : '',fontSize: '20px', paddingLeft: '30px' }}
          />
        </div>

        <div className="form-group">
          <h2  style={{ fontSize: '20px',marginLeft: '-460px',fontWeight: 'bold', marginBottom: '5px', marginTop: "20px", borderColor: error ? '#6A0B0B' : '' }}>Contraseña</h2>
          <Form.Control
            type="password"
            placeholder=""
            value={formValues.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
            style={{ backgroundColor: '#D9D9D9', width: '556px', height: '58px', margin: '0 auto', borderRadius: "1px",borderColor: error ? '#6A0B0B' : '',fontSize: '20px', paddingLeft: '30px' }}
          />
        </div>

        <div className="button-group">
          <Button variant="primary"  onClick={handleLogin} style = {{marginTop: "20px", marginRight: "50px", borderRadius: "1px", backgroundColor: '#003B93', color: 'white', width: '253px', height: '53px',fontWeight: 'bold', fontSize:"20px"}}>Ingresar</Button>
          <Button variant="danger"  style = {{marginTop: "20px", borderRadius: "1px",  color: 'black', backgroundColor: '#E75D5D', width: '253px', height: '53px',fontWeight: 'bold', fontSize:"20px"}}>Cancelar</Button>
        </div>
        {error && <p style={{ color: '#CD3232', fontWeight: 'bold', marginTop: '20px', marginLeft: '-120px', fontSize: '20px'}}>Error de autenticación. Revise sus credenciales.</p>}
        <div style={{ textAlign: 'center', marginTop: error ? '60px' : "110px", height: '36px'}}>
        <img src={imagenAbajo} alt="Imagen Abajo" />
      </div>
      </Form>
    </div>
    
  );
}

export default Inicio;