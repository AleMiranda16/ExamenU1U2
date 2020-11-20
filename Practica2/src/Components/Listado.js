import '../App.css';
import {Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="List">
          <h2 className="encabezados">Mi carrito</h2> 
        { 

            props.carrito.length===0   
            ? <p>No hay productos en su carrito</p>
            : 
        
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
              props.carrito.map((c,index)=>
                <tr key={index}>
                    <td>{c.codigo}</td>
                    <td>{c.descripcion}</td>
                    <td>${(c.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.eliminar(c.precio,index)} variant="danger">Eliminar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }

          </div>
     );
}
 
export default Listado;