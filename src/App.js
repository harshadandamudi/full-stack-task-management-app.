import { Route,Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import MenuPage from './components/MenuPage';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
      <Routes>
        <Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
         </Route>
      </Routes>
      </AppProvider>
    
    </div>
  );
}

export default App;
