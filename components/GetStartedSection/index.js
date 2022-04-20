import CircularProgress from '@mui/material/CircularProgress';
import TextField from "@mui/material/TextField";
import { useState } from "react";

function GetStartedSection() {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    (async () => {
      const rawResponse = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const content = await rawResponse.json();
      console.log(content);
      setLoading(false)
      setValues({})
    })();
  }
  return (
    <section id="contact" className="get-started">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold text-capitalize">Get started</h1>
          <div className="heading-line"></div>
          <p className="lh-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            illum architecto modi.
          </p>
        </div>
        <div className="row text-white">
          <div className="col-12 col-lg-6 gradient shadow p-3">
            <div className="cta-info w-100">
              <h4 className="display-4 fw-bold">
                100% Satisfaction Guaranteed
              </h4>
              <p className="lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                alias optio minima, tempore architecto sint ipsam dolore tempora
                facere laboriosam corrupti!
              </p>
              <h3 className="display-3--brief">What will be the next step?</h3>
              <ul className="cta-info__list">
                <li>We&apos;ll prepare the proposal.</li>
                <li>We&apos;ll discuss it together.</li>
                <li>Let&apos;s start the discussion.</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 bg-white shadow p-3">
            <div className="form w-100 pb-2">
              <h4 className="display-3--title mb-5">start your project</h4>
              <form action="#" className="row" onSubmit={(e) => handleSubmit(e)}>
                <div className="col-lg-6 col-md mb-3">
                  <TextField
                    className="shadow"
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setValues({ ...values, fullName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="col-lg-6 col-md mb-3">
                  <TextField
                    className="shadow"
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) =>
                      setValues({ ...values, phone: e.target.value })
                    }
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <TextField
                    type="email"
                    className="shadow"
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <TextField
                    type="email"
                    className="shadow"
                    id="outlined-basic"
                    label="Some details about your project"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={8}
                    required
                    onChange={(e) =>
                      setValues({ ...values, message: e.target.value })
                    }
                  />
                </div>
                <div className="text-center d-grid mt-1">
                  {loading ? <CircularProgress style={{margin: 'auto'}} /> : <button
                    type="submit"
                    className="btn btn-primary rounded-pill pt-3 pb-3"
                  >
                    submit
                    {/* <i className="fas fa-paper-plane"></i> */}
                  </button>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStartedSection;
