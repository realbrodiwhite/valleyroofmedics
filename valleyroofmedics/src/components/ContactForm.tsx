import styles from '../styles/ContactForm.module.css';

const ContactForm = () => (
  <section className={styles.contactForm}>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 content-head">
          <div className="mbr-section-head mb-5">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Contact Us</strong></h4>
          </div>
          <form action="https://formoid.net/api/p/1q9h109v0" method="POST" className="mbr-form form-with-styler mx-auto">
            <div className="row">
              <div className="col-md-6 col-lg-4 form-group" data-for="name">
                <input type="text" name="name" placeholder="Name" data-form-field="name" className="form-control" id="name-form07-u8FvvZz9hK" />
              </div>
              <div className="col-md-6 col-lg-4 form-group" data-for="email">
                <input type="email" name="email" placeholder="Email" data-form-field="email" className="form-control" id="email-form07-u8FvvZz9hK" />
              </div>
              <div className="col-md-6 col-lg-4 form-group" data-for="phone">
                <input type="tel" name="phone" placeholder="Phone" data-form-field="phone" className="form-control" id="phone-form07-u8FvvZz9hK" />
              </div>
              <div className="col-12 form-group" data-for="message">
                <textarea name="message" placeholder="Message" data-form-field="message" className="form-control" id="message-form07-u8FvvZz9hK"></textarea>
              </div>
              <div className="col-12 mbr-section-btn align-center">
                <button type="submit" className="btn btn-primary display-7">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactForm;
