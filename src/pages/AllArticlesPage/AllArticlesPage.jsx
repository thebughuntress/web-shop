import { Box } from "@mui/material";
import articlesData from "../../db/articles.json";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

function AllArticlesPage() {
  return (
    <Box
      sx={{
        margin: 2,
        display: "flex",
        flexWrap: "wrap",
        rowGap: 5,
        columnGap: 1,
        justifyContent: "space-around",
      }}
    >
      {articlesData.articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Box>
  );
}

export default AllArticlesPage;
