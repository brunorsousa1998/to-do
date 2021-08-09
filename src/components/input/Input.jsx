import "./Input.css";

const Input = ({
    label = "Input",
    placeholder = "",
    value = "",
    evChange = () => {},
}) => {
    return (
        <div className="input">
            <label className="input__label">{label}</label>
            <input
                className="input__field"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(event) => {
                    evChange({ value: event.target.value });
                }}
            ></input>
        </div>
    );
};

export default Input;
