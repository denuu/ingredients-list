import Recipe from "./recipe"

const RecipeList = (props) => {
  return (
    <div className="recipeList">
      <h2>What would you like to cook?</h2>
      {props.recipes.map((recipe, i) => (
        <label className="recipeLabel" key={i}>
          {recipe.name}
          <Recipe
            name={recipe.name}
            cuisine={recipe.type}
            cook_time={recipe.cook_time}
            ingredients={recipe.ingredients}
            checked={props.checkedRecipes[recipe.name] ? true : false}
            onChange={props.handleChange}
          />
          <br /> 
        </label>
      ))}
    </div>
  )
}

export default RecipeList
