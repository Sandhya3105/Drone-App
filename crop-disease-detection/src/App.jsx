import { useNavigate } from "react-router-dom"; // Import React Router navigation
import "./App.css";

function App() {
  const navigate = useNavigate(); // Initialize navigation

  const redirectToLogin = () => {
    navigate("/login"); // Use React Router to navigate
  };

  return (
    <div className="mobile-view" style={{ backgroundColor: "#bccf1a" }}>
      <h1 className="logo">
        <img src="/logo.png" alt="Logo" className="logo" />
      </h1>  
      
      <img src="/agri.png" alt="Logo" className="drone-image" />
      
    
      <button className="get-started" onClick={redirectToLogin}>
        Get Started →
      </button>
    </div>
  );
}

export default App;
