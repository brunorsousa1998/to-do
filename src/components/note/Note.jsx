import Checkbox from "../checkbox/Checkbox";
import TrashCan from "../trash-can/TrashCan";

import "./Note.css";

const Note = ({
    note = { text: "Here comes your text!", done: false },
    fnChangeChecked = () => {},
    fnDeleteNote = () => {},
}) => {
    return (
        <div className="note">
            <span className="note__text">{note.text}</span>
            <div className="note__options">
                <Checkbox
                    checked={note.done}
                    evChecked={({ checked }) => {
                        fnChangeChecked({ checked });
                    }}
                />
                <TrashCan
                    evClick={() => {
                        fnDeleteNote();
                    }}
                />
            </div>
        </div>
    );
};

export default Note;
