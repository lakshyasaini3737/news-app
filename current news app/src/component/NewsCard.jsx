import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <article className="news-card">

      <img
        src={news.image}
        alt={news.title}
        className="news-image"
      />

      <div className="news-content">

        <p className="news-category">
          {news.category}
        </p>

        <h2 className="news-title">
          {news.title}
        </h2>

        <p className="news-description">
          {news.description}
        </p>

        <p className="news-date">
          {news.date}
        </p>

        <Link
          to={`/news/${news.id}`}
          className="read-more"
        >
          Read More →
        </Link>

      </div>

    </article>
  );
}

export default NewsCard;