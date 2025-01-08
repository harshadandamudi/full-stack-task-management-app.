import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import "../PlatterItem.css";

const PlatterItem = () => {
  const { platterItems, removeFromPlatter } = useAppContext();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleConfirmPlatter = () => {
    if (platterItems.length === 0) {
      alert("Your platter is empty! Please add items to confirm.");
      return;
    }
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const groupedItems = platterItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="platter">
      <h2 className="platter-title">Platter Items</h2>
      {Object.keys(groupedItems).length > 0 ? (
        Object.keys(groupedItems).map((category) => (
          <div className="platter-section" key={category}>
            <h3>{category}</h3>
            <ul>
              {groupedItems[category].map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromPlatter(item.id)}
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No items in your platter yet.</p>
      )}

      <button className="confirm-btn" onClick={handleConfirmPlatter}>
        Confirm Platter
      </button>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Confirm Order</h3>
            <p>Are you sure you want to place this order?</p>
            <button className="popup-btn" onClick={closePopup}>
              Cancel
            </button>
            <button
              className="popup-btn confirm-order-btn"
              onClick={() => {
                alert("Order Placed Successfully!");
                closePopup();
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatterItem;
