import styles from '../styles/ContactForm.module.css';

const ContactForm = () => (
  <section className={styles.contactForm}>
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold mb-4 text-center">Get in Touch</h3>
      <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler">
        <div className="mb-4">
          <input type="text" name="name" placeholder="Name" className="form-control mb-3" />
          <input type="email" name="email" placeholder="Email" className="form-control mb-3" />
          <textarea name="textarea" placeholder="Message" className="form-control mb-3"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactForm;
