import React, { useState } from 'react'; //Hooks almacenar estados
import logo from './logo.svg';
import './App.css';

/*
function Greeting(props){
  console.log(props.name);  
  return <h1>Hola {props.name} {props.lastname} tienes {props.age}  </h1>;
}
*/

//Componente antiguo 
class Greeting extends React.Component {
  render(){  //Metodo que manda llamar React se llama render 
    return <h1>Hola {this.props.name} {this.props.lastname} tienes {this.props.age} </h1>;
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      lastname: '',
      age: '',
    }
  }

handleChange = event => {
    this.setState({
    name: event.target.value
 });
}

render(){
   return (
    <div>
       <input type="text" onChange= {this.handleChange}/>
       <input type="text" onChange= {this.handleChange2}/>
       <input type="text" onChange= {this.handleChange3}/>
       <Greeting name={this.state.name} lastname={this.state.lastname} age={this.state.age}/>
    </div>
   );
  }
}

export default App;

//Componente Principal
/*
function App() {
  const [name, setName] = useState(""); //->[valorActual, funcionParaActual]
  const handleChange = event => {
    setName(event.target.value);
  }
  const [lastname, setlastName] = useState("");
  const handleChange2 = event => {
    setlastName(event.target.value);
 }
  const [age, setAge]=useState("");
  const handleChange3 = event => {
    setAge(event.target.value); 
 }
  /*JSX*/
/*  
  return (
      <div>
         <input type="text" onChange= {handleChange}/>
         <input type="text" onChange= {handleChange2}/>
         <input type="text" onChange= {handleChange3}/>
         <Greeting name={name} lastname={lastname} age={age}/>
      </div>
  );
}
*/



