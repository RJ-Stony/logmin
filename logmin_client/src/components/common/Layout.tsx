import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header>
        <h1>Logmin</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Logmin</p>
      </footer>
    </div>
  );
};

export default Layout;
