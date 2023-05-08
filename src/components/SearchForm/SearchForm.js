import React from 'react';
import './SearchForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ userInput, setUserInput, setFilteredRecipes }) => {
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const navigate = useNavigate();

  async function getRecipes(e) {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${userInput}&number=10`
      );
      setFilteredRecipes(res.data.results);
      navigate('/recipes');
      console.log('userInput', userInput);
    } catch (err) {
      console.log("couldn't fetch recipes");
    }
  }

  return (
    <div>
      <form>
        <label>
          <div className="input-group mb-3">
            <input
              name="cuisine"
              onChange={handleChange}
              value={userInput}
              type="text"
              className="form-control"
              placeholder="Keyword"
              aria-label="Cuisine"
              aria-describedby="button-addon2"
            />
              <button
              onClick={getRecipes}
              className="btn btn-dark"
              type="button"
              id="button-addon2"
            >
              Search
              {/* <i class="bi bi-search"></i> */}
            </button>
          </div>
       
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
