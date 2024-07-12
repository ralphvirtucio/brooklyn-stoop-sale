/* eslint-disable react/no-unescaped-entities */
function App() {
  return (
    <>
      <div id="container">
        <div id="header-container">
          <div id="overlay">
            <div id="title">
              <h1>Join us for a <span>Stoop Sale</span> at Carroll Gardens, <br /> Corner of Court Street and 2nd Ave!</h1> 
            </div>
          </div>
        </div>

        <div id="second-page">
          <div id="second-overlay">
            <h1 id="motto">Turn Your Trash into <span>Someone's Treasure!</span></h1>
          </div>
        </div>

        <div id="third-page">
          <h1 className="header-text">Meet the <span>Organizers</span></h1>
            <div id="profiles">
              <div className="first profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <p className="names">Chelsea</p>
              </div>
              <div className="second profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <p className="names">Lil</p>
              </div>
            </div>
        </div>

        <div id="last-page">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/public/clothes.png" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Clothes</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/public/shoes.png" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Shoes</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/public/many more.png" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>And many more!</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;