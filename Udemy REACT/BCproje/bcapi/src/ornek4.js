import React, { useState } from "react";

function App() {
  const [images, setImages] = useState([]); 
    const fetchDataAndSetImages = async () => {
      
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=12"
        );
        const data = await response.json(); // Gelen veriyi JSON formatına dönüştür
        setImages(data.results); // Resimleri state içine yerleştirin
    };
    fetchDataAndSetImages(); // fetchDataAndSetImages fonksiyonunu çağırın
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.image} alt="" />
      ))}
    </div>
  );
}
export default App;
