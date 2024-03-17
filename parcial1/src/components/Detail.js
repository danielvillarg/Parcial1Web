import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import tituloImagen from '../imagenes/titulo.png'; 
import imagen1 from '../imagenes/imagen1.png';
import imagenAbajo from '../imagenes/parteAbajo.png';
import { ListGroup } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function Detail() {
  const { vehiculoId } = useParams();
  const [vehiculo, setVehiculo] = useState(null);
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const URL = `http://localhost:3001/cars`
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const vehiculoEncontrado = data.find(vehiculo => vehiculo.id === parseInt(vehiculoId));
        setVehiculo(vehiculoEncontrado);
      })
  }, [vehiculoId]);
    
  useEffect(() => {
    const URL = "http://localhost:3001/cars";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setVehiculos(data);
      });
  }, []);

  return (
    <div className="App">
      <img src={tituloImagen} alt="Titulo"  style={{ float: 'left', width: '253px', height: '61px'}}/> 
     <hr style={{ border: '1px solid rgba(0, 0, 0, 0.23)', clear: 'both' }} /> 
      <img src={imagen1} alt="Imagen 1" style={{width: '1244px', height: '323px'}} /> 
      <hr style={{ border: '1px solid rgba(0, 0, 0, 0.2)', opacity: '0.8', clear: 'both' }} />
      <div style={{marginBottom:"45px"}}>
      <table style={{borderCollapse: 'collapse', width: '787px', height: '260px', textAlign: 'left'}}>
    <thead style={{backgroundColor: '#333A40', color: 'white', width: '786px', height: '49.73px', textAlign: 'right'}}>
        <tr>
            <th style={{ textAlign: 'left',paddingLeft:"20px",fontSize:"18px"}}><FormattedMessage id="id"/></th>
            <th style={{ textAlign: 'left',paddingLeft:"20px",fontSize:"18px"}}><FormattedMessage id="marca"/></th>
            <th style={{ textAlign: 'left',paddingLeft:"20px",fontSize:"18px" }}><FormattedMessage id="linea"/></th>
            <th style={{ textAlign: 'left',paddingLeft:"30px", paddingRight:"120px",fontSize:"18px" }}><FormattedMessage id="modelo"/></th>
        </tr>
    </thead>
    <tbody>
    {vehiculos.map((vehiculo, index) => (
        <React.Fragment key={vehiculo.id}> 
        {index === 0 && (
                <tr style={{ height: '5px' }}>
                    
                </tr>
            )}
        {index === 0 && (
                <tr style={{ height: '5px' }}>
                    
                </tr>
            )}
        {index === 0 && (
                <tr style={{ height: '5px' }}>
                    
                </tr>
            )}
         {index !== 0 && (
                <tr key={`${vehiculo.id}-separator`}style={{ height: '5px' }}>
                    <td colSpan="4"><hr/></td>
                </tr>
            )}
        <tr key={vehiculo.id} style={{height:"20px", cursor: 'pointer' }} onClick={() => { window.location.href = `/vehiculos/${vehiculo.id}` }}>
            <td style={{textAlign: 'left',paddingLeft:"20px",fontSize:"18px"}}>{vehiculo.id}</td>
            <td style={{textAlign: 'left',paddingLeft:"20px",fontSize:"18px"}}>{vehiculo.marca}</td>
            <td style={{textAlign: 'left',paddingLeft:"20px",fontSize:"18px"}}>{vehiculo.linea}</td>
            <td style={{textAlign: 'left',paddingLeft:"30px",fontSize:"18px"}}>{vehiculo.modelo}</td>
        </tr>
        </React.Fragment>
    ))}
</tbody>
    </table>
        <div style={{ backgroundColor: '#D9D9D9', padding: '20px', borderRadius: '1px', border: '1px solid black', width:"427px", height:"351px", position: "absolute", transform:"translate(191%,-118%)"}}>
            {vehiculo ? (
                <div>
                <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '18px',marginBottom: "30px" }}>{vehiculo.marca} {vehiculo.linea}</h1>
                <img src={vehiculo.imagen} alt={vehiculo.imagen} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', width:"318px", height:"159px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }} />
                <p style={{ textAlign: 'left',fontSize: '18px',marginLeft:"20px", marginTop:"18px", marginBottom: "-12px" }}><span style={{ fontSize: '24px'}}>&rarr;</span> <FormattedMessage id="kilometraje"/>: {vehiculo.kilometraje}</p>
                <p style={{ textAlign: 'left',fontSize: '18px',marginLeft:"20px", marginBottom: "-12px" }}><span style={{ fontSize: '24px'}}>&rarr;</span> <FormattedMessage id="color"/>: {vehiculo.color}</p>
                <p style={{ textAlign: 'left',fontSize: '18px',marginLeft:"20px" }}><span style={{ fontSize: '24px'}}>&rarr;</span> <FormattedMessage id="referencia"/>: {vehiculo.referencia}</p>
                </div>
            ) : (
                <p>Cargando vehículo...</p>
            )}
            </div>
      </div>
      <div style={{ textAlign: 'center', height: '36px'}}>
        <img src={imagenAbajo} alt="Imagen Abajo" />
      </div>
    </div>
  );
}

export default Detail;
