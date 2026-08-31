import { Routes, Route } from "react-router";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import BagPage from "./components/pages/BagPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


function App() {
  return (
      <div id="body-container">
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Bag" element={<BagPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App;
