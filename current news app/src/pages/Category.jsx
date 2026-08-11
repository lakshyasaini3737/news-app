import { useParams } from "react-router-dom";
import NewsCard from "../component/NewsCard";
import newsData from "../data/newsData";

function Category() {
  const { name } = useParams();

  const categoryNews = newsData.filter(
    (news) => news.category === name
  );

  return (
    <div className="home">

      <h1 className="home-title">
        {name} News
      </h1>

      <div className="news-container">

        {categoryNews.length > 0 ? (
          categoryNews.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
            />
          ))
        ) : (
          <div className="no-results">
            <h2>No News Found</h2>
            <p>
              There is no news available in this category.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Category;