import "./Checkbox.css";

const Checkbox = ({ evChecked = () => {}, label = "", checked = false }) => {
    return (
        <div className="checkbox">
            <div
                className="checkbox__field"
                onClick={() => {
                    evChecked({ checked: !checked });
                }}
            >
                {checked ? <div className="checkbox__checked"></div> : null}
            </div>
            <label className="checkbox__label">{label}</label>
        </div>
    );
};

export default Checkbox;
