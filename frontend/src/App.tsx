import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Pocatra</h1>} />
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </>
  );
}
