import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css'
import RecipeDetails from "./components/recipeDetails"
import HomePage from "./components/Homepage"
import dishesBarChart from './components/barChart'

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
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <h2>Recipe Finder</h2>
          <Link to="/">
            <button className="sidebar-button">Dashboard</button>
          </Link>
        </aside>

        <main className="main-content">
          <h1 className="big-header">Recipe Finder</h1>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  recipes={recipes}
                  handleFilterChange={handleFilterChange}
                  filteredRecipes={filteredRecipes}
                />
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
