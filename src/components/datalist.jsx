import "./datalist.css"

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
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DataList
