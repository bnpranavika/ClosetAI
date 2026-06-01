import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Profile() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [bio, setBio] = useState(user.bio || "");
  const [showPasswordForm, setShowPasswordForm] =
  useState(false);

  const [currentPassword, setCurrentPassword] =
  useState("");

  const [newPassword, setNewPassword] =
  useState("");

  const [confirmPassword, setConfirmPassword] =
  useState("");
  const wardrobe =
    JSON.parse(localStorage.getItem("wardrobe")) || [];

  const favorites =
    JSON.parse(localStorage.getItem("favoriteOutfits")) || [];

  const [notifications, setNotifications] =
    useState(true);

  const [tips, setTips] =
    useState(true);

  const [darkMode, setDarkMode] =
    useState(false);

  const tops =
    wardrobe.filter(
      item => item.category === "Top"
    ).length;

  const shirts =
    wardrobe.filter(
      item => item.category === "Shirt"
    ).length;

  const jeans =
    wardrobe.filter(
      item => item.category === "Jeans"
    ).length;

  const leggings =
    wardrobe.filter(
      item => item.category === "Leggings"
    ).length;

  const logout = () => {
    localStorage.removeItem("user");
    alert("Logged Out Successfully");
    window.location.href = "/";
  };

  const saveProfile = () => {

    const updatedUser = {
      ...user,
      name,
      email,
      phone,
      bio,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    alert("Profile Updated Successfully ✅");

    setEditing(false);

    window.location.reload();
  };
  const changePassword = () => {

  const savedUser =
    JSON.parse(localStorage.getItem("user")) || {};

  if (
    currentPassword !== savedUser.password
  ) {
    alert("Current password is incorrect ❌");
    return;
  }

  if (newPassword.length < 6) {
    alert(
      "Password must contain at least 6 characters"
    );
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match ❌");
    return;
  }

  const updatedUser = {
    ...savedUser,
    password: newPassword,
  };

  localStorage.setItem(
    "user",
    JSON.stringify(updatedUser)
  );

  alert("Password Updated Successfully ✅");

  setCurrentPassword("");
  setNewPassword("");
  setConfirmPassword("");
  setShowPasswordForm(false);
};
  return (
    <>
      <Navbar />

      <div className="page">

        <div className="profile-card">

          <div className="profile-header">

            <div className="profile-avatar">
              👤
            </div>

            <h1>
              Welcome, {name || "Fashionista"} ✨
            </h1>

            <p>
              Manage your wardrobe account
            </p>

            {user.bio && (
              <p className="user-bio">
                {user.bio}
              </p>
            )}

          </div>

          <div className="profile-info">

            <div className="info-box">
              <h3>Email</h3>
              <p>{user.email || "Not Available"}</p>
            </div>

            <div className="info-box">
              <h3>Phone</h3>
              <p>{user.phone || "Not Available"}</p>
            </div>

            <div className="info-box">
              <h3>Total Clothes</h3>
              <p>{wardrobe.length}</p>
            </div>

            <div className="info-box">
              <h3>Tops</h3>
              <p>{tops}</p>
            </div>

            <div className="info-box">
              <h3>Shirts</h3>
              <p>{shirts}</p>
            </div>

            <div className="info-box">
              <h3>Jeans</h3>
              <p>{jeans}</p>
            </div>

            <div className="info-box">
              <h3>Leggings</h3>
              <p>{leggings}</p>
            </div>

            <div className="info-box">
              <h3>Favorites</h3>
              <p>{favorites.length}</p>
            </div>

          </div>

          {editing && (

            <div className="edit-profile-card">

              <h2>Edit Profile</h2>

              <input
                type="text"
                placeholder="Display Name"
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

              <textarea
                placeholder="Tell us about yourself..."
                value={bio}
                onChange={(e) =>
                  setBio(e.target.value)
                }
                className="input-field"
                rows="4"
              />

              <button
                className="btn btn-success"
                onClick={saveProfile}
              >
                Save Changes 💾
              </button>

            </div>

          )}

          <div className="settings-section">

            <h2>
              Settings ⚙️
            </h2>

            <div className="setting-item">
              <span>
                Enable Notifications
              </span>

              <input
                type="checkbox"
                checked={notifications}
                onChange={() =>
                  setNotifications(!notifications)
                }
              />
            </div>

            <div className="setting-item">
              <span>
                Fashion Tips Alerts
              </span>

              <input
                type="checkbox"
                checked={tips}
                onChange={() =>
                  setTips(!tips)
                }
              />
            </div>

            <div className="setting-item">
              <span>
                Dark Mode
              </span>

              <input
                type="checkbox"
                checked={darkMode}
                onChange={() =>
                  setDarkMode(!darkMode)
                }
              />
            </div>

          </div>
          {showPasswordForm && (

  <div className="edit-profile-card">

    <h2>Change Password 🔒</h2>

    <input
      type="password"
      placeholder="Current Password"
      value={currentPassword}
      onChange={(e) =>
        setCurrentPassword(e.target.value)
      }
      className="input-field"
    />

    <input
      type="password"
      placeholder="New Password"
      value={newPassword}
      onChange={(e) =>
        setNewPassword(e.target.value)
      }
      className="input-field"
    />

    <input
      type="password"
      placeholder="Confirm New Password"
      value={confirmPassword}
      onChange={(e) =>
        setConfirmPassword(e.target.value)
      }
      className="input-field"
    />

    <button
      className="btn btn-success"
      onClick={changePassword}
    >
      Update Password 🔒
    </button>

  </div>

)}
          <div className="profile-actions">

            <button
              className="btn btn-primary"
              onClick={() => setEditing(!editing)}
            >
              {editing ? "Cancel" : "Edit Profile ✏️"}
            </button>

            <button
              className="btn btn-secondary"
              onClick={() =>
              setShowPasswordForm(!showPasswordForm)
              }
            >
            {showPasswordForm
              ? "Cancel Password Change"
              : "Change Password 🔒"}
            </button>

            <button
              className="btn btn-danger"
              onClick={logout}
            >
              Logout 🚪
            </button>

          </div>

        </div>

      </div>
    </>
  );
}