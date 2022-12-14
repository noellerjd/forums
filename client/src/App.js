import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Router>
        <Routes>
          <Route path="/post-page" element={<PostPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
