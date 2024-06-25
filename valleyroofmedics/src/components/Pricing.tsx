import styles from '../styles/Pricing.module.css';

const Pricing = () => (
  <section className={styles.pricing}>
    <div className="container mx-auto p-4 text-center">
      <h3 className="text-3xl font-bold mb-4">Payment Options</h3>
      <div className="row">
        <div className="col-md-3 mb-4">
          <h4 className="text-xl font-semibold mb-2">Cash, Debit or Credit</h4>
          <p>10% Discount when Paid in Full</p>
          <a href="#" className="btn btn-info">Choose Basic</a>
        </div>
        <div className="col-md-3 mb-4">
          <h4 className="text-xl font-semibold mb-2">P.A.C.E. Loans</h4>
          <p>Property Assessed Clean Energy</p>
          <a href="#" className="btn btn-info">Choose Basic</a>
        </div>
        <div className="col-md-3 mb-4">
          <h4 className="text-xl font-semibold mb-2">Grants & Rebates</h4>
          <p>This is basically free money!</p>
          <a href="#" className="btn btn-info">Choose Basic</a>
        </div>
        <div className="col-md-3 mb-4">
          <h4 className="text-xl font-semibold mb-2">Federal Solar Tax Credits</h4>
          <p>Tax write off worth up to 30%</p>
          <a href="#" className="btn btn-info">Choose Basic</a>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
