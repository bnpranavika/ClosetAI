import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Wardrobe() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("wardrobe")) || [];

    setClothes(stored);
  }, []);

  const deleteItem = (id) => {
    const updated = clothes.filter(
      (item) => item.id !== id
    );

    setClothes(updated);

    localStorage.setItem(
      "wardrobe",
      JSON.stringify(updated)
    );
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">
          <h1>My Wardrobe 👕👗</h1>

          {clothes.length === 0 ? (
            <p>No clothes added yet.</p>
          ) : (
            <div className="clothes-grid">
              {clothes.map((item) => (
                <div
                  key={item.id}
                  className="clothing-card"
                >
                  <img
                    src={item.image}
                    alt={item.category}
                    className="clothes-image"
                  />

                  <h3>{item.category}</h3>

                  <p>
                    <strong>Color:</strong>{" "}
                    {item.color}
                  </p>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteItem(item.id)
                    }
                  >
                    Delete 🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}