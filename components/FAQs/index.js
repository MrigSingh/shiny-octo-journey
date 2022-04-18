import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQs() {
  return (
    <section id="faq" className="testimonials">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <div className="row text-center text-white">
          <h1 className="display-3 fw-bold">FAQs</h1>
          <hr style={{ width: "100px", height: "3px" }} className="mx-auto" />
          <p className="lead pt-1">What most of our clients are asking us more often ?</p>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <Accordion className='shadow mb-3'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How can I contact you and quickly get a quote for my online project?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The best way to reach us out is through the contact form under this section. Our team will reach out to you for further discussion. For a fast quote make sure your provide many project details.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='shadow mb-3'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Do you create designs from the ground up or should I provide them to you?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It really depends we have in house designers if you are not in position to provide designs we can help with that as well. Once design get finalize we move to development. And most important all of this updates regarding your projects will be communicated with you on regualr basis.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='shadow mb-3'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Question 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='shadow mb-3'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Question 4</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default FAQs;
