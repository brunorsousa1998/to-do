import Note from "../note/Note";

import "./NoteList.css";

const NoteList = ({
    notes = [],
    searchParams = {
        searchString: "",
        finished: true,
        unfinished: true,
    },
    fnChangeChecked = () => {},
    fnDeleteNote = () => {},
}) => {
    return (
        <main className="note-list">
            {notes.map((note, index) => {
                let showNote = true;

                showNote &= note.text
                    .toLowerCase()
                    .includes(searchParams.searchString.toLowerCase());
                showNote &=
                    (note.done && searchParams.finished) ||
                    (!note.done && searchParams.unfinished);

                return showNote ? (
                    <Note
                        note={note}
                        fnChangeChecked={({ checked }) => {
                            fnChangeChecked({ checked, index });
                        }}
                        key={index}
                        fnDeleteNote={() => {
                            fnDeleteNote({ index });
                        }}
                    />
                ) : null;
            })}
        </main>
    );
};

export default NoteList;
