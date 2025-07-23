import { useState, useEffect } from "react"
import "./filters.css"

const Filters = ({ recipes, onFilterChange }) => {
  const [servingsInput, setServingsInput] = useState("")     // 👈 used while typing
  const [servings, setServings] = useState("")                // 👈 active filter state
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

  // Notify parent when slider (maxMinutes) changes
  useEffect(() => {
    onFilterChange({ servings, maxMinutes })
  }, [maxMinutes])

  // Notify parent when "Search" is clicked
  const handleSearchClick = () => {
    setServings(servingsInput)
    onFilterChange({ servings: servingsInput, maxMinutes })
  }

  return (
    <div className="filters-container">
      <div className="filter-box">
        <label>Filter by Servings:</label>
        <input
          type="number"
          value={servingsInput}
          onChange={(e) => setServingsInput(e.target.value)}
          placeholder="e.g. 4"
        />
        <button onClick={handleSearchClick} style={{ marginLeft: '8px' , marginTop: '8px'}}>
          Search
        </button>
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
