import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {


  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>  
      <SayMyName nome = 'João'/>
      <SayMyName nome = 'Ana'/>
      <Pessoa nome = 'João' idade = '19' profissao = 'programador' foto = 'https://via.placeholder.com/150'/>
    </div>
  );
}

export default App;
