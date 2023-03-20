import React from "react";
import { Whatsapp, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'react-bootstrap-icons';



export const FooterTemplate = () => {



  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">

        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">QUICK LINKS</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Privacy & Data Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                Vulnerability Disclosure Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">CONTACT US</h5>
            <ul className="list-unstyled">
              <li>
                
                Address:
                5 County Place, Paisley, PA1 1BN
                
              </li>
              <li>
               
                0141 737 5488
                
              </li>
              <li>
              info@happyteeth.co.uk
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">OPENING HOURS
</h5>
            <ul className="list-unstyled mb-0">
              <li>
              Monday: 9.00am - 7.30pm
              </li>
              <li>
              Tuesday to Friday: 9.00am - 5.45pm
              </li>
              <li>
              Saturday - Sunday: Closed
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0  d-flex flex-column justify-content-start align-items-stretch">
          
                    <ul className="list-unstyled mb-0 d-flex justify-content-between  align-items-stretch flex-row">
                        <li>
                            <a className='text-black' href="https://www.instagram.com/gruposaona/"><Instagram /> </a>
                        </li>
                        <li>
                            <a className='text-black' href="https://www.facebook.com/gruposaona"><Facebook /></a>
                        </li>
                        <li>
                            <a className='text-black' href="https://twitter.com/gruposaona"><Twitter /></a>
                        </li>
                        <li>
                            <a className='text-black' href="https://www.youtube.com/channel/UCGLdWRKW_jU9vZS8wz8Ti6g/featured"><Youtube /></a>
                        </li>
                        <li>
                            <a className='text-black' href="https://www.linkedin.com/company/grupo-saona"><Linkedin /></a>
                        </li>
                    </ul>
           
            <div className="text-center">Happy Teeth © 2023</div>
        </div>
      
        </div>
      </div>
    </footer>
  );
};
