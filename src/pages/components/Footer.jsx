import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


const Footer = () => {
  return (

<footer className="bg-black text-white py-5 px-4 ">
  <div className="container">
    <div className="row footer">
      <div className="col-md-6 mb-4">
        <h2 className="mb-4">Atal Utkrisht</h2>
        <p className="mb-1">123–456–789</p>
        <p className="mb-1">info@</p>
        <p>50ghhgfg ghfgg gh fh fh</p>
      </div>

      <div className="col-md-6">
        <h5 className="mb-3">Connect with Us</h5>
        <form>
          <div className="mb-3">
            <label className="form-label">Email *</label>
            <input type="email" className="form-control bg-black border-bottom text-white rounded-0" id="email" placeholder="Enter your email"/>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="subscribe"/>
            <label className="form-check-label" >
              Yes, subscribe me to your newsletter. *
            </label>
          </div>
          <button type="submit" className="btn btn-light rounded-pill px-4">Submit</button>
        </form>

        <div className="mt-4">
          <a href="#" className="d-block text-white text-decoration-none mb-1">Privacy Policy</a>
          <a href="#" className="d-block text-white text-decoration-none">Accessibility Statement</a>
        </div>
          <div className=" mt-5">
      <small>© 2025 all right reserved </small>
    </div>
      </div>
    </div>  
  </div>
</footer>

  );
};

export default Footer;
