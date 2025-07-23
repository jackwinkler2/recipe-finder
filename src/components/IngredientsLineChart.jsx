import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const IngredientsLineChart = ({ recipes }) => {
  // Helper to truncate long names
  const truncate = (str, maxLen = 12) =>
    str.length > maxLen ? str.slice(0, maxLen - 3) + '...' : str;

  // Get first 10 recipes and prepare data
  const data = recipes.slice(0, 10).map((recipe, index) => ({
    name: truncate(recipe.title || `Recipe ${index + 1}`),
    ingredients: recipe.extendedIngredients?.length || 0
  }));

  return (
    <div
      style={{
        width: '100%',
        height: 350,
        backgroundColor: '#2e2e2e',
        borderRadius: '8px',
        padding: '10px',
        marginLeft: '20px'
      }}
    >
      <h2 style={{ color: 'white', fontSize: '18px', marginBottom: '10px' }}>
        Ingredient Count per Recipe
      </h2>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={80}
            tick={{ fontSize: 10, fill: 'white' }}
          />
          <YAxis tick={{ fontSize: 10, fill: 'white' }} />
          <Tooltip
            contentStyle={{ fontSize: 12 }}
            labelStyle={{ fontSize: 12 }}
          />
          <Line
            type="monotone"
            dataKey="ingredients"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IngredientsLineChart;
