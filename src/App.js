
import './App.css';
import FotoList from './FotoList'
import SimpleReactLightbox from "simple-react-lightbox";
import images from './data'



function App() {
  return (
    <SimpleReactLightbox>
      <div className="App">
        <FotoList images ={images} />
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
