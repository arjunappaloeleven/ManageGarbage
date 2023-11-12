import React from 'react';
import logo from './fb.png';
import cycle from './rc.png';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Car from './car';
import Pay from './pay';
import Toknow from './Toknow';
import pcar from './carpay';

function Mainn() {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Code Convent Foundation</title>
        <link rel="stylesheet" href="./App.css" />
        <link rel="stylesheet" href="./res.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        <div className="fixed-top">
          <header>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#home">
                  Garbage management system
                </a> 
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#home">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/recycle">
                        Recycle Things
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Login">
                        User Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/pay">
                        Make Payment
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          <div className="cont-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">  
                  <p>
                    Contact No : <a href="tel: +9198659****59">+91 98659****59</a>
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="social">
                    <a href="#">
                      <img src={logo} alt="facebook" class="pm"/>
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2__NOQ1ZLsjPL_IqgD9fP5jNSbIIbHugRg&usqp=CAU" alt="inatagram" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanFxQQbxmCbCuzFHrlXGS0nogyFrPVpdrkWCenFYBXGZwPoUdsEnEDb35OJiVu3gQB5Y&usqp=CAU" alt="youtube" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrefHFmS_OINItmSqPWM0V5J846e_rFuxNGPt42UZ1G3P3QVhzIhPAmGYEqxImqlhs_ag&usqp=CAU" alt="linkedin" />
                    </a>
                    <a href="#">
                      <img src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png?f=webp&w=256" alt="gnail" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-sec" id="home">
          <div className="container"><Car/>
            <div className="home-content">
              <div className="row">
                <div className="col-lg-6 align-item-center">
                  <div className="home-info">
                    <h1>We Recycle, For Tomorrow</h1>
                    <h2>
                      We <span>Recovers millions of pounds of materials</span>{' '}
                      every year, giving items a chance to turn
                    </h2>
                    <p>
                      into products from brands you know and love.
                    </p>
                    <div className="buttons">
                      <a href="/Toknow" className="btn1">
                        To know more.
                      
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-first order-lg-last">
                  <div className="img-sec">
                    <img
                      src={cycle}
                      alt="home-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="don-sec" id="donation">
          <div className="container">
            <div className="heading">
              <h2>We Manage Waste or Recycle.</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                    src="https://imgs.search.brave.com/XCxR5HKmjE5akmAK-GobrGITKQD8NTrZ9JynJrJ6b2g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMS9Db21t/dW5pdHktUE5HLnBu/Zw"
                    alt="img"
                  />
                  <h3>Services for communities</h3>
                  <a href="/Toknow" className="btn1">
                    Know More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfq9S42VXw77alRab_UDGMG07jzbcPFjjFBNGDXlQxKS0Hpe9i2eeuSp0ZJlX0s3gVagM&usqp=CAU"
                    alt="img"
                  /><br />
                  <h3>Business services</h3><br />
                  <a href="/Toknow" className="btn1">
                    Know More
                  </a><br />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                    src="https://atlas-content-cdn.pixelsquid.com/stock-images/recycle-with-earth-logo-RJ8ma20-600.jpg"
                    alt="img"
                  /><br />
                  <h3>Recycle way</h3><br></br>
                  <a href="/Toknow" className="btn1">
                    Know More
                  </a><br/>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://cdn-icons-png.flaticon.com/512/4661/4661148.png" alt="img" />
                  <h3>Suistainable technology</h3><br></br>
                  <a href="/Toknow" className="btn1">
                      Know More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://cdn-icons-png.flaticon.com/512/2371/2371898.png" alt="img" />
                  <h3>ModernDay  Landfills</h3><br></br>
                  
                  <a href="/Toknow" className="btn1">
                    Know More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFcrPYas5XR9nHLB1XwncChQN-axUJerK-32K4QTNMSLOXD7KbTMu2XT3fy54Sipd3mo&usqp=CAU" alt="img" />
                  <h3>Renewable Energy</h3><br></br>
                
                  <a href="/Toknow" className="btn1">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mission" id="mission-id">
          <div className="container">
            <div className="heading">
              <h2>Our Missions</h2>
              <p>
              <span>We’re so used to today’s sanitation standards, it can be easy to forget about how far we've come with waste collection. But it wasn’t that long ago that the handling of trash was inconsistent and resulted in unsightly piles lining city streets and sidewalks.

That started to change in 1893 when a Dutch immigrant named Harm Huizenga began collecting trash in Chicago for a small fee. With little more than a modest wagon, he built up a reliable client base over the years by effectively managing the waste of a rapidly changing society.

But in the post-war period, something happened that most waste providers weren’t ready for: a shift toward disposable products that were designed to make lives simpler.</span>
                
              </p>
            </div>
            <div className="gallery-sec">
              <div className="container">
                <div className="image-container">
                  <div className="image">
                    <img src="https://uploads-ssl.webflow.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f2459_waste-sorting-facility-management-control-2022-10-24-17-54-03-utc.jpeg" alt="img" />
                  </div>
                  <div className="image">
                    <img src="https://i1.wp.com/www.bioenergyconsult.com/wp-content/uploads/2018/04/commercial-waste.jpg?ssl=1" alt="img" />
                  </div>
                  <div className="image">
                    <img src="https://referenciamarketing.com/wp-content/uploads/2018/11/Waste-Management-Business.jpg" alt="img" />
                  </div>
                  <div className="image">
                    <img src="https://aandjwasteservices.co.uk/wp-content/uploads/2021/06/Landfill-regeneration-post_with-AJ-personnel-766x675.png" alt="img" />
                  </div>
                  <div className="image">
                    <img src="https://www.scottishpowerrenewables.com/userfiles/news/amp-images/scottishpower_renewables_takes_on_sea_plastics_at_lowestoft.jpg" alt="img" />
                  </div>
                  <div className="image">
                    <img src="https://media.phillyvoice.com/media/images/16984210439_f210b8047c_o.2e16d0ba.fill-1200x630-c0.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="pop-image">
                <span>&times;</span>
                <img src="img/gallery/1.jpg" alt="gallery-img" />
              </div>
            </div>
          </div>
        </section>

        
        <section className="contact-section" id="contact">
          <div className="container">
            <div className="heading">
              <h2>Connect With Us</h2>
              <p>
                Fill this form, our team will collect your <span></span>{' '}
                or <span>Trashes</span> from your place.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-5">
                <form className="contact-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          {/* <div className="col-lg-12">
                            <div className="form-group">
                              <select
                                name="donation"
                                id="donation"
                                className="form-control"
                              >
                                <option value="">
                                  Choose mode of payement123
                                </option>
                                <option value="food">Gpay/Phonepe-etc</option>
                                <option value="clothes">Debit/credit cards</option>
                                <option value="footware">Cash on hands</option>
                              </select>
                            </div>
                          </div> */}
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address"
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="text"
                              id=""
                              cols="90"
                              rows="1"
                              placeholder="feedback"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <a href="#" className="btn1 mt-5">
                            Submit Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="col-one">
                  <h4>Garbage Management corporates</h4>
                  <p>
                    Address : 3, Near IT Park, Mahatma Gandhi Road, chennai
                    440000{' '}
                  </p>
                  <p>
                    Contact No :{' '}
                    <a href="tel: +91 98659****59">+91 98659****59</a>
                  </p>
                  <p>Email : <a href="mailto:foundation@code.com">gmcorporates@gmail.com</a></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-two">
                  <h4>Important Links</h4>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#donation">Services</a>
                    </li>
                    <li>
                      <a href="#mission-id">Missions</a>
                    </li>
                    <li>
                      <a href="#about">About us</a>
                    </li>
                    <li>
                      <a href="#contact">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-one">
                  <h4>Social Media</h4>
                  <div className="social">
                    <a href="#">
                      <img src="https://img.freepik.com/premium-vector/vinnitsyaukrainejanuary-24-2021facebook-vector-image-flat-icon-with-letter-f-blue-color-button-with-letter-isolated-white-background_736051-65.jpg" alt="facebook" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2__NOQ1ZLsjPL_IqgD9fP5jNSbIIbHugRg&usqp=CAU" alt="inatagram" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanFxQQbxmCbCuzFHrlXGS0nogyFrPVpdrkWCenFYBXGZwPoUdsEnEDb35OJiVu3gQB5Y&usqp=CAU" alt="youtube" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrefHFmS_OINItmSqPWM0V5J846e_rFuxNGPt42UZ1G3P3QVhzIhPAmGYEqxImqlhs_ag&usqp=CAU" alt="linkedin" />
                    </a>
                    <a href="#">
                      <img src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png?f=webp&w=256" alt="gmail" />
                    </a>
                  </div>
                  <p>Copyright &copy; 2023 | All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </body>
      
        <script src="js/script.js"></script>
        </div>
      

  );
}

export default Mainn;
