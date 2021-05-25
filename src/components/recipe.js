const Recipe = (props) => {
  return (
    <input
      className="recipe"
      key={props.name}
      type="checkbox"
      name={props.name}
      cuisine={props.cuisine}
      cook_time={props.cook_time}
      ingredients={props.ingredients}
      checked={props.checked}
      onChange={props.onChange}
    />
  );
};

export default Recipe;
