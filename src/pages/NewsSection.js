
import React, { useState } from "react";
// import "./NewsSection.css";

const newsArticles = [
  {
    id: 1,
    category: "Tour Guide",
    title:
      "The World is a Book and Those Who do not Travel Read Only One Page.",
    author: "Crish Jorden",
    authorImage: "/images/news/news-1.jpeg",
    banner: "/images/news/news-banner.png",
    readTime: "10 min read",
  },
  {
    id: 2,
    category: "Travel Tips",
    title:
      "A Good Traveler Has no Fixed Plans and is Not Intent on Arriving.",
    author: "David Warner",
    authorImage: "/images/news/news-2.jpeg",
    banner: "/images/news/banner-1.png",
    readTime: "10 min read",
  },
  {
    id: 3,
    category: "Travel Stories",
    title:
      "We Travel, Some of us Forever, to Seek Other States, Other Lives, Other Souls.",
    author: "David Malan",
    authorImage: "/images/news/news-3.jpeg",
    banner: "/images/news/banner-2.png",
    readTime: "10 min read",
  },
];

const NewsSection = () => {
  const [activeNews, setActiveNews] = useState(0);

  return (
    <section className="news-area bottom-padding position-relative">
      <div className="container">
        {/* Section heading */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-center mx-605 mx-auto position-relative mb-60">
              <span className="highlights">News &amp; Article</span>
              <h4 className="title">
                Latest News &amp; Articles From The Blog Posts
              </h4>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Featured news image */}
          <div className="col-xl-7 col-lg-7">
            <div className="news-featured-image">
              <div className="about-banner imgEffect4">
                <img
                  src={newsArticles[activeNews].banner}
                  alt={newsArticles[activeNews].title}
                  key={newsArticles[activeNews].banner}
                />
              </div>
            </div>
          </div>

          {/* News articles */}
          <div className="col-xl-5 col-lg-5">
            <div className="all-contents" role="tablist" aria-orientation="vertical">
              {newsArticles.map((article, index) => (
                <div
                  className={`news-content ${
                    activeNews === index ? "active" : ""
                  }`}
                  id={`news-${article.id}-tab`}
                  key={article.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={activeNews === index}
                  aria-controls={`news-${article.id}-panel`}
                  onClick={() => setActiveNews(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveNews(index);
                    }
                  }}
                >
                  <div className="heading">
                    <span className="heading-pera">{article.category}</span>
                  </div>

                  <h4 className="title">
                    <a
                      href="#news-articles"
                      onClick={(event) => event.preventDefault()}
                    >
                      {article.title}
                    </a>
                  </h4>

                  <div className="news-info">
                    <div className="d-flex gap-10 align-items-center">
                      <div className="author-img">
                        <img
                          src={article.authorImage}
                          alt={article.author}
                        />
                      </div>

                      <p className="name">{article.author}</p>
                    </div>

                    <p className="time">{article.readTime}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View all news button */}
            <div className="col-12 text-center">
              <div className="section-button d-inline-block">
                <a href="news.html">
                  <div className="btn-primary-icon-sm">
                    <p className="pera">View All News</p>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background shape */}
      <div className="shape-news">
        <img
          src="/images/icon/bg-shape-3.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default NewsSection;
