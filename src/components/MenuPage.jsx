import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import PlatterItem from "./PlatterItem";
import "../MenuPage.css";
import { useAppContext } from "../context/AppContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Starter");
  const { user, filteredMenuItems, addToPlatter, setCategoryFilter } = useAppContext();
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    setCategoryFilter(selectedCategory);
  }, [selectedCategory, setCategoryFilter]);

  const handleAddToPlatter = (item) => {
    addToPlatter(item);
    if (!addedItems.includes(item.id)) {
      setAddedItems([...addedItems, item.id]);
    }
  };

  return (
    <div className="menu-page">
      <header className="header">
        <div className="logo">
          <img className="company_logo" src="https://placehold.co/400" alt="logo" />
          <h1>Craft My Plate</h1>
        </div>
        <nav>
          <a href="#">Orders</a>
          <a href="#">Payment History</a>
          <a href="#">Order History</a>
          <a href="#">Master</a>
        </nav>
        <div className="user-info">
          <span className="material-icons">account_circle</span>
          <span>{user?.username || "Guest"}</span>
        </div>
        <span className="material-icons" style={{ cursor: "pointer" }}>
          power_settings_new
        </span>
      </header>

      <div className="content">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="menu-content">
          <input
            className="search-bar"
            type="text"
            placeholder="Search categories"
            style={{
              backgroundImage: 'url(https://fonts.gstatic.com/s/i/materialicons/search/v12/24px.svg)',
              backgroundSize: "20px 20px",
              backgroundPosition: "10px center",
              backgroundRepeat: "no-repeat",
              paddingLeft: "30px",
            }}
          />

          <div className="menu-items">
            {filteredMenuItems.map((item) => (
              <div className="menu-item" key={item.id}>
                <div className="image-container">
                  <img src="https://placehold.co/100" alt={item.name} />
                </div>
                <div className="content-container">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button
                    className={`add-btn ${
                      addedItems.includes(item.id) ? "added" : ""
                    }`}
                    onClick={() => handleAddToPlatter(item)}
                    disabled={addedItems.includes(item.id)}
                  >
                    {addedItems.includes(item.id) ? "Added" : "Add"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PlatterItem />
      </div>
    </div>
  );
};

export default MenuPage;
