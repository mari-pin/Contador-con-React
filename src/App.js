
import './App.css';
import Saludo from './components/saludo.jsx';
import Contador from './components/contador.jsx';

function App() {
  return (
    <div className="App">
      {/*<Saludo nombre= "Maria">contenido </Saludo>
      <Saludo nombre= "Luis">otro contenido</Saludo>*/}

      <Contador/>
    </div>
  );
}

export default App
