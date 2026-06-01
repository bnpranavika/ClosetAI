import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    console.log("Saved User:", savedUser);
    console.log("Entered Email:", email);
    console.log("Entered Password:", password);

    if (!savedUser) {
      alert("No account found");
      return;
    }

    if (
      savedUser.email.trim() === email.trim() &&
      savedUser.password.trim() === password.trim()
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful ✅");

      navigate("/dashboard");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="page">
      <div className="card">

        <h1>Login 👗</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="input-field"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="input-field"
        />

        <button
          className="btn btn-primary"
          onClick={handleLogin}
        >
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
          New User?{" "}
          <Link to="/signup">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}