import styles from '../styles/News.module.css';

const News = () => (
  <section className={styles.news}>
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold mb-4 text-center">Latest Roofing News</h3>
      <div className="row">
        <div className="col-md-3 mb-4">
          <img src="/images/news1.jpg" alt="News" className="w-full mb-2" />
          <h4 className="text-xl font-semibold mb-2">Roof Maintenance Tips</h4>
          <a href="#" className="text-primary">Read More</a>
        </div>
        <div className="col-md-3 mb-4">
          <img src="/images/news2.jpg" alt="News" className="w-full mb-2" />
          <h4 className="text-xl font-semibold mb-2">Emergency Roof Repairs</h4>
          <a href="#" className="text-primary">Read More</a>
        </div>
        <div className="col-md-3 mb-4">
          <img src="/images/news3.jpg" alt="News" className="w-full mb-2" />
          <h4 className="text-xl font-semibold mb-2">New Roof Installation Guide</h4>
          <a href="#" className="text-primary">Read More</a>
        </div>
        <div className="col-md-3 mb-4">
          <img src="/images/news4.jpg" alt="News" className="w-full mb-2" />
          <h4 className="text-xl font-semibold mb-2">Trendy Roof Designs</h4>
          <a href="#" className="text-primary">Read More</a>
        </div>
      </div>
    </div>
  </section>
);

export default News;
