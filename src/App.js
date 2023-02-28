import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Recipes from './components/Recipes';
import Pagination from './components/Pagination';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [userInput, setUserInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://api.spoonacular.com/recipes/complexSearch?apiKey=58f6d2f2f5b244549ef545ecab3cf7c9&query=chinese&number=50'
      );
      setRecipes(res.data.results);
      console.log('this is res.data', res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log('these are posts', recipes);

  // get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentRecipes = recipes.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // return (
  //   <div className="container mt-5">
  //     <h1 className="text-primary mb-3">Recipe app</h1>
  //     <Posts posts={currentPosts}/>
  //     <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
  //   </div>
  // );

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes recipes={currentRecipes} paginate={paginate} postsPerPage={postsPerPage} totalPosts={recipes.length}/>} />
          postsPerPage, totalPosts, paginate
          {/* <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />{' '} */}
          
        </Routes>
      </div>
    </Router>
  );
}

{
  /* <Router>
<div className="App">
  <Navbar />
  <Routes>
    <Route exact path="/" element={<Home posts={posts} />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/posts/:postId" element={<Post posts={posts} />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</div>
</Router> */
}

export default App;
