import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const dishesBarChart = ({ recipes }) => {
  // Count how many recipes belong to each dish type
  const dishTypeCounts = {};

  recipes.forEach(recipe => {
    if (recipe.dishTypes && recipe.dishTypes.length > 0) {
      recipe.dishTypes.forEach(type => {
        dishTypeCounts[type] = (dishTypeCounts[type] || 0) + 1;
      });
    }
  });

  // Convert to array format for Recharts
  const data = Object.entries(dishTypeCounts).map(([type, count]) => ({
    name: type,
    count
  }));

  return (
    <div style={{ width: '100%', height: 350,  backgroundColor: '#9d9a9aff', 
        borderRadius: '8px',
        padding: '1px', marginLeft: '20px'}}>
      <h2 style={{ color: 'white', marginBottom: '10px' }}>Recipes by Dish Type</h2>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={100} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default dishesBarChart;