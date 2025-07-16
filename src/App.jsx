import { useState, useEffect } from 'react'
import './App.css'
import DataList from './components/datalist'
import SumStats from "./components/sumStats"
import Filters from "./components/filters"

function App() {
  const [recipes, setRecipes] = useState([])
  const [filters, setFilters] = useState({ servings: "", maxMinutes: Infinity })

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=50&apiKey=bad90471587d4594ba68016cc2f7ac49`
        )
        const data = await response.json()
              console.log("Full API response:", data)

        if (data.recipes && data.recipes.length > 0) {
          console.log("First recipe:", data.recipes[0])
        }

        setRecipes(data.recipes)
      } catch (error) {
        console.error("Error fetching recipes:", error)
      }
    }

    fetchRecipes()
  }, [])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  // Apply filtering
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesServings =
      !filters.servings || recipe.servings === Number(filters.servings)

    const matchesMinutes =
      recipe.readyInMinutes <= filters.maxMinutes

    return matchesServings && matchesMinutes
  })

  return (
    <>
      <div className="page-wrapper">
        <h1 className="big-header">
          Recipe Finder
        </h1>
        <Filters recipes={recipes} onFilterChange={handleFilterChange}/>
        <SumStats recipes={recipes} />
        <DataList filteredRecipes={filteredRecipes} />
      </div>
    </>
  )
}

export default App
