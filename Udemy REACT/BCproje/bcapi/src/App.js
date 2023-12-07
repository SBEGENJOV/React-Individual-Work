import "./App.css";
import Ornek1 from "./ornek1";
import Ornek2 from "./ornek2"; 
import Ornek3 from "./ornek3"; 
import Ornek4 from "./ornek4"; 

function App() {
  return (
    <div className="App">
    <Ornek1 
    isim="Seyit" 
    soyisim="Begenjov"
    link = "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
    yil={Ornek2(1998,'Tuba')}
    />
    <Ornek3/>
    <Ornek4/>

    </div>
  );
}

export default App;
