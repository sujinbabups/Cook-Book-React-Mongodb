import React from 'react';

const Popularrecipies = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src="../images/butter_chicken.jpeg"
        alt="Recipe Image"
        className="rounded w-full h-32 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{recipe.recipeName}</h3>
      <p className="text-gray-600">A{recipe.ingredients}</p>
    </div>
  );
};

export default Popularrecipies;
