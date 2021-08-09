import { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import NoteList from "./components/note-list/NoteList";

function App() {
    const [notes, setNotes] = useState([]);
    const [searchParams, setSearchParams] = useState({
        searchString: "",
        finished: true,
        unfinished: true,
    });

    return (
        <div className="App">
            <Menu
                fnCreateNote={(note) => {
                    setNotes([...notes, note]);
                }}
                fnChangeSearchParams={(searchParams) => {
                    setSearchParams(searchParams);
                }}
            />
            <NoteList
                notes={notes}
                searchParams={searchParams}
                fnChangeChecked={({ checked, index }) => {
                    let updatedNotes = notes;

                    updatedNotes[index].done = checked;

                    setNotes([...updatedNotes]);
                }}
                fnDeleteNote={({ index }) => {
                    setNotes(
                        notes.filter((note, noteIndex) => {
                            return noteIndex !== index;
                        })
                    );
                }}
            />
        </div>
    );
}

export default App;
