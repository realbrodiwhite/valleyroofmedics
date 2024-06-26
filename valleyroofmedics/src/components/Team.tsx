import styles from '../styles/Team.module.css';

const Team = () => (
  <section className={styles.team}>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 content-head">
          <div className="mbr-section-head mb-5">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Meet Us</strong>
            </h4>
            <h5 className="mbr-section-subtitle mbr-fonts-style align-center mt-4 display-7">
              Meet the key players on our small yet very effective team here at Roof Medics.
            </h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="item features-image col-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/372852/assets/images/photo-1591084728795-1149f32d9866.jpeg" alt="Mobirise Website Builder" title="" />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-5"><strong>Art</strong></h5>
              <h6 className="item-subtitle mbr-fonts-style mb-3 display-7">Owner</h6>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/372852/assets/images/photo-1677520338280-664ae23816eb.jpeg" alt="Mobirise Website Builder" title="" />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-5"><strong>Erica</strong></h5>
              <h6 className="item-subtitle mbr-fonts-style mb-3 display-7">Sales & Customer Service</h6>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/372852/assets/images/photo-1621624666561-84d010700-h_lvwihy7i.jpg" alt="Mobirise Website Builder" title="" />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-5"><strong>Brodi</strong></h5>
              <h6 className="item-subtitle mbr-fonts-style mb-3 display-7">Marketing & Technology</h6>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/372852/assets/images/gf6fbd0af516719184a40138794fb-h_lvwifbpp.jpg" alt="Mobirise Website Builder" title="" data-slide-to="3" data-bs-slide-to="3" />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-5"><strong>Rob</strong></h5>
              <h6 className="item-subtitle mbr-fonts-style mb-3 display-7">Foreman & Roofing Specialist</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
