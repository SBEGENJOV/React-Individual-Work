
import './App.css';
import {useState} from 'react';

function App() {
  const [value, setValue] = useState(0) //ilk deger değişken isimi. 

  const tiklama =()=>{
    setValue(value+1);
  };

  return (
    <div className="App"> 
    <button onClick={tiklama}>Bas</button>
    <div>{value}</div>
     </div>
  );
}

export default App;
