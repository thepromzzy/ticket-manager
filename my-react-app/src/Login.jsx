import "./auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    
    const registeredUser = localStorage.getItem("registeredUser");

    if (!registeredUser) {
      toast.error("No account found! Please create an account first.", {
        duration: 5000,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    const userData = JSON.parse(registeredUser);

    // Validation
    if (email === userData.email && password === userData.password) {
      toast.success("Welcome back! Login successful", {
        duration: 3000,
      });

    
      login({ email: userData.email });

      navigate("/");
    } else {
      toast.error("Invalid email or password. Please try again. ❌", {
        duration: 4000,
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-hero">
        <p>Your Ticket Manager</p>
      </div>
        <h2 className="auth-title">Login</h2>

        <form onSubmit={handleLogin}>
          <label className="auth-label">Email</label>
          <input
            type="email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="you@example.com"
          />

          <label className="auth-label">Password</label>
          <input
            type="password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            minLength="6"
            placeholder="••••••••"
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-bottom-text">
          Don't have an account?{" "}
          <Link to="/signup" className="auth-link">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}