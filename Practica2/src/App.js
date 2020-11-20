import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './Components/Encabezado';
import Productos from './Components/Productos';
import Listado from './Components/Listado';


class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      producto:[
      {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
      {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
      {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
      {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
      {codigo:5,descripcion:"Mochila Xiaomi", precio:699},
      {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
      ],
      };
  }
  
  

  eliminar=(precio,index)=>{

    const temporal = this.state.carrito.filter((a,i)=>i!==index)

    let total = this.state.total;

    this.setState({
      carrito:temporal,
      total:total-precio
    })

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Producto Eliminado',
      showConfirmButton: false,
      timer: 1500
    })
    
  }

  enviar=(producto,precio)=>{
    

      let temporal = this.state.carrito;
      let total = this.state.total;

      this.setState({
        ...this.state,
        carrito:[...temporal,producto],
        total:total+precio
      })

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      })
    
  }
  
  render() {
    
    return (
      <div className="App">
        <Encabezado/>
        <div className="Containers">
          <Productos
              enviar={this.enviar}
              lista={this.state.producto}
              total={this.state.total}
          />
          <Listado
            carrito={this.state.carrito}
            eliminar={this.eliminar}
          />
          
        </div>
      </div>
    )
  }
}

export default App;
