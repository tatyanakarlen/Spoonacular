import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SearchForm.css';

const SearchForm = ({ filteredRecipes, setFilteredRecipes }) => {
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  async function addTodo(e) {
    e.preventDefault();
    try {
      const res = await axios.get(
        // `https://jsonplaceholder.typicode.com/posts?userId=${userInput}`
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${userInput}&number=10`
      );
      setFilteredRecipes(res.data.results);
      console.log('these are filtered recipes', res.data.results);
      navigate('/recipes');
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
              class="form-control"
              placeholder="Cuisine"
              aria-label="Cuisine"
              aria-describedby="button-addon2"
            />
            <button
              onClick={addTodo}
              class="btn btn-outline-light"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </label>
        {/* <button
  onClick={addTodo}
  >
    SEARCH
  </button> */}
      </form>
    </div>
  );
};

export default SearchForm;
