
import './App.css';
import { Button1 } from './components/Button1';


function App() {
  const handleClickOne = () => {
    console.log('button1');
  }
  const handleClickTwo = () => {
    console.log('button1');
  }
  return (
    <div className='App'>
      <Button1 type='white' onClick={handleClickOne}>
        Button 1
      </Button1>

      <Button1 type='black' onClick={handleClickTwo}>
        Button 2
      </Button1>
    </div>
  );
}

export default App;
