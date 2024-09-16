import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import NewCard from './components/NewCard';

function App() {
  const [newsList, setNewsList] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  const api = {
    key: 'e74076d753cf10cd02774846eb1f6f45',
    base: 'http://api.mediastack.com/v1/news?access_key='
  };

  const day = new Date().toISOString().split('T')[0];

  useEffect(() => {
    fetchNews();
  }, []);

  function fetchNews() {
    fetch(`${api.base}${api.key}&published_at=${day}`)
      .then((response) => response.json())
      .then((data) => {
        const fetchedNews = data.data || [];
        setNewsList(fetchedNews);
        setFilteredNews(fetchedNews);
      })
      .catch((error) => console.error('Error fetching news:', error));
  }

  function filtrerNews(cat) {
    if (cat === "all") {
      setFilteredNews(newsList);
    } else {
      setFilteredNews(newsList.filter(newItem => newItem.category === cat));
    }
  }

  function affichage(news) {
    return news.length > 0 ? (
      news.map((newItem) => (
        <div key={newItem.id} className="col-md-3 mb-4">
          <NewCard newItem={newItem} />
        </div>
      ))
    ) : (
      <p>No news available.</p>
    );
  }

  return (
    <div className="App">
      <Navbar onclick={filtrerNews} />
      <div className='fw-bold display-6 d-flex justify-content-center mt-3'>
        latest
        <p className='ms-2 news'>news</p>
      </div>
      <div className="container mt-4">
        <div className="row">
          {affichage(filteredNews)}
        </div>
      </div>
    </div>
  );
}

export default App;
