import './Loader.css';

const Loader = () => {
  return (
    <div class="loader-container">
      <div class="lds-roller">
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
