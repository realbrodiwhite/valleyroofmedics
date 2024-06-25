import styles from '../styles/Gallery.module.css';

const Gallery = () => (
  <section className={styles.gallery}>
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold mb-4 text-center">Roofing Projects Showcase</h3>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-6 mb-4">
          <img src="/images/gallery1.jpg" alt="Gallery" className="w-full" />
        </div>
        <div className="col-lg-3 col-md-4 col-6 mb-4">
          <img src="/images/gallery2.jpg" alt="Gallery" className="w-full" />
        </div>
        <div className="col-lg-3 col-md-4 col-6 mb-4">
          <img src="/images/gallery3.jpg" alt="Gallery" className="w-full" />
        </div>
        <div className="col-lg-3 col-md-4 col-6 mb-4">
          <img src="/images/gallery4.jpg" alt="Gallery" className="w-full" />
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
