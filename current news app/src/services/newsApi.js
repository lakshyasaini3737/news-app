const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const BASE_URL = "https://newsapi.org/v2";

export async function getTopHeadlines() {
  const response = await fetch(
    `${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch news");
  }

  return data.articles;
}