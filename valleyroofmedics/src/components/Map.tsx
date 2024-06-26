import styles from '../styles/Map.module.css';

const Map = () => (
  <section className={styles.map} id="map1-7-u8FvvZzi1T">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className={styles.mapContainer}>
            <iframe title="Valley Roof Medics" frameBorder="0" className={styles.iframe} src="https://www.google.com/maps/embed/v1/place?q=San+Luis+Valley,+Colorado,+USA&key=AIzaSyA-fRQ9j1g3AAQ0OqN4CDRl1pdBrvYXnO4" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Map;
