const ButtonComp = (props) => {
    const handleClick = () => {
        props.onButtonCompClick(props.children);
    };

    return (
        <button onClick={handleClick} style={{ margin: "10px", padding:"5px 10px" }}>{props.children}</button>
    )
}

export default ButtonComp;