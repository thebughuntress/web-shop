import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../api";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { setSearchText } from "../../store/articleSlice";
import { useTranslation } from "react-i18next";

function AllArticlesPage() {
  const { t } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);

        // Introduce a fake delay
        await new Promise((resolve) => setTimeout(resolve, 700));

        const data = await getArticles();
        setArticles(data);
        setFilteredArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const dispatch = useDispatch();
  // Get searchText and category from Redux store
  const searchText = useSelector((state) => state.articles.searchText);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  // Effect to filter articles when search text or selected category changes
  useEffect(() => {
    let filtered = articles;

    // Filter by selected category
    if (selectedCategory && selectedCategory !== "All Articles") {
      filtered = filtered.filter(
        (article) =>
          article.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search text
    if (searchText) {
      const lowerCaseSearchText = searchText.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.name.toLowerCase().includes(lowerCaseSearchText) ||
          article.description.toLowerCase().includes(lowerCaseSearchText) ||
          article.category.toLowerCase().includes(lowerCaseSearchText)
      );
    }

    // Update filtered articles
    setFilteredArticles(filtered);
  }, [articles, selectedCategory, searchText]);

  const handleClearSearch = () => {
    // Dispatch the action to clear the search text
    dispatch(setSearchText(""));
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CircularProgress />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginY: 2,
            color: "primary.main",
          }}
        >
          {t("loading-articles")}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        marginY: 2,
        //backgroundColor: {xs: "red", lg: "green", xl: "yellow"},
        marginX: { xs: 1, lg: "160px", xl: "340px" },
        display: "flex",
        flexWrap: "wrap",
        rowGap: 5,
        columnGap: 1,
        justifyContent: "space-between",
        paddingTop: 5,
      }}
    >
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            color="primary.light"
            sx={{ fontWeight: 500 }}
          >
            {t("no-results")} <b>{searchText}</b>
          </Typography>
          <Button sx={{ marginTop: 2 }} onClick={handleClearSearch}>
            {t("reset-search")}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default AllArticlesPage;
