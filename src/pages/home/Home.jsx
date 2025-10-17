/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiKey = "crals9pr01qhk4bqotb0crals9pr01qhk4bqotbg";
const ApiUrl = `https://finnhub.io/api/v1/news?category=general&token=${ApiKey}`;

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(ApiUrl);
        setNews(response.data.slice(0, 20));
      } catch (err) {
        setError("Failed to load news. Please try again later");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );
  }
  return (
    <div className="bg-[#0E0D13] min-h-screen text-white px-4 md:px-12 py-8">
      <h1 className="text-2xl md:text-4xl font-semibold mb-6 px-3">News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item) => (
          <a
            key={item.id || item.datetime}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-[#2A283E] transition overflow-hidden shadow-md flex md:flex-col flex-row items-center gap-4">
            {item.image ? (
              <img
                src={item.image}
                alt={item.headline}
                className="md:h-[179px] md:w-full w-[100px] h-[100px] object-cover"
              />
            ) : (
              <div className="h-48 w-full bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
                No Image
              </div>
            )}
            <div className="flex flex-col flex-1 md:py-4">
              <div className="text-sm flex justify-between text-gray-400 w-full ">
                <div> {item.source} </div>
                <div>
                  {new Date(item.datetime * 1000).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-2 line-clamp-3 md:line-clamp-none">
                {item.headline}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
