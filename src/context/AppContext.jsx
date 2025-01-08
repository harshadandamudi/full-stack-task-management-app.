import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [menuItems] = useState([
    // Starters
    { id: 1, category: "Starter", name: "Paneer 65", description: "Crispy fried paneer" },
    { id: 2, category: "Starter", name: "Crispy Corn", description: "Spicy crispy corn" },
    { id: 3, category: "Starter", name: "Spring Rolls", description: "Crispy rolls filled " },
    { id: 4, category: "Starter", name: "Samosa", description: "Crispy pastry filled " },
    { id: 5, category: "Starter", name: "Chili Paneer", description: "Fried paneer tossed" },
    { id: 6, category: "Starter", name: "Aloo Tikki", description: "Fried mashed potato " },
    
    // Biryani
    { id: 10, category: "Biryani", name: "Chicken Biryani", description: "Flavorful chicken biryani" },
    { id: 11, category: "Biryani", name: "Mutton Biryani", description: "Rich mutton biryani" },
    { id: 12, category: "Biryani", name: "Vegetable Biryani", description: "Mixed vegetables cooked " },
    { id: 13, category: "Biryani", name: "Fish Biryani", description: "Fresh fish cooked " },
    { id: 14, category: "Biryani", name: "Prawn Biryani", description: "Flavorful biryani made" },
    { id: 15, category: "Biryani", name: "Egg Biryani", description: "Eggs cooked with flavor" },
    
    // Beverages
    { id: 19, category: "Beverages", name: "Lassi", description: "Sweet yogurt drink" },
    { id: 20, category: "Beverages", name: "Coke", description: "Chilled soft drink" },
    { id: 21, category: "Beverages", name: "Mango Lassi", description: "Refreshing mango-flavored " },
    { id: 22, category: "Beverages", name: "Fresh Lemonade", description: "Tangy and refreshing " },
    { id: 23, category: "Beverages", name: "Iced Tea", description: "Chilled tea with lemon " },
    { id: 24, category: "Beverages", name: "Cold Coffee", description: "Chilled coffee with milk " },
  ])
  const [categories, setCategories] = useState([]);
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);
  const [platterItems, setPlatterItems] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(menuItems.map((item) => item.category))];
    setCategories(uniqueCategories);

    if (uniqueCategories.length > 0) {
      setFilteredMenuItems(menuItems.filter((item) => item.category === uniqueCategories[0]));
    }
  }, [menuItems]);

  const setCategoryFilter = (category) => {
    const filteredItems = menuItems.filter((item) => item.category === category);
    setFilteredMenuItems(filteredItems);
  };

  const addToPlatter = (item) => {
    if (!platterItems.some((platterItem) => platterItem.id === item.id)) {
      setPlatterItems([...platterItems, item]);
    }
  };

  const removeFromPlatter = (itemId) => {
    setPlatterItems(platterItems.filter((item) => item.id !== itemId));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        menuItems,
        platterItems,
        categories,
        filteredMenuItems,
        addToPlatter,
        removeFromPlatter,
        setCategoryFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
