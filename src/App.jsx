import Navbar from "./Navbar/Navbar.jsx";
import Login from "./LoginComponent.jsx";
import Footer from "./Footer/Footer.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Login />
      </main>
      <Footer />
    </div>
  );
}

export default App;
