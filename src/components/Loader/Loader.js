import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3>Loading</h3>
    </div>
  );
};

export default Loader;
