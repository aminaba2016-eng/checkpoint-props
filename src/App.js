import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types";
import FullNam from './profile/component/FullNam.js';



function App() {
  let bio
  let alrt=()=>{
    alert("hello my name is amina")
  }
  return (
    <div className="App">
      <FullNam alrt={alrt} name="amina" bio={bio} profession="student" children={<img src="imageInPublic.jpg" />}/>
      
      
      
      

    </div>
  );
}

export default App;
