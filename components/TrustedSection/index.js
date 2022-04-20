// import Image from 'next/image'
// import company1 from '../../public/assets/campanies/campany-1.png'
// import company2 from '../../public/assets/campanies/campany-2.png'
// import company3 from '../../public/assets/campanies/campany-3.png'
// import company4 from '../../public/assets/campanies/campany-4.png'
// import company5 from '../../public/assets/campanies/campany-5.png'
// import company6 from '../../public/assets/campanies/campany-6.png'

function TrustedSection() {
  return (
    <section id="campanies" className="campanies">
    <div className="container">
      <div className="row text-center">
        <h4 className="fw-bold lead mb-3">Trusted by companies like</h4>
        <div className="heading-line mb-5"></div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/campanies/campany-1.png" alt="Campany 1 logo" title="Campany 1 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/campanies/campany-2.png" alt="Campany 2 logo" title="Campany 2 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/campanies/campany-3.png" alt="Campany 3 logo" title="Campany 3 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/campanies/campany-4.png" alt="Campany 4 logo" title="Campany 4 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/campanies/campany-5.png" alt="Campany 5 logo" title="Campany 5 Logo" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/campanies/campany-6.png" alt="Campany 6 logo" title="Campany 6 Logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TrustedSection