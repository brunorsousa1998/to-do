import "./TrashCan.css";

const TrashCan = ({ evClick = () => {} }) => {
    return (
        <div
            className="trash-can"
            onClick={() => {
                evClick();
            }}
        >
            <div className="lid">
                <div className="lid__top"></div>
                <div className="lid__bottom"></div>
            </div>
            <div className="trash"></div>
        </div>
    );
};

export default TrashCan;
