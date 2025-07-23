// HomePage.jsx
import Filters from "./filters";
import SumStats from "./sumStats";
import DataList from "./datalist";
import DishesBarChart from "./barChart";
import './Homepage.css'
import IngredientsLineChart from "./IngredientsLineChart";

const HomePage = ({ recipes, handleFilterChange, filteredRecipes }) => {
  return (
    <div>
      <SumStats recipes={recipes} />

      {/* Charts Row */}
      <div className="charts-row">
        <div className="chart-container">
          <DishesBarChart recipes={recipes} />
        </div>
        <div style={{ flex: 1 }}>
          <IngredientsLineChart recipes={recipes} />
        </div>
        </div>
      <Filters recipes={recipes} onFilterChange={handleFilterChange} />

      {/* Data list below, full width */}
      <DataList filteredRecipes={filteredRecipes} />
    </div>
  );
};

export default HomePage;
