import React from 'react'
import { Carousel } from 'react-bootstrap'
import { CardTemplate } from '../../components/CardTemplate/CardTemplate'
import './Home.css'


export const Home = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={60000}>
        <div className="bck-img-container">


        </div>
          {/* className="d-block w-100 carouselDesign"
          src="../../img/girl-smiling.jpg"
          alt="First slide"
        /> */}
        <Carousel.Caption>
          <h1>Welcome To Happy Teeth</h1>
          <p>Your local cormetic dental practice in the heart of London</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className="bck-img-container">


</div>
        <Carousel.Caption>
          <h3>The smile you always dreamed of</h3>
          <p>We care about what matters the most</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className="bck-img-container">


</div>
        <Carousel.Caption>
          <h3>Innovative dental surgery</h3>
          <p>
           We improve the life of out patients solving the most complicated cases
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <div className='home-title'>
        <h1>Especialistas en sonrisas</h1>
      </div> */}
  <div className="section2 d-flex justify-content-center">
    <div className="section2-text">
      <p className=" text-center">Located directly opposite Gilmour Street railway station, Dee Dental has been providing family-friendly dental care for patients in Paisley and beyond for over 65 years. We are committed to providing the best level of service we can in every aspect of our practice, from routine check-ups to advanced cosmetic treatments.</p>
      <p>If you're interested in achieving your dream smile and improving your oral health with the help of a friendly, approachable dental team, then complete our registration form today, book an appointment and we'll get right back to you.</p>
    </div>
    
  </div>
  <h1 className="d-flex bg-light justify-content-center">Some of our most popular services include:</h1>
  <div className="d-flex flex-wrap bg-light justify-content-center">
   
    <CardTemplate/>
    <CardTemplate/>
    <CardTemplate/>
    <CardTemplate/>
    <CardTemplate/>
    <CardTemplate/>
    <CardTemplate/>
    <CardTemplate/>
   
  </div>
    </>
  )
}
