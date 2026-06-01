import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CreateOutfit() {
  const [outfit, setOutfit] = useState(null);
  const [occasion, setOccasion] = useState("");
  const [weather, setWeather] = useState("");

  const generateOutfit = () => {
    const data =
      JSON.parse(localStorage.getItem("wardrobe")) || [];

    const tops = data.filter((item) =>
      ["top", "shirt", "kurti"].includes(
        item.category?.toLowerCase()
      )
    );

    const bottoms = data.filter((item) =>
      ["jeans", "leggings", "pants", "skirt"].includes(
        item.category?.toLowerCase()
      )
    );

    if (!tops.length || !bottoms.length) {
      alert("Please add clothes first.");
      return;
    }

    const top =
      tops[Math.floor(Math.random() * tops.length)];

    const bottom =
      bottoms[Math.floor(Math.random() * bottoms.length)];

    let score = 50;
    const suggestions = [];

    // Occasion Scoring

    if (occasion === "Office Wear") {
      if (top.category === "Shirt") {
        score += 20;
        suggestions.push("Perfect for office wear.");
      }
    }

    if (occasion === "Party") {
      if (
        top.color === "Black" ||
        top.color === "Red"
      ) {
        score += 20;
        suggestions.push("Stylish party outfit.");
      }
    }

    if (occasion === "College Wear") {
      score += 15;
      suggestions.push("Comfortable for college.");
    }

    // Weather Scoring

    if (weather === "Hot") {
      if (
        top.color === "White" ||
        top.color === "Yellow"
      ) {
        score += 15;
        suggestions.push(
          "Light colors are great for hot weather."
        );
      }
    }

    if (weather === "Cold") {
      if (bottom.category === "Jeans") {
        score += 15;
        suggestions.push(
          "Jeans are suitable for cold weather."
        );
      }
    }

    if (weather === "Rainy") {
      score += 10;
      suggestions.push(
        "Practical outfit for rainy conditions."
      );
    }

    // Color Matching

    if (
      (top.color === "Black" &&
        bottom.color === "White") ||
      (top.color === "White" &&
        bottom.color === "Black") ||
      (top.color === "Blue" &&
        bottom.color === "White") ||
      (top.color === "White" &&
        bottom.color === "Blue")
    ) {
      score += 20;
      suggestions.push("Excellent color combination.");
    }

    if (score > 100) score = 100;

    setOutfit({
      top,
      bottom,
      score,
      occasion,
      weather,
      suggestions,
    });
  };

  const addToFavorites = () => {
    const favs =
      JSON.parse(
        localStorage.getItem("favoriteOutfits")
      ) || [];

    favs.push(outfit);

    localStorage.setItem(
      "favoriteOutfits",
      JSON.stringify(favs)
    );

    alert("Added to Favorites ❤️");
  };

  return (
    <>
      <Navbar />

      <div className="page">

        <div className="card">

          <h2>Create Smart Outfit ✨</h2>

          <select
            value={occasion}
            onChange={(e) =>
              setOccasion(e.target.value)
            }
          >
            <option value="">
              Select Occasion
            </option>
            <option>Casual</option>
            <option>College Wear</option>
            <option>Office Wear</option>
            <option>Friends Outing</option>
            <option>Party</option>
            <option>Travel</option>
          </select>

          <select
            value={weather}
            onChange={(e) =>
              setWeather(e.target.value)
            }
          >
            <option value="">
              Select Weather
            </option>
            <option>Hot</option>
            <option>Cold</option>
            <option>Rainy</option>
            <option>Sunny</option>
            <option>Cloudy</option>
          </select>

          <button
            className="btn btn-primary"
            onClick={generateOutfit}
          >
            Generate Outfit
          </button>

          {outfit && (
            <div className="outfit-result">

              <h3>
                ⭐ Style Score:
                {" "}
                {outfit.score}%
              </h3>

              <p>
                <strong>Occasion:</strong>
                {" "}
                {outfit.occasion}
              </p>

              <p>
                <strong>Weather:</strong>
                {" "}
                {outfit.weather}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src={outfit.top.image}
                  alt=""
                  width="150"
                />

                <img
                  src={outfit.bottom.image}
                  alt=""
                  width="150"
                />
              </div>

              <div
                style={{
                  marginTop: "20px",
                  textAlign: "left",
                }}
              >
                <h4>Suggestions</h4>

                {outfit.suggestions.map(
                  (item, index) => (
                    <p key={index}>
                      ✔ {item}
                    </p>
                  )
                )}
              </div>

              <button
                className="btn btn-danger"
                onClick={addToFavorites}
              >
                Add to Favorites ❤️
              </button>

            </div>
          )}

        </div>

      </div>
    </>
  );
}