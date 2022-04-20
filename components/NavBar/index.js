import { useState } from 'react';
import { InlineWidget } from "react-calendly";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Link from 'next/link';

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


function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
    <div className="container">
      <a className="navbar-brand" href="">
        <span className='brand-logo'><i className="fa fa-rocket" style={{fontSize: 30}}></i>{" "}WebsiteWaala</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><Link href="/" passHref><a className="nav-link active" aria-current="page">Home</a></Link></li>
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#faq">FAQs</a></li>
          <li className="nav-item"><a className="nav-link" href="#portfolio">portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">contact</a>
          </li>
        </ul>
        <button type="button" className="rounded-pill btn-rounded" onClick={() => handleOpen()}>
          Discuss Project
          <span>
            <i className="fa-solid fa-calendar-days"></i>
          </span>
        </button>
      </div>
    </div>
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <InlineWidget
          className="calendly"
          url="https://calendly.com/websitewaala/30min"
          text="Click here to schedule!"
        />
      </Box>
    </Modal>
  </nav>
  )
}

export default NavBar