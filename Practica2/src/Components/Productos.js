import '../App.css';
import {Button ,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Productos = (props) => {
  return ( 
    <div className="List">
       <h2  className="encabezados">Productos</h2>
    {
       
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th></th> 
          </tr>
        </thead>
          <tbody>
        {
          props.lista.map((c,index)=>
            <tr key={index}>
                <td>{c.codigo}</td>
                <td>{c.descripcion}</td>
                <td>${(c.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                <td><Button onClick={()=>props.enviar(c,c.precio)} >Enviar</Button></td>
            </tr>
          )
        }
          </tbody>
        </Table>
        
      }
      <h3  className="encabezados">Total: ${(props.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h3>

      </div>
 );
}
 
export default Productos;