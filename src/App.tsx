import './App.css';
import Button from './components/Button';
import './index.css';

function App() {
  const handleClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div>
      <Button label="Login" onClick={handleClick} />
    </div>
  );
}

export default App;
