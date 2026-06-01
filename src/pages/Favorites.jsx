import { useState } from "react";
import Navbar from "../components/Navbar";

function Favorites() {
  const [outfits, setOutfits] = useState(
    JSON.parse(localStorage.getItem("favoriteOutfits")) || []
  );

  const deleteFavorite = (index) => {
    const updated = outfits.filter((_, i) => i !== index);

    setOutfits(updated);

    localStorage.setItem(
      "favoriteOutfits",
      JSON.stringify(updated)
    );
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1>Favorite Outfits ❤️</h1>

          {outfits.length === 0 ? (
            <p>No favorite outfits yet.</p>
          ) : (
            outfits.map((outfit, index) => (
              <div
                key={index}
                className="favorite-card"
              >
                <h3>
                  ⭐ Style Score: {outfit.score}%
                </h3>

                <p>
                  Occasion: {outfit.occasion}
                </p>

                <p>
                  Weather: {outfit.weather}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    marginTop: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  {outfit.top?.image && (
                    <img
                      src={outfit.top.image}
                      alt="Top"
                      className="outfit-image"
                    />
                  )}

                  {outfit.bottom?.image && (
                    <img
                      src={outfit.bottom.image}
                      alt="Bottom"
                      className="outfit-image"
                    />
                  )}
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteFavorite(index)}
                >
                  Delete 🗑️
                </button>
              </div>
            ))
          )}

        </div>
      </div>
    </>
  );
}

export default Favorites;