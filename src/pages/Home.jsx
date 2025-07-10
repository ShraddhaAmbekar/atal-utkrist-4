import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className='home'>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4 col-12 col-sm-12">
            <div className="hero-container">
              <h1 className="hero-heading"><strong>Building Future Leaders</strong></h1>
              <p className="hero-subtext">Empowering Academic and<br />Career Growth</p>

              <br />
              <div className='hero-subtext2 '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, recusandae? Eius tempora ducimus sint mollitia! Dolorum vel illo voluptas excepturi!
              </div>
              <button className='home-btn'>Explore More</button>
            </div>

          </div>
          <div className="col-md-8 col-12 col-sm-12 img-container">
            <img src="https://thumbs.dreamstime.com/z/vertical-group-smiling-high-school-teenage-students-walking-starting-class-talking-together-diverse-classmates-vertical-296201207.jpg" alt="1" />
          </div>
        </div>
      </div>
      <div className="container  mb-5">
        <div className="row section-box">
          <div className="col-md-6 col-12 col-sm-12 section-img order-1">
            <img src="https://blog.planbook.com/wp-content/uploads/2022/10/image2-4-1073x715.jpg" alt="1" />
          </div>
          <div className="col-md-6 col-12 col-sm-12 order-0 order-md-1">
            <div className="section-container">
              <h2 className="section-heading">About Us</h2>
              <div className='section-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, recusandae? Eius tempora ducimus sint mollitia! Dolorum vel illo voluptas excepturi!
              </div>
              <button className='home-btn'>Learn More</button>
            </div>

          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h2 className="section-heading">Our Programs</h2>
        <div className="row custom-row">
          <div className="col-md-3">
            <img src="https://tse1.mm.bing.net/th/id/OIP.V9HIFRw4SJ4NO5nVWVesRgHaGD?pid=Api" alt="" />
          </div>
          <div className="col-md-3">
            <img src="https://tse1.mm.bing.net/th/id/OIP.V9HIFRw4SJ4NO5nVWVesRgHaGD?pid=Api" alt="" />
          </div>
          <div className="col-md-3">
            <img src="https://tse1.mm.bing.net/th/id/OIP.V9HIFRw4SJ4NO5nVWVesRgHaGD?pid=Api" alt="" />
          </div>
        </div>

      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="section-container">
              <h2 className="section-heading">Why stand for</h2>
              <div className='section-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, recusandae? Eius tempora ducimus sint mollitia! Dolorum vel illo voluptas excepturi!
              </div>
              <button className='home-btn'>Learn More</button>
            </div>
          </div>

          <div className="col-md-6 col-12 section-img">
            <img src="https://blog.planbook.com/wp-content/uploads/2022/10/image2-4-1073x715.jpg" alt="1" />
          </div>
        </div>
      </div>

      <div className="container home-last mb-5">
        <img  src="https://snis.edu.in/wp-content/uploads/2023/09/indian-school-students-group-sitting-classroom.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home
