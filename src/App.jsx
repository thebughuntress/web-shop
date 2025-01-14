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
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <CssBaseline />
          <Router>
            <AppBar />
            <Box sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/articles" element={<AllArticlesPage />} />
                <Route
                  path="/article/:articleId"
                  element={<ArticleDetailPage />}
                />
              </Routes>
            </Box>
            <Footer />
          </Router>
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
