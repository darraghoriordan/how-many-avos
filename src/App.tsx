import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import Navigation from "./components/common/Navigation";
import HomePage from "./components/home/HomePage";

export default function App() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
