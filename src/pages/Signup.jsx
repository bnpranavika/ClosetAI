import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !phone || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = {
      name,
      email,
      phone,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Signup Successful ✅");

    navigate("/");
  };

  return (
    <div className="page">
      <div className="card">

        <h1>Signup 👗</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="input-field"
        />

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
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
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
          onClick={handleSignup}
        >
          Signup
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have an account?{" "}
          <Link to="/">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}