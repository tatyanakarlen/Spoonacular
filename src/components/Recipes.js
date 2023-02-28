import React from 'react'
import Pagination from './Pagination'

const Posts = ({ recipes, loading, paginate, postsPerPage, totalPosts }) => {

  
  
  if(loading) {
      return <h2>Loading</h2>
  }

  return (
    <>
    <ul className="list-group mb4">
        {recipes.map(recipe => (
            <li 
            key={recipe.id}
            className="list-group-item">
                {recipe.title}
            </li>
        ))}
      
    </ul>
   
    <Pagination recipes={recipes} postsPerPage={postsPerPage} paginate={paginate} totalPosts={totalPosts}/>
    </>
  )
}

export default Posts
