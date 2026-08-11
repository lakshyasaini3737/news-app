import { useState } from "react";
import { getTopHeadlines } from "./services/newsApi";

function ApiTest() {
  const [status, setStatus] = useState("");

  async function testAPI() {
    try {
      setStatus("Loading...");

      const articles = await getTopHeadlines();

      setStatus(
        `Success! ${articles.length} news articles received.`
      );
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>News API Test</h1>

      <button onClick={testAPI}>
        Test News API
      </button>

      <p>{status}</p>
    </div>
  );
}

export default ApiTest;