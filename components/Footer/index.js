import { useState } from 'react';
import { InlineWidget } from "react-calendly";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 1100,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                viewBox="0 0 24 24"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <div className="contact-box__info"  onClick={() => handleOpen()}>
              <a style={{cursor: 'pointer'}} className="contact-box__info--title">
                Book a meeting
              </a>
              <p className="contact-box__info--subtitle"> Mon-Fri 10am-6pm</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail-opened"
                viewBox="0 0 24 24"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="3 9 12 15 21 9 12 3 3 9" />
                <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <line x1="3" y1="19" x2="9" y2="13" />
                <line x1="15" y1="13" x2="21" y2="19" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a href="mailto:info@websitewaala.in" className="contact-box__info--title">
                info@websitewaala.in
              </a>
              <p className="contact-box__info--subtitle">Online support</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-2"
                viewBox="0 0 24 24"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="18" y2="6.01" />
                <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                <line x1="9" y1="4" x2="9" y2="17" />
                <line x1="15" y1="15" x2="15" y2="20" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a className="contact-box__info--title">
                Mumbai, India
              </a>
              <p className="contact-box__info--subtitle">Mumbai, IN</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer-sm" style={{backgroundColor: "#212121"}}>
        <div className="container">
          <div className="row py-4 text-center text-white">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              Connect with us on social media
            </div>
            <div className="col-lg-7 col-md-6">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mt-5">
        <div className="row text-white justify-content-center mt-3 pb-3">
          <div className="col-12 col-sm-6 col-lg-6 mx-auto">
            <h5 className="text-capitalize fw-bold"><i className="fa fa-rocket" style={{fontSize: 30}}></i>{" "}WebsiteWaala</h5>
            <hr
              className="bg-white d-inline-block mb-4"
              style={{width: 60, height: 2}}
            />
            <p className="lh-lg">
            We will help you ship better apps, faster. Our team of expert engineers has created the best user experiences in some of the most popular apps worldwide.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">Products</h5>
            <hr
              className="bg-white d-inline-block mb-4"
              style={{width: 60, height: 2}}
            />
            <ul className="list-inline campany-list">
              <li>
                <a href="#">Website/Webapps</a>
              </li>
              <li>
                <a href="#">Mobile App</a>
              </li>
              <li>
                <a href="#">Cloud Hosting</a>
              </li>
              <li>
                <a href="#">Web development</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">useful links</h5>
            <hr
              className="bg-white d-inline-block mb-4"
              style={{width: 60, height: 2}}
            />
            <ul className="list-inline campany-list">
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          {/* <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">contact</h5>
            <hr
              className="bg-white d-inline-block mb-4"
              style={{width: 60, height: 2}}
            />
            <ul className="list-inline campany-list">
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="footer-bottom pt-5 pb-5">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-12">
              <div className="footer-bottom__copyright">
                &copy; Copyright 2021 <a href="#">WebsiteWaala</a> {" "} | Created by{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  WebsiteWaala
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
      open={open}
      onClose={() => handleClose()}
    >
      <Box sx={style}>
        <InlineWidget
          className="calendly"
          url="https://calendly.com/websitewaala/30min"
          text="Click here to schedule!"
        />
      </Box>
    </Modal>
    </footer>
  );
}

export default Footer;
