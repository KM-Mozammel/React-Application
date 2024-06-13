// Home.js
import React from 'react';
import './HomePage.css';
import state from '../stateManagement';

function HomePage() {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Our Blog</h1>
        <p>Stay updated with the latest articles and news.</p>
      </header>
      <main>
        <section className="featured-post">
          <h2>Featured Post</h2>
          <article>
            <h3>Article Title</h3>
            <p>Summary of the article...</p>
            <button>Read More</button>
          </article>
        </section>
        <section className="recent-posts">
          <h2>Recent Posts</h2>
          <ul>
            <li><a href="#">Post 1</a></li>
            <li><a href="#">Post 2</a></li>
            <li><a href="#">Post 3</a></li>
            {/* Add more recent posts */}
          </ul>
        </section>
      </main>
    </div>

  );
}

export default HomePage;
