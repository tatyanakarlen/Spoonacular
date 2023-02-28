import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ filteredRecipes, setFilteredRecipes }) => {
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput)
  };

  async function addTodo(e) {
    e.preventDefault();
    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${userInput}`
            // fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            // 'https://api.spoonacular.com/recipes/complexSearch?apiKey=2bb87e4a65e64507a35d5c178493e70a&query=italian&number=50'
          );
          setFilteredRecipes(res.data);
          console.log('these are filtered posts', res.data);
          navigate("/recipes")

    
      } catch (err) {
        console.log("couldn't fetch recipes");
      }

      

    // async function getData() {
    //     try {
    //       let response1 = await fetch(
    //         '/api/contributorSubmissions/allContributors'
    //       );
    //       let contributors = await response1.json();
    //       setContributors(contributors);
    //       let response2 = await fetch('/api/articleSubmissions/allArticles');
    //       let articles = await response2.json();
    //       setArticles(articles);
    //     } catch (err) {
    //       console.log("couldn't fetch posts");
    //     }
    //   }

    // if (toDoLength < 3) {
    //   return;
    // }

    // setToDos([
    //   ...toDos,
    //   { id: Math.floor(Math.random() * 10000) + 1, toDo: newToDo }
    // ]);
    // setErrorMsg("");
    // setNewToDo("");
    // setToDoLength(0);
  };



  return <div>THIS IS SEARCH FORM
  <form>
  <label>
    <span>CUISINE</span>
    <input
      name="cuisine"
      onChange={handleChange}
      value={userInput}
    //   pattern="[A-Za-z]{2,}"
    />
  </label>
  <button
  onClick={addTodo}
  >
    SEARCH
  </button>
</form>
</div>;
};

export default SearchForm;
