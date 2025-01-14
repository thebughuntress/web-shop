import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CartPage from "./pages/CartPage/CartPage";
import AllArticlesPage from "./pages/AllArticlesPage/AllArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage/ArticleDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/articles" element={<AllArticlesPage />} />
        <Route path="/article/:articleId" element={<ArticleDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
