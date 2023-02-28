import React from 'react';
import Pagination from './Pagination';

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
      <ul className="list-group mb4">
        {currentRecipes.map((recipe) => (
          <li key={recipe.id} className="list-group-item">
            {recipe.title}
          </li>
        ))}
      </ul>

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
