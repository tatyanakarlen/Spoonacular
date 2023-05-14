import React from 'react';
import './SearchForm.css';


const SearchForm = ({ userInput, setUserInput, setFilteredRecipes, getRecipes }) => {
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  
  // async function getRecipes(e) {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.get(
  //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${userInput}&number=10`
  //     );
  //     setFilteredRecipes(res.data.results);
  //     navigate('/recipes');
  //     console.log('userInput', userInput);
  //   } catch (err) {
  //     console.log("couldn't fetch recipes");
  //   }
  // }

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
              onClick={(e) => getRecipes(e, userInput)}
              className="btn btn-dark"
              type="button"
              id="button-addon2"
            >
              Search
            
            </button>
          </div>
       
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
