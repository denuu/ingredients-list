const Ingredient = (props) => {
    return (
        <span className="ingredient">
            {props.quantity} x {props.name}
        </span>
    )
}

export default Ingredient