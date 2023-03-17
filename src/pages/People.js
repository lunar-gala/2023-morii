import PhotoGallery from './PhotoGallery';

function People({ setCursor }) {
  return (
    <>
      <div
        id="viewport"
        onMouseLeave={() => setCursor(true)}
        onMouseOver={() => setCursor(false)}
      >
        <iframe src="/people-page/index.html" title="Lines Page"></iframe>
      </div>
    </>
  );
}

export default People;
