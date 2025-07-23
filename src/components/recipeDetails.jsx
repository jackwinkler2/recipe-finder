import { useLocation } from "react-router-dom";
import "./recipeDetails.css";

const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-box">
      <h2>{recipe.title}</h2>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
      <p><strong>Summary:</strong> <span dangerouslySetInnerHTML={{ __html: recipe.summary }} /></p>
      <p><strong>Dish types:</strong> {recipe.dishTypes?.join(", ") || "N/A"}</p>
      <p><strong>Diets:</strong> {recipe.diets?.join(", ") || "N/A"}</p>
    </div>
  );
};

export default RecipeDetails;
