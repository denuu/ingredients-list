import Ingredient from './ingredient'

const IngredientList = (props) => {
  return (
    <div className="ingredientList">
      <h2>Here's what you'll need:</h2>
      {Array.from(props.sortedIngredients.entries()).map((result, index) => {
        return <Ingredient name={result[0]} quantity={result[1].quantity} />
      })}
    </div>
  );
};

export default IngredientList;
