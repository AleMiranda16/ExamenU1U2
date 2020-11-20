import '../App.css';
import { Button ,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = (props) => {
  return ( 
    <div className="List">
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
          props.lista.map((a,index)=>
            <tr key={index}>
                <td>{p.codigo}</td>
                <td>{p.descripcion}</td>
                <td>${(p.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                <td><Button onClick={()=>props.eliminar(a.id)} variant="danger">Eliminar</Button></td>
            </tr>
          )
        }
          </tbody>
        </Table>
        
      }
      <label htmlFor="id">Total:</label>
        <input
          type="text"
          onChange={props.guardarCambios}
          value={props.ropa.total}
        />

      </div>
 );
}
 
export default Productos;