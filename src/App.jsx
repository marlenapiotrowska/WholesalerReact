import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LoginView from "./pages/LoginView.jsx";
import RegisterView from "./pages/RegisterView.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
