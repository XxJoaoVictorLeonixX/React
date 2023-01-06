import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'João'
  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b
  }

  const url  ='https://via.placeholder.com/150'
  return (
    <div className="App">
      <h1>Ola React, meu Nome é joão Victor</h1>
      <p>Meu primeiro App em ReactJS</p>
      <p>olá, {newName}</p>
      <p>soma: {sum(5,5)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
