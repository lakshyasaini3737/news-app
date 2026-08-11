import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import Category from "./pages/Category";
import NewsDetails from "./pages/NewsDetails";

import ApiTest from "./ApiTest";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* News Details Page */}
        <Route
          path="/news/:id"
          element={<NewsDetails />}
        />

        {/* Category Page */}
        <Route
          path="/category/:name"
          element={<Category />}
        />

        {/* API Testing Page */}
        <Route
          path="/api-test"
          element={<ApiTest />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;