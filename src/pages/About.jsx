import React from 'react'

const About = () => {
  return (
    <div className='home'>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-12 section-img">
            <img src="https://blog.planbook.com/wp-content/uploads/2022/10/image2-4-1073x715.jpg" alt="1" />
          </div>
          <div className="col-md-6 col-12">
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
    </div>
  )
}

export default About
