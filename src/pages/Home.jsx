import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className='home'>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="hero-container">
              <h1 className="hero-heading"><strong>Where Vision Inspires, Purpose Leads
              </strong></h1>
              <p className="hero-subtext">AUGIC Thathi Dhanari imparts value-based education, shaping students into responsible, and ethical leaders ready to navigate a changing world.</p>

              <br />
              <div className='hero-subtext2 '>
                Nurturing Potential, Inspiring Success
                AUGIC Thathi Dhanari ,a CBSE-affiliated English-medium school, empowers rural youth through modern education, holistic growth, and values—honoring Atal Bihari Vajpayee’s vision of transforming lives through learning and leadership.

              </div>
              <button className='home-btn'>Explore More</button>
            </div>

          </div>
          <div className="col-md-7 col-sm-12 img-container">
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
                AUGIC Thathi Dhanari , a CBSE-affiliated school upgraded to senior secondary in 1974, focuses on high-quality, value-based learning. With modern classrooms, skilled faculty, and a holistic curriculum, it cultivates integrity, responsibility, and essential skills—nurturing future-ready learners aligned with the Atal Utkrisht mission.
              </div>
              <button className='home-btn'>Learn More</button>
            </div>

          </div>
        </div>
      </div>
      <div className="container mb-5 home-gallery">
        <h2 className="section-heading">Our Images</h2>
        <div className="container custom-row">
          <div className="img">
            <img src="https://tse1.mm.bing.net/th/id/OIP.V9HIFRw4SJ4NO5nVWVesRgHaGD?pid=Api" alt="" />
          </div>
          <div className="img">
            <img src="https://tse1.mm.bing.net/th/id/OIP.V9HIFRw4SJ4NO5nVWVesRgHaGD?pid=Api" alt="" />
          </div>
          <div className="img">
            <img src="https://tse1.mm.bing.net/th/id/OIP.V9HIFRw4SJ4NO5nVWVesRgHaGD?pid=Api" alt="" />
          </div>
        </div>

      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="section-container">
              <h2 className="section-heading">
                What sets AUGIC Thathi Dhanari apart?

              </h2>
              <div className='section-text'>
                As a CBSE-affiliated, English-medium school with a legacy since 1964, AUGICoffers value-based education focused on holistic development. With expert faculty, smart classrooms, science labs, and diverse co-curriculars like NCC and educational tours, we nurture integrity, innovation, and leadership—empowering minds, inspiring futures, and leading change.


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
        <img src="https://snis.edu.in/wp-content/uploads/2023/09/indian-school-students-group-sitting-classroom.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home
