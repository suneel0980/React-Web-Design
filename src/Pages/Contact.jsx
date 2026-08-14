export default function Contact() {
  return (
    <>
     <section id="home" className="bg-primary text-white text-center">
          <div className="container">
            <h1 className="display-4">Contact Us</h1>
            <p className="lead">Modern UI, responsive design</p>
            <button className="btn btn-light btn-lg">Get Started</button>
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
  )
}
