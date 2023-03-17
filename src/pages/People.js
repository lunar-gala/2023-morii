import styles from './People.module.css';
import PhotoGallery from './PhotoGallery';

function People({ setCursor }) {
  return (
    <>
      <div
        id="viewport"
        className={styles.desktop}
        onMouseLeave={() => setCursor(true)}
        onMouseOver={() => setCursor(false)}
      >
        <iframe src="/people-page/index.html" title="Lines Page"></iframe>
      </div>
      <div className={styles.mobile}>
        <div>
          <PhotoGallery />
        </div>
      </div>
    </>
  );
}

export default People;
