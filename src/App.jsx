import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LoginView from "./pages/LoginView";
import RegisterView from "./pages/RegisterView";
import Footer from "./components/Footer/Footer";
import CostsPage from "./pages/Owner/CostsPage";
import AssignTaskPage from "./pages/Manager/AssignTaskPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/owner/costs" element={<CostsPage />} />
            <Route path="/manager/assignTask" element={<AssignTaskPage />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
