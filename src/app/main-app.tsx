import "./main-app.scss";
import { Outlet, useNavigate } from "react-router-dom";

export function MainApp() {
  return (
    <div>
      <header className="app-header">
        <div className="header-content">
          <h1>Ghibli</h1>
          
          <nav className="nav-bar">
            <a href="/home-page.tsx" id="active" className="nav-link">Home</a>
            <a href="/cart-page.tsx" className="nav-link">Cart</a>
            <a href="/order-page.tsx" className="nav-link">Order</a>
          </nav>
        </div>
      </header>
      
      <Outlet />
    </div>
  );
}

export default MainApp;