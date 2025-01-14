import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CartPage from "./pages/CartPage/CartPage";
import AllArticlesPage from "./pages/AllArticlesPage/AllArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage/ArticleDetailPage";
import theme from "./theme/theme";
import AppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/articles" element={<AllArticlesPage />} />
          <Route path="/article/:articleId" element={<ArticleDetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
