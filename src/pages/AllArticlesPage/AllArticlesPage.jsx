import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import articlesData from "../../db/articles.json";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../store/articleSlice";

function AllArticlesPage() {
  const dispatch = useDispatch();
  // Get searchText and category from Redux store
  const searchText = useSelector((state) => state.articles.searchText);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const [filteredArticles, setFilteredArticles] = useState(
    articlesData.articles
  );

  // Effect to filter articles when search text or selected category changes
  useEffect(() => {
    let filtered = articlesData.articles;

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
  }, [selectedCategory, searchText]);

  const handleClearSearch = () => {
    // Dispatch the action to clear the search text
    dispatch(setSearchText(""));
  };

  return (
    <Box
      sx={{
        marginY: 2,
        marginX: {xs: 1, md: "340px"},
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
            No results for <b>{searchText}</b>
          </Typography>
          <Button sx={{ marginTop: 2 }} onClick={handleClearSearch}>
            Reset Search settings
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default AllArticlesPage;
