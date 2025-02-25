// src/components/NewsFeed.jsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/slice/newsReducer"; 

const NewsFeed = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (status === "loading") return <p>Loading news...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Real-Time News Feed</h2>
      {articles.map((article, index) => (
        <div key={index} style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
