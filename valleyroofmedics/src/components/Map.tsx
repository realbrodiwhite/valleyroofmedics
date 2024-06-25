import styles from '../styles/Map.module.css';

const Map = () => (
  <section className={styles.map}>
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold mb-4 text-center">Our Location</h3>
      <div className="w-full h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095177!2d144.9537353153184!3d-37.81720997975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727de4df9a020c!2sRoof%20Medics!5e0!3m2!1sen!2sus!4v1603792606474!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Map;
