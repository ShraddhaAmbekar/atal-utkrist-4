import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';


const Footer = () => {
  return (

<footer class="bg-black text-white py-5 px-4 ">
  <div class="container">
    <div class="row footer">
      
      <div class="col-md-6 mb-4">
        <h2 class="mb-4">Atal Utkrisht</h2>
        <p class="mb-1">123–456–789</p>
        <p class="mb-1">info@</p>
        <p>50ghhgfg ghfgg gh fh fh</p>
      </div>

      <div class="col-md-6">
        <h5 class="mb-3">Connect with Us</h5>
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email *</label>
            <input type="email" class="form-control bg-black border-bottom text-white rounded-0" id="email" placeholder="Enter your email"/>
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="subscribe"/>
            <label class="form-check-label" for="subscribe">
              Yes, subscribe me to your newsletter. *
            </label>
          </div>
          <button type="submit" class="btn btn-light rounded-pill px-4">Submit</button>
        </form>

        <div class="mt-4">
          <a href="#" class="d-block text-white text-decoration-none mb-1">Privacy Policy</a>
          <a href="#" class="d-block text-white text-decoration-none">Accessibility Statement</a>
        </div>
          <div class=" mt-5">
      <small>© 2025 all right reserved </small>
    </div>
      </div>
    </div>

  
  </div>
</footer>

  );
};

export default Footer;
