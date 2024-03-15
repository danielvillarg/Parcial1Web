import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Vehiculo(props) {
 return (
    <Link to={"/vehiculos/" + props.vehiculo.id}>
  <Card 
   style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Body>
       <Card.Title>
         
       </Card.Title>
       <Card.Text>{props.vehiculo.id}</Card.Text>
       <Card.Text>{props.vehiculo.marca}</Card.Text>
       <Card.Text>{props.vehiculo.linea}</Card.Text>
       <Card.Text>{props.vehiculo.modelo}</Card.Text>

     </Card.Body>
   </Card>
   </Link>
 );
}

export default Mascota;