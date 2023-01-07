import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
      <SayMyName nome = 'João'/>
      <SayMyName nome = 'Ana'/>
      <SayMyName nome = {nome}/>
      <Pessoa nome = 'João' idade = '19' profissao = 'programador' foto = 'https://via.placeholder.com/150'/>
    </div>
  );
}

export default App;
