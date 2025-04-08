import { Outlet } from "react-router-dom";

function Layout() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="layout">
      <header>
        <h1>Logmin</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© {currentYear} Logmin</p>
      </footer>
    </div>
  );
}

export default Layout;
