import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import firebase from './Settings/ConfigFirebase.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
      {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
      {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
      {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
      {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
      {codigo:5,descripcion:"Mochila Xiaomi", precio:699},
      {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
      ],
      };
  }
  
  componentDidMount(){
    firebase.database().ref('Carrito').on('value', snapshot=> {
      let carritoLista=[];
      snapshot.forEach(row=>{
        carritoLista.push({
            codigo:row.val().codigo,
            descripcion:row.val().descripcion,
            precio:row.val().precio,
          })
      })
      this.setState({
        ...this.state,
        lista:carritoLista
      })
    });
  }


  guardarCambios=(e)=>{
    this.setState({ 
      ...this.state,
      carrito:{
      ...this.state.carrito,  
      [e.target.name]: e.target.value
      } 
    });
  }
  
  eliminar=(id)=>{

    firebase.database().ref('Carrito/' + id).set(null).then(() => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    });

    const temporal = this.state.lista.filter(a=>a.id!==id)
    this.setState({
      ...this.state,
      lista:temporal
    })
  }

  enviar=(e)=>{
    e.preventDefault();

    const {codigo,descripcion, precio} = this.state.carrito;

      firebase.database().ref('Carrito/' + id).update(this.state.carrito).then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Prenda agregada',
          showConfirmButton: false,
          timer: 1500
        })
      });
    
  }
  
  render() {
    
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          <Formulario
              enviar={this.enviar}
              guardarCambios={this.guardarCambios}
              carrito={this.state.carrito}
              desactivado={this.state.desactivado}
          />
          <Listado
            lista={this.state.lista}
            eliminar={this.eliminar}
            modificar={this.modificar}
          />
          
        </div>
      </div>
    )
  }
}

export default App;
