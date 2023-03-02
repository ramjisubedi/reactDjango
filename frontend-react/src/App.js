import {
  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/screen/HomeScreen';
import './App.css';
import ProductScreen from "./components/screen/ProductScreen";


function App() {
  return (
    <Router>
      
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact/>
          <Route path="/product/:id" element={<ProductScreen/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
