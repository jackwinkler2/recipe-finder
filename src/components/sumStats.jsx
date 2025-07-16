import "./sumStats.css"

const SumStats = ({ recipes }) => {
  const cuisines = recipes.flatMap(r => r.cuisines).filter(c => c && c !== "N/A")

  const modeCuisine = cuisines.length
    ? cuisines.reduce((a, b, i, arr) =>
        arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b
      )
    : "N/A"

  const avgMinutes = recipes.length
    ? Math.round(
        recipes.reduce((acc, r) => acc + (r.readyInMinutes || 0), 0) / recipes.length
      )
    : "N/A"

  const maxServings = recipes.length
    ? Math.max(...recipes.map(r => r.servings || 0))
    : "N/A"

  return (
    <div className="stats-container">
      <div className="stat-box">
        <h3>Most Common Cuisine</h3>
        <p>{modeCuisine}</p>
      </div>
      <div className="stat-box">
        <h3>Average Prep Time</h3>
        <p>{avgMinutes} mins</p>
      </div>
      <div className="stat-box">
        <h3>Max Servings</h3>
        <p>{maxServings}</p>
      </div>
    </div>
  )
}

export default SumStats
