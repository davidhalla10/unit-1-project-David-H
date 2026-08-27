import { Routes, Route } from "react-router";
import HomePage from "./components/pages/HomePage";
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

        </Routes>
        <Footer />
      </div>
  )
}

export default App;
