import "./datalist.css"
import { Link } from "react-router-dom";

const DataList = ({filteredRecipes}) => {
  return (
    <div className="table-container">
      <table className="recipe-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Servings</th>
            <th>Minutes</th>
            <th>Image</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecipes.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <td>{recipe.title}</td>
                <td>{recipe.cuisines.join(", ") || "N/A"}</td>
                <td>{recipe.servings}</td>
                <td>{recipe.readyInMinutes || "N/A"}</td>
                <td>
                  <img
                    src={recipe.image}
                    alt={"image"}
                    className="thumbnail"
                  />
                </td>
                <td>
                  <Link to={`/recipe/${recipe.id}`} state={{ recipe }}>
                    <button className="details-btn">View</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DataList
