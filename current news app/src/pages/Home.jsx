import { useState } from "react";

import NewsCard from "../component/NewsCard";
import ErrorMessage from "../component/ErrorMessage";

import newsData from "../data/newsData";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Business",
    "Sports",
    "Health",
    "Science",
    "World",
  ];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || news.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home">

      <h1 className="home-title">
        Latest News
      </h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="category-buttons">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={category === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="news-container">

        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
            />
          ))
        ) : (
          <ErrorMessage message="No news found." />
        )}

      </div>

    </div>
  );
}

export default Home;