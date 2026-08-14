import Footer from "./footer";
import aboutPhoto from "../assets/about.jpg";


function Home() {
  return (
    <>
      <section id="home" className="bg-primary text-white text-center">
        <div className="container">
          <h1 className="display-4">Build Fast with React & Bootstrap</h1>
          <p className="lead">Modern UI, responsive design</p>
          <button className="btn btn-light btn-lg">Get Started</button>
        </div>
      </section>
      {/* About */}
      <section id="about" className="bg-light py-5 text-start">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <hr class="w-25"></hr>
              <p>
                We build high-performance websites using React, Bootstrap, and
                best development practices.
                Tinify's smart algorithm automatically selects the best optimization ratio for each image, resulting in the smallest possible file size without sacrificing quality.

                Tinify's smart algorithm automatically selects the best optimization ratio for each image, resulting in the smallest possible file size without sacrificing quality.

                Tinify's smart algorithm automatically selects the best optimization ratio for each image, resulting in the smallest possible file size without sacrificing quality.
                Tinify's smart algorithm automatically selects the best optimization ratio for each image, resulting in the smallest possible file size without sacrificing quality.
                Tinify's smart algorithm automatically selects the best optimization ratio for each image, resulting in the smallest possible file size without sacrificing quality.
              </p>
              <button className="btn btn-primary btn-lg">Read More</button>
            </div>
            <div className="col-md-6">
              <img src={aboutPhoto} alt="About" className="rounded"/>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center shadow">
                <div className="card-body">
                  <h5 className="card-title">Web Design</h5>
                  <p className="card-text">Responsive & modern layouts</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center shadow">
                <div className="card-body">
                  <h5 className="card-title">React Apps</h5>
                  <p className="card-text">Fast & scalable applications</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center shadow">
                <div className="card-body">
                  <h5 className="card-title">SEO</h5>
                  <p className="card-text">Optimized for Google ranking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">What Clients Say</h2>
          <blockquote className="blockquote">
            <p>"Amazing UI and fast performance!"</p>
            <footer className="blockquote-footer">John Doe</footer>
          </blockquote>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <input className="form-control mb-3" placeholder="Name" />
              <input className="form-control mb-3" placeholder="Email" />
              <textarea className="form-control mb-3" placeholder="Message"></textarea>
              <button className="btn btn-primary w-100">Send</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
