import React from "react";
import { useAppContext } from "../context/AppContext";
import "../Sidebar.css";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["Starter", "Biryani", "Beverages"];

  return (
    <div className="sidebar">
      <input
        className="search-bar"
        type="text"
        placeholder=" Search categories"
        style={{
          backgroundImage: 'url(https://fonts.gstatic.com/s/i/materialicons/search/v12/24px.svg)',
          backgroundSize: '20px 20px',
          backgroundPosition: '10px center',
          backgroundRepeat: 'no-repeat',
          paddingLeft: '30px' 
        }}
      />
   
      <ul className="categories">
        {categories.map((category) => (
          <li
          key={category}
          className={`category ${selectedCategory === category ? "active" : ""}`}
          onClick={() => setSelectedCategory(category)}
        >
          <img src="https://via.placeholder.com/20" alt="icon" style={{ marginRight: '10px' }} />
          {category}
        </li>        
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
