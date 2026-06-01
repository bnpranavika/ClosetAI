import Navbar from "../components/Navbar";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1>Welcome 👋</h1>

          <h2>{user?.name}</h2>

          <p>Build your AI fashion wardrobe ✨</p>

        </div>
      </div>
    </div>
  );
}