import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/screen/HomeScreen';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
}

export default App;
