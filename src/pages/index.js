import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the styles (make sure you have this import)
import ServiceProviderCard from '../pages/books.js';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import AboutComponent from './AboutComponent';

import Courses from './Courses-Section/index.jsx';
import Footer from '../pages/footer/Footer';



const Index = () => {

  const navigate = useNavigate();

  function gotoallbooks(){
    navigate('/allbooks');
  }

  const Carousel = [
    {
      url: "images/carousal1.jpg",
    },
    {
      url: "images/carousal3.jpg",
    },
    {
      url: "images/back.jpg",
    },
  ];

  const divStyle = {
    // paddingRight:'20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '80vh',
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '100px', marginTop: '-10vh' }}>
        <div className="wrapper">
          {/* <Header /> */}

          <div className="container1">
            <div
              style={{
                marginLeft:'30px',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '50px',
                // textAlign: 'justify',
                // margin: 'auto',
                // alignItems: 'center',
                marginTop: '13%',
              }}
            >
              <h1 >
                Explore our collection of books to discover <br /> the path to natural healing,
                guided by <br /> ancient traditions like <span>Siddha, Unani, and Ayurveda</span>
              </h1>
              <div className="search_box">
                <input
                  type="text"
                  className="input_search"
                  placeholder="Which book are you looking for?"
                />
                <div className="search_btn">
                  <i className="fas fa-search"></i>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="middle">
          <h2 >Trusted By</h2>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', columnGap: '30px' }}>
            <img src="https://ncismindia.org/assets/img/NCISM%20LOGO.jpg" style={{ width: '100px', height: '100px' }} alt="" />
            <img src="https://www.vivacepanorama.com/wp-content/uploads/2015/09/Central-Council-of-Indian-Medicine-CCIM.jpg" style={{ width: '200px', height: '110px' }} alt="" />

          </div>
        </div>

        <AboutComponent/>
        {/* <div class="about-img">
        <div className="slide-container" style={{ width: '100%' }}>
          <Fade images={Carousel.map((slideImage) => slideImage.url)}>
            {Carousel.map((slideImage, index) => (
              <div key={index}>
                <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
              </div>
            ))}
          </Fade>
        </div>
      </div> */}


        {/* <div className='Start'>
  <div className="top">
    <h1> <span>Top</span> Restaurants</h1>
    <div className="boxes">
      <div className="box">
        <div className="image">
          <img className="image__img" style={{width:'200px'}} src='https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781601091048/ayurveda-9781601091048_hr.jpg' alt='Restaurant' />
        </div>
        <div className="col">
          <h1>Hello</h1>
          <p>xyz</p>
          <br /><br />
        </div>
      </div>
    </div>
    <button className="button-28">Show all Restaurants</button>
  </div>
</div> */}
        <div >
        <h1 style={{fontSize:'45px',marginLeft:'70px'}}>Ayurveda</h1>
        <hr/>
        <br />
          <Courses/>
          <br />
          <button onClick={gotoallbooks} className='button-28'>Show all books</button>
        </div>
        <div >
        <h1 style={{fontSize:'45px',marginLeft:'70px'}}>Unani</h1>
        <hr/>
        <br />
          <Courses/>
          <br />
          <button onClick={gotoallbooks} className='button-28'>Show all books</button>
        </div>

        <div>
        <h1 style={{fontSize:'45px',marginLeft:'70px'}}>Siddha</h1>
        <hr/>
        <br />
          <Courses/>
          <br />
          <button onClick={gotoallbooks} className='button-28'>Show all books</button>
        </div>

      </div>
      <br /><br />
      <Footer/>
    </>
  )
}

export default Index;
