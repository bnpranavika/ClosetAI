import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddClothes from "./pages/AddClothes";
import Wardrobe from "./pages/Wardrobe";
import CreateOutfit from "./pages/CreateOutfit";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-clothes" element={<AddClothes />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/create-outfit" element={<CreateOutfit />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;