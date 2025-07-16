import { useState, useEffect } from "react"
import "./filters.css"

const Filters = ({ recipes, onFilterChange }) => {
  const [servings, setServings] = useState("")
  const [maxMinutes, setMaxMinutes] = useState(0)
  const [minMinutes, setMinMinutes] = useState(0)
  const [maxAllowedMinutes, setMaxAllowedMinutes] = useState(0)

  useEffect(() => {
    if (recipes.length > 0) {
      const minutesList = recipes.map(r => r.readyInMinutes || 0)
      setMinMinutes(Math.min(...minutesList))
      const max = Math.max(...minutesList)
      setMaxAllowedMinutes(max)
      setMaxMinutes(max)
    }
  }, [recipes])

  // Notify parent when either filter changes
  useEffect(() => {
    onFilterChange({ servings, maxMinutes })
  }, [servings, maxMinutes])

  return (
    <div className="filters-container">
      <div className="filter-box">
        <label>Filter by Servings:</label>
        <input
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          placeholder="e.g. 4"
        />
      </div>

      <div className="filter-box">
        <label>Max Prep Time: {maxMinutes} min</label>
        <input
          type="range"
          min={minMinutes}
          max={maxAllowedMinutes}
          value={maxMinutes}
          onChange={(e) => setMaxMinutes(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export default Filters
