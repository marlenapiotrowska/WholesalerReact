import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LoginView from "./pages/LoginView.jsx";
import RegisterView from "./pages/RegisterView.jsx";
import Footer from "./components/Footer/Footer.jsx";

import CostsPage from "./pages/Owner/CostsPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            
            <Route path="/owner/costs" element={<CostsPage />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
