import RecipeList from './components/recipeList'
import IngredientList from './components/ingredientList'
import { useEffect, useState } from "react"
import Axios from "axios"
import './App.css'

function App() {
  // Get all recipes.
  const apiUrl = "https://mocki.io/v1/9aca1678-89ae-4fb9-ae87-15ab3591f1c7"
  const [recipes, setRecipes] = useState([])
  const fetchRecipes = async () => {
    const { data } = await Axios.get(apiUrl)
    const recipes = data
    setRecipes(recipes)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  // Handle checked recipes.
  const [checkedRecipes, setCheckedRecipes] = useState({})
  const [sortedIngredients, setSortedIngredients] = useState([])

  const handleChange = (event) => {
    // Get names of checked recipes.
    let newCheckedRecipes = {...checkedRecipes}
    if (newCheckedRecipes[event.target.name] && !newCheckedRecipes[event.target.checked]) {
      delete newCheckedRecipes[event.target.name]
    } else if (event.target.checked) {
      newCheckedRecipes[event.target.name] = true
    }
    setCheckedRecipes(newCheckedRecipes)

    // Get ingredients of checked recipes, alphabetically sorted.
    let checkedIngredients = []
    let mappedIngredients = new Map()
    Object.keys(newCheckedRecipes).forEach((key) => {
      let recipe = recipes.find((recipe) => recipe.name === key)
      checkedIngredients.push(...recipe.ingredients)
    })
    checkedIngredients.sort((a, b) => a.localeCompare(b));

    // Map ingredients with their quantities.
    checkedIngredients.forEach((ingredient) => {
      if (mappedIngredients.has(ingredient)) {
        const quantity = mappedIngredients.get(ingredient).quantity;
        mappedIngredients.set(ingredient, { quantity: quantity + 1 });
      } else {
        mappedIngredients.set(ingredient, { quantity: 1 });
      }
    });
    setSortedIngredients(mappedIngredients);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ingredient List</h1>
      </header>
      <div className="columns">
        <RecipeList
          recipes={recipes}
          handleChange={handleChange.bind(this)}
          checkedRecipes={checkedRecipes}
        />
        <IngredientList sortedIngredients={sortedIngredients} />
      </div>
    </div>
  )
}

export default App
