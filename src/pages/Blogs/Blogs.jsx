import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import './Blogs.css'

const Blogs = () => {
  const [News, setNews] = useState([]);

const API_KEY = '52ddcebc7a81439e90ff02e619c8f174';
const API = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API_KEY}`;


const fetchApiData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setNews(data.articles.filter(article => article.urlToImage)); // Filter out articles without image URLs
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  fetchApiData(API)
}, []);

return (
  <section className="blog" data-page="blog">
    <header>
      <h2 className="h2 article-title">News</h2>
    </header>
    <div className="blog-posts">
      <ul className="blog-posts-list">
        {News.map((article, index) => (
          <BlogPost
            key={index}
            title={article.author}
            image={article.urlToImage}
            description={article.description}
            url={article.url}
          />
        ))}
      </ul>
    </div>
  </section>
);
}

export default Blogs;
