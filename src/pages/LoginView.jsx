import { useState } from "react";
import { userApi } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function LoginView() {
  const [form, setForm] = useState({ login: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await userApi.login(form);
      console.log("Login success:", res.data);
      navigate("/");

    } catch (error) {
      console.error("Login error:", error);
      alert("Błąd logowania!");
    }
  };

  return (
    <div className="p-4">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-input"
            type="text"
            placeholder="Login"
            value={form.login}
            onChange={(e) => setForm({ ...form, login: e.target.value })}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Hasło"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}