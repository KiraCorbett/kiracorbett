import './LandingImage.css';

const LandingImage = ({ left, mid, right }) => {
  return (
    <div className="elements">
        <h1>{left}</h1>
        <h1>{mid}</h1>
        <h1>{right}</h1>
    </div>
  );
}

export default LandingImage;