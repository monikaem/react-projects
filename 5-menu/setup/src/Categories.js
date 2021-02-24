import React from 'react';

const Categories = ({filterItems, categories}) => {
  const categoriesButtons = categories.map((category, index) => {
      return <button key={index} className='filter-btn' onClick={() => filterItems(category)}>{category}</button>
    })
  return (
      <div className='btn-container'>
        {categoriesButtons}
      </div>
  )
};

export default Categories;
