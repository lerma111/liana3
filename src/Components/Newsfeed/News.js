import React, { useEffect, useState } from 'react';
import './News.css';
import axios from 'axios';
import Feed from './Feed.js';

function News() {

  const [latestArticles, setLatestArticles] = useState([]);

  // Fetch the latest articles from the backend
  useEffect(() => {
    const getLatestArticles = async () => {
      try {
        // Fetch data from the backend
        const res = await axios.get("http://localhost:5000/");
        // Get the latest three articles
        const latest = res.data.slice(0, 3);
        // Update the state with the latest articles
        setLatestArticles(latest);
      } catch (error) {
        console.log(error);
      }
    };

    getLatestArticles();
  }, []);

  // Log the latest articles to the console
  console.log(latestArticles);

//basic layout below//
  return (
    <div className='news-100vw'>
    <div className='news-container'>
      <h2 className='news-h2'>Latest News</h2>
      <div className='news-background'>
        <div className='news-content-container'>
          {latestArticles.length > 0 &&
            <div className='news-boxes'>
              <div className='datefeed'>
              <Feed date={latestArticles[0].item.pubDate} />
              </div>
              <div className='newsfeed'>
              {latestArticles[0].item.title}
              </div>
            </div>
          }
        </div>

{/* Copy the above for 2 other articles as well */}

        <div className='news-content-container'>
          {latestArticles.length > 1 &&
            <div className='news-boxes'>
              <div className='datefeed'>
                <Feed date={latestArticles[1].item.pubDate} />
              </div>
              <div className='newsfeed'>
                {latestArticles[1].item.title}
              </div>
            </div>
          }
        </div>
        <div className='news-content-container'>
          {latestArticles.length > 2 &&
            <div className='news-boxes'>
              <div className='datefeed'>
                <Feed date={latestArticles[2].item.pubDate} />
              </div>
              <div className='newsfeed'>
                {latestArticles[2].item.title}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
    </div>
  );
}

export default News;