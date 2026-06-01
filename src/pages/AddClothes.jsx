import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AddClothes() {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const saveClothing = () => {
    if (!image || !category || !color) {
      alert("Please fill all fields");
      return;
    }

    const clothingItem = {
      id: Date.now(),
      image,
      category,
      color,
    };

    const existing =
      JSON.parse(localStorage.getItem("wardrobe")) || [];

    localStorage.setItem(
      "wardrobe",
      JSON.stringify([...existing, clothingItem])
    );

    alert("Clothing item saved successfully ✅");

    // Clear form
    setImage(null);
    setCategory("");
    setColor("");
  };

  return (
    <div className="page">
      <Navbar />

      <div className="card add-clothes-card">
        <h1 className="page-title">
          Add New Clothing 👗
        </h1>

        {image && (
          <div className="preview-container">
            <img
              src={image}
              alt="Preview"
              className="preview-image"
            />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="input-field"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select-field"
        >
          <option value="">Select Category</option>
          <option>Top</option>
          <option>Shirt</option>
          <option>Kurti</option>
          <option>Jeans</option>
          <option>Leggings</option>
          <option>Pants</option>
          <option>Skirt</option>
        </select>

        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="select-field"
        >
          <option value="">Select Color</option>
          <option>Black</option>
          <option>White</option>
          <option>Blue</option>
          <option>Red</option>
          <option>Pink</option>
          <option>Green</option>
          <option>Yellow</option>
          <option>Purple</option>
          <option>Brown</option>
        </select>

        <button
          className="btn btn-primary save-btn"
          onClick={saveClothing}
        >
          Save Clothing ✨
        </button>
      </div>
    </div>
  );
}