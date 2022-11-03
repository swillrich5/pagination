import { useState, useEffect } from 'react';
import Images from './components/Images';
import "./App.css"

function App() {

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false);


  useEffect (() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json()
      .then(data => setImages(data)));
    setLoading(false);
  }, [])

  if (loading) {
    return (<p>Loading...</p>) 
  } else {
    return (
      <div className="container mt-5">
        <Images data={ images }/>
      </div>
    );
  }

}

export default App;
