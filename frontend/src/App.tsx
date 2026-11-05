import { Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import { Dex } from "./Dex";

export default function App() {
  return (
    <>
      <nav className="navbar border-bottom px-3">
        <span className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="" width="30" height="30" className="me-2" />
          Pocatra
        </span>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Cards
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dex">
              Dex
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Settings</a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Pocatra</h1>} />
        <Route path="/dex" element={<Dex></Dex>}></Route>
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </>
  );
}
