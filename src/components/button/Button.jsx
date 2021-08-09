import "./Button.css";

const Button = ({ type = "button", text = "button", evClick = () => {} }) => {
    return (
        <button
            className="button"
            type={type}
            onClick={() => {
                evClick();
            }}
        >
            {text}
        </button>
    );
};

export default Button;
