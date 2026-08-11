import { Link, useParams } from "react-router-dom";
import newsData from "../data/newsData";

function NewsDetails() {
  const { id } = useParams();

  const news = newsData.find(
    (item) => item.id === Number(id)
  );

  // Agar news nahi mili
  if (!news) {
    return (
      <div className="news-not-found">

        <h1>News Not Found 😕</h1>

        <p>
          Sorry, this news article could not be found.
        </p>

        <Link
          to="/"
          className="back-button"
        >
          ← Back to Home
        </Link>

      </div>
    );
  }

  return (
    <div className="news-details">

      <Link
        to="/"
        className="back-button"
      >
        ← Back to Home
      </Link>

      <div className="details-card">

        <img
          src={news.image}
          alt={news.title}
          className="details-image"
        />

        <div className="details-content">

          <p className="details-category">
            {news.category}
          </p>

          <h1>
            {news.title}
          </h1>

          <div className="details-info">

            <span>
              📅 {news.date}
            </span>

            <span>
              📰 {news.source}
            </span>

          </div>

          <p className="details-description">
            {news.description}
          </p>

          <div className="details-text">
            {news.content}
          </div>

        </div>

      </div>

    </div>
  );
}

export default NewsDetails;