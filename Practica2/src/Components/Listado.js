import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="List">
        {
                    
            props.lista.length===0   
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
              props.lista.map((a,index)=>
                <tr key={index}>
                    <td>{p.codigo}</td>
                    <td>{p.descripcion}</td>
                    <td>{p.precio}</td>
                    <td><Button onClick={()=>props.eliminar(a.id)} variant="danger">Eliminar</Button></td>
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