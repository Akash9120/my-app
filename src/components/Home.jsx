import React from 'react'

export const Home = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Crafti - We Make Top Quality Handmade Products</title>
  <meta name="title" content="Crafti - We Make Top Quality Handmade Products" />
  <meta
    name="description"
    content="This is a Handmade Products html template made by codewithsadee"
  />
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins&family=Rosario:wght@500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="./assets/css/style.css" />
  <link rel="preload" as="image" href="./assets/images/hero-banner-1.jpg" />
  <link rel="preload" as="image" href="./assets/images/hero-banner-2.jpg" />
  <header className="header" data-header="">
    <div className="container">
      <a href="#" className="logo">
        Crafti
      </a>
      <nav className="navbar" data-navbar="">
        <button
          className="nav-close-btn"
          aria-label="close menu"
          data-nav-toggler=""
        >
          <ion-icon name="close-outline" aria-hidden="true" />
        </button>
        <ul className="navbar-list">
          <li>
            <a href="#" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="nav-open-btn"
        aria-label="open menu"
        data-nav-toggler=""
      >
        <ion-icon name="menu-outline" aria-hidden="true" />
      </button>
      <div className="overlay" data-nav-toggler="" data-overlay="" />
    </div>
  </header>
  <main>
    <article>
      <section className="section hero" aria-label="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">
              We Make Top Quality
              <span className="span">Handmade Products</span>
            </h1>
            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a href="#" className="btn">
              <span className="span">View Collection</span>
              <ion-icon name="arrow-forward" aria-hidden="true" />
            </a>
          </div>
          <div className="wrapper">
            <div
              className="hero-banner-1 img-holder"
              style={{ width: 400, height: 550 }}
            >
              <img
                src="./assets/images/hero-banner-1.jpg"
                width={400}
                height={550}
                alt="view of assortment of decor for interior shop"
                className="img-cover"
              />
            </div>
            <div
              className="hero-banner-2 img-holder"
              style={{ width: 500, Height: 850 }}
            >
              <img
                src="./assets/images/hero-banner-2.jpg"
                width={500}
                height={850}
                alt="ceramic craft ware"
                className="img-cover"
              />
            </div>
            <img
              src="./assets/images/hero-shape.png"
              width={570}
              height={676}
              alt="laves"
              className="shape"
            />
          </div>
        </div>
      </section>
      <section className="section about" aria-label="about">
        <div className="container">
          <div className="wrapper">
            <figure
              className="about-banner about-banner-1 img-holder"
              style={{ width: 600, height: 480 }}
            >
              <img
                src="./assets/images/about-1.jpg"
                width={600}
                height={480}
                loading="lazy"
                alt="craftman in workshop"
                className="img-cover"
              />
            </figure>
            <h2 className="h2 section-title">Make Handicrafts Since 1992</h2>
          </div>
          <figure
            className="about-banner about-banner-2 img-holder"
            style={{ width: 500, height: 700 }}
          >
            <img
              src="./assets/images/about-2.jpg"
              width={500}
              height={700}
              loading="lazy"
              alt="interior view of a leather shop selling belts brac"
              className="img-cover"
            />
          </figure>
          <div className="about-content">
            <h3 className="h2 section-title">
              Innovative Design is Our Passion
            </h3>
            <p className="section-text">
              Curabitur interdum malesuada lectus ut pharetra. Sed tellus ante,
              aliquet a sem id, ultricies varius dolor. Nam volutpat hendrerit
              massa. Crasposuere ornare elementum.
            </p>
            <a href="#" className="btn">
              <span className="span">Read More</span>
              <ion-icon name="arrow-forward" aria-hidden="true" />
            </a>
            <figure
              className="about-banner about-banner-3 img-holder"
              style={{ width: 850, height: 420 }}
            >
              <img
                src="./assets/images/about-3.jpg"
                width={850}
                height={420}
                loading="lazy"
                alt="concentrated artisans in workshop"
                className="img-cover"
              />
            </figure>
          </div>
        </div>
      </section>
      <section
        className="section collection text-center"
        aria-labelledby="collection-label"
      >
        <div className="container">
          <h2 className="h2 section-title" id="collection-label">
            Unique Handicrafts Collection
          </h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            molestie ligula dignissim.
          </p>
          <ul className="grid-list">
            <li>
              <div className="collection-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 500, height: 550 }}
                >
                  <img
                    src="./assets/images/collection-1.jpg"
                    width={500}
                    height={550}
                    loading="lazy"
                    alt="Pottery & Ceramics"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Pottery &amp; Ceramics</h3>
                  <p className="card-text">
                    Cras fermentum augue ac purus pharetra man aliquam fringilla
                    ornare quam.
                  </p>
                  <a href="#" className="btn">
                    <span className="span">View Gallery</span>
                    <ion-icon name="arrow-forward" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="collection-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 500, height: 550 }}
                >
                  <img
                    src="./assets/images/collection-2.jpg"
                    width={500}
                    height={550}
                    loading="lazy"
                    alt="Leather Craft"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Leather Craft</h3>
                  <p className="card-text">
                    Cras fermentum augue ac purus pharetra man aliquam fringilla
                    ornare quam.
                  </p>
                  <a href="#" className="btn">
                    <span className="span">View Gallery</span>
                    <ion-icon name="arrow-forward" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="collection-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 500, height: 550 }}
                >
                  <img
                    src="./assets/images/collection-3.jpg"
                    width={500}
                    height={550}
                    loading="lazy"
                    alt="Home Decoration"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Home Decoration</h3>
                  <p className="card-text">
                    Cras fermentum augue ac purus pharetra man aliquam fringilla
                    ornare quam.
                  </p>
                  <a href="#" className="btn">
                    <span className="span">View Gallery</span>
                    <ion-icon name="arrow-forward" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="feature" aria-label="features">
        <div
          className="feature-banner has-bg-image has-after"
          style={{
            backgroundImage: 'url("./assets/images/feature-banner.jpg")'
          }}
        >
          <button
            className="play-btn"
            aria-label="play video: man making handmade belt"
          >
            <img
              src="./assets/images/play.svg"
              width={60}
              height={60}
              loading="lazy"
              alt="play icon"
            />
          </button>
        </div>
        <div className="section feature-content">
          <div className="container">
            <h2 className="h2 section-title">
              Passionate About Elegance and Beauty Design
            </h2>
            <p className="section-text">
              Curabitur porttitor nulla vitae purus eleifend feugiat. Quisque
              faucibus sapien, ut porttitor lorem.
            </p>
            <ul className="feature-list">
              <li>
                <div className="feature-list-card">
                  <div className="card-icon">
                    <img
                      src="./assets/images/feature-icon-1.svg"
                      width={45}
                      height={45}
                      loading="lazy"
                      alt="review icon"
                    />
                  </div>
                  <div>
                    <h3 className="h4 card-title">100% Guarantee</h3>
                    <p className="card-text">
                      Vestibulum in eros at lectus commodo
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-list-card">
                  <div className="card-icon">
                    <img
                      src="./assets/images/feature-icon-2.svg"
                      width={45}
                      height={45}
                      loading="lazy"
                      alt="badge icon"
                    />
                  </div>
                  <div>
                    <h3 className="h4 card-title">Professional Staffs</h3>
                    <p className="card-text">
                      Vestibulum in eros at lectus commodo
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-list-card">
                  <div className="card-icon">
                    <img
                      src="./assets/images/feature-icon-3.svg"
                      width={45}
                      height={45}
                      loading="lazy"
                      alt="money bag icon"
                    />
                  </div>
                  <div>
                    <h3 className="h4 card-title">Affordable Price</h3>
                    <p className="card-text">
                      Vestibulum in eros at lectus commodo
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <p>
              Nunc cursus ante libero, et convallis eros tristique nec. Fusce
              consequat lectus dui, nec laoreet purus venenatis id.
            </p>
          </div>
        </div>
      </section>
      <section className="section testi" aria-label="testimonials">
        <div className="container">
          <div className="testi-card">
            <p className="card-text">
              Etiam ultricies eros ut malesuada condimentum. Cras in nisl sit
              amet dui molestie tristique ut vitae libero nec laoreet purus.
            </p>
            <p className="client-name">Edward Fransisco</p>
            <p className="client-title">Founder Crafti</p>
            <img
              src="./assets/images/quote.svg"
              width={50}
              height={50}
              loading="lazy"
              className="icon"
              alt="quote"
            />
          </div>
        </div>
      </section>
      <section className="gallery">
        <ul className="gallery-list">
          <li>
            <div
              className="gallery-card has-bg-image has-after"
              style={{
                backgroundImage: 'url("./assets/images/gallery-1.jpg")'
              }}
            >
              <div className="card-content">
                <h3 className="h3 card-title">Vases &amp; Plant Pots</h3>
                <a href="#" className="btn-link">
                  <span className="span">View Gallery</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div
              className="gallery-card has-bg-image has-after"
              style={{
                backgroundImage: 'url("./assets/images/gallery-2.jpg")'
              }}
            >
              <div className="card-content">
                <h3 className="h3 card-title">Clay Craft</h3>
                <a href="#" className="btn-link">
                  <span className="span">View Gallery</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div
              className="gallery-card has-bg-image has-after"
              style={{
                backgroundImage: 'url("./assets/images/gallery-3.jpg")'
              }}
            >
              <div className="card-content">
                <h3 className="h3 card-title">Sculpturing</h3>
                <a href="#" className="btn-link">
                  <span className="span">View Gallery</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div
              className="gallery-card has-bg-image has-after"
              style={{
                backgroundImage: 'url("./assets/images/gallery-4.jpg")'
              }}
            >
              <div className="card-content">
                <h3 className="h3 card-title">Accesories</h3>
                <a href="#" className="btn-link">
                  <span className="span">View Gallery</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="section blog" aria-labelledby="blog-label">
        <div className="container">
          <h2 className="h2 section-title text-center" id="blog-label">
            Blog &amp; News
          </h2>
          <p className="section-text text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            molestie ligula dignissim.
          </p>
          <ul className="grid-list">
            <li>
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 1024, height: 683 }}
                >
                  <img
                    src="./assets/images/blog-1.jpg"
                    width={1024}
                    height={683}
                    loading="lazy"
                    alt="The Detail Process Of Decorating The Clay Vase At Pottery Studio"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      The Detail Process Of Decorating The Clay Vase At Pottery
                      Studio
                    </a>
                  </h3>
                  <div className="card-meta">
                    <a href="#" className="card-meta-wrapper">
                      <ion-icon name="person-outline" aria-hidden="true" />
                      <span className="span">admin</span>
                    </a>
                    <time className="card-meta-wrapper" dateTime="2022-10-12">
                      <ion-icon
                        name="calendar-clear-outline"
                        aria-hidden="true"
                      />
                      <span className="span">October 12, 2022</span>
                    </time>
                    <a href="#" className="card-meta-wrapper">
                      <ion-icon name="folder-open-outline" aria-hidden="true" />
                      <span className="span">Tips &amp; Trick</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 1024, height: 683 }}
                >
                  <img
                    src="./assets/images/blog-2.jpg"
                    width={1024}
                    height={683}
                    loading="lazy"
                    alt="Skills And Techniques To Make A Genuine Leather Wallet"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      Skills And Techniques To Make A Genuine Leather Wallet
                    </a>
                  </h3>
                  <div className="card-meta">
                    <a href="#" className="card-meta-wrapper">
                      <ion-icon name="person-outline" aria-hidden="true" />
                      <span className="span">admin</span>
                    </a>
                    <time className="card-meta-wrapper" dateTime="2022-10-12">
                      <ion-icon
                        name="calendar-clear-outline"
                        aria-hidden="true"
                      />
                      <span className="span">October 12, 2022</span>
                    </time>
                    <a href="#" className="card-meta-wrapper">
                      <ion-icon name="folder-open-outline" aria-hidden="true" />
                      <span className="span">Tips &amp; Trick</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 1024, height: 683 }}
                >
                  <img
                    src="./assets/images/blog-3.jpg"
                    width={1024}
                    height={683}
                    loading="lazy"
                    alt="5 Latest And Trending Handmade Crafts For Adults And Kids"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      5 Latest And Trending Handmade Crafts For Adults And Kids
                    </a>
                  </h3>
                  <div className="card-meta">
                    <a href="#" className="card-meta-wrapper">
                      <ion-icon name="person-outline" aria-hidden="true" />
                      <span className="span">admin</span>
                    </a>
                    <time className="card-meta-wrapper" dateTime="2022-10-12">
                      <ion-icon
                        name="calendar-clear-outline"
                        aria-hidden="true"
                      />
                      <span className="span">October 12, 2022</span>
                    </time>
                    <a href="#" className="card-meta-wrapper">
                      <ion-icon name="folder-open-outline" aria-hidden="true" />
                      <span className="span">Tips &amp; Trick</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 1024, height: 683 }}
                >
                  <img
                    src="./assets/images/blog-4.jpg"
                    width={1024}
                    height={683}
                    loading="lazy"
                    alt="Homemade Business That Now Makes Hundreds Of Millions"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      Homemade Business That Now Makes Hundreds Of Millions
                    </a>
                  </h3>
                  <div className="card-meta">
                    <a href="#" className="card-meta-wrapper">
                      <ion-icon name="person-outline" aria-hidden="true" />
                      <span className="span">admin</span>
                    </a>
                    <time className="card-meta-wrapper" dateTime="2022-10-12">
                      <ion-icon
                        name="calendar-clear-outline"
                        aria-hidden="true"
                      />
                      <span className="span">October 12, 2022</span>
                    </time>
                    <a href="#" className="card-meta-wrapper">
                      <ion-icon name="folder-open-outline" aria-hidden="true" />
                      <span className="span">Tips &amp; Trick</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <a href="#" className="btn">
            <span className="span">Read More</span>
            <ion-icon name="arrow-forward" aria-hidden="true" />
          </a>
        </div>
      </section>
    </article>
  </main>
  <footer className="footer">
    <div className="container">
      <div className="section footer-top">
        <div className="footer-brand">
          <a href="#" className="logo">
            Crafti
          </a>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            porttitor augue, in convallis risus. Sed efficitur nulla quis luctus
            pulvinar. Cras nec pulvinar condimentum lacus.
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Explore Us</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Collection
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Blog &amp; News
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Support</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Account
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Feedback
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Support Center
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Our Stores
            </a>
          </li>
        </ul>
        <div className="footer-list">
          <p className="footer-list-title">Get in Touch</p>
          <p className="footer-text">
            Question or feedback? We’d love to hear from you
          </p>
          <a href="#" className="btn">
            <span className="span">Contact Us</span>
            <ion-icon name="arrow-forward" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          Copyright 2022 codewithsadee. All Right Reserved
        </p>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}
