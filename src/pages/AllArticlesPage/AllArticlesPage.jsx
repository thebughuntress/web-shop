import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import articlesData from "../../db/articles.json";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../store/articleSlice";

function AllArticlesPage() {
   const dispatch = useDispatch();
  // Get searchText from Redux store
  const searchText = useSelector((state) => state.articles.searchText);
  const [filteredArticles, setFilteredArticles] = useState(
    articlesData.articles
  );

  // Filter articles based on searchText in ArticleSearch
  useEffect(() => {
    if (!searchText) {
      setFilteredArticles(articlesData.articles);
    } else {
      const lowerCaseSearchText = searchText.toLowerCase();
      const filtered = articlesData.articles.filter(
        (article) =>
          article.name.toLowerCase().includes(lowerCaseSearchText) ||
          article.description.toLowerCase().includes(lowerCaseSearchText) ||
          article.category.toLowerCase().includes(lowerCaseSearchText)
      );
      setFilteredArticles(filtered);
    }
  }, [searchText]);

  const handleClearSearch = () => {
    // Dispatch the action to clear the search text
    dispatch(setSearchText(""));
  };

  return (
    <Box
      sx={{
        margin: 2,
        display: "flex",
        flexWrap: "wrap",
        rowGap: 5,
        columnGap: 1,
        justifyContent: "space-around",
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
