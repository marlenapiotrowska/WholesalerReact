import { useState } from "react";
import { userApi } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function RegisterView() {
  const [form, setForm] = useState({ name: "", surname: "", role: "Manager", login: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userApi.register(form);
      alert("Account successfully created!");
      navigate("/login");
    } catch (error) {
      console.error("Register error:", error);
      alert("Register error!");
    }
  };

  return (
    <div className="p-4">
      <h1>Register your account</h1>
      <form onSubmit={handleSubmit}>
         <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Surname"
              value={form.surname}
              onChange={(e) => setForm({ ...form, surname: e.target.value })}
            />
            <select
                className="form-input"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              >
                <option value="Manager">Manager</option>
                <option value="Owner">Owner</option>
                <option value="Employee">Employee</option>
            </select>
            <input
              className="form-input"
              type="login"
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
          </div>
          <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
