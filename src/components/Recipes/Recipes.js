import React from 'react';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Recipes = ({
  currentRecipes,
  loading,
  paginate,
  postsPerPage,
  totalPosts,
  filteredRecipes,
}) => {
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
    <Nav />
      <ul className="list-group mb4">
        {currentRecipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`}>
            <li key={recipe.id} className="list-group-item">
              {recipe.title}
            </li>
          </Link>
        ))}
      </ul>

      {/* <Link to={`/posts/${post.id}`}>
          <h5 className="card-title">{post.title}</h5>
          </Link> */}

      <Pagination
        postsPerPage={postsPerPage}
        paginate={paginate}
        totalPosts={totalPosts}
      />
      {/* <ul className="list-group mb4">
        <li className="list-group-item">
          {filteredRecipes.title}
          
        </li>
        <li className="list-group-item">
          {filteredRecipes.id}
          
        </li>
      </ul>

      <Pagination
        postsPerPage={postsPerPage}
        paginate={paginate}
        totalPosts={totalPosts}
      /> */}
    </>
  );
};

export default Recipes;
