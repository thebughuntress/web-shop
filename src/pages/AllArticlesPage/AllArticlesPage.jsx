import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../api";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { setSearchText } from "../../store/articleSlice";
import { setCategory } from "../../store/categorySlice";
import { useTranslation } from "react-i18next";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";

function AllArticlesPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.articles.searchText);
  const selectedCategoryKey = useSelector(
    (state) => state.category.selectedCategory
  );
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

  // Effect to filter articles when search text or selected category changes
  useEffect(() => {
    let filtered = articles;

    // Filter by selected category
    if (selectedCategoryKey && selectedCategoryKey !== "all-articles") {
      filtered = filtered.filter(
        (article) => article.category.key === selectedCategoryKey
      );
    }

    // Filter by search text
    if (searchText) {
      const lowerCaseSearchText = searchText.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.name.toLowerCase().includes(lowerCaseSearchText) ||
          article.description.toLowerCase().includes(lowerCaseSearchText)
      );
    }

    // Update filtered articles
    setFilteredArticles(filtered);
  }, [articles, selectedCategoryKey, searchText]);

  const handleClearSearch = () => {
    // Dispatch the action to clear the search text
    dispatch(setSearchText(""));
    dispatch(setCategory("all-articles"));
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
        //backgroundColor: { xs: "red", lg: "green", xl: "yellow" },
        marginY: 2,
        marginX: { xs: 1, lg: "160px", xl: "280px" },
        display: "flex",
        flexWrap: "wrap",
        justifyContent:
          filteredArticles.length <= 3 && filteredArticles.length > 0
            ? "flex-start"
            : "center",
        alignItems: "center",
        rowGap: 5,
        columnGap: 1,
        paddingTop: 5,
      }}
    >
      {filteredArticles.length > 0 ? (
        <>
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
          <ScrollUpButton />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            color="primary.light"
            sx={{ fontWeight: 500 }}
          >
            {t("no-results")}{" "}
            <b>{searchText ? searchText : selectedCategoryKey}</b>
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
