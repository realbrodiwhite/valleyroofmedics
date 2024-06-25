import styles from '../styles/Team.module.css';

const Team = () => (
  <section className={styles.team}>
    <div className="container mx-auto p-4 text-center">
      <h3 className="text-3xl font-bold mb-4">Meet Us</h3>
      <p className="text-lg mb-4">Meet the key players on our small yet very effective team here at Roof Medics.</p>
      <div className="row">
        <div className="col-md-3 mb-4">
          <img src="/images/team1.jpg" alt="Team Member" className="w-full mb-2" />
          <h4 className="text-xl font-semibold">Art</h4>
          <p>Owner</p>
        </div>
        <div className="col-md-3 mb-4">
          <img src="/images/team2.jpg" alt="Team Member" className="w-full mb-2" />
          <h4 className="text-xl font-semibold">Erica</h4>
          <p>Sales & Customer Service</p>
        </div>
        <div className="col-md-3 mb-4">
          <img src="/images/team3.jpg" alt="Team Member" className="w-full mb-2" />
          <h4 className="text-xl font-semibold">Brodi</h4>
          <p>Marketing & Technology</p>
        </div>
        <div className="col-md-3 mb-4">
          <img src="/images/team4.jpg" alt="Team Member" className="w-full mb-2" />
          <h4 className="text-xl font-semibold">Rob</h4>
          <p>Foreman & Roofing Specialist</p>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
