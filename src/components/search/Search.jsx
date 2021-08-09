import { useEffect, useState } from "react";
import Checkbox from "../checkbox/Checkbox";
import Input from "../input/Input";
import "./Search.css";

const Search = ({ fnChangeSearchParams = () => {} }) => {
    const [searchString, setSearchString] = useState("");
    const [finished, setFinished] = useState(true);
    const [unfinished, setUnfinished] = useState(true);

    useEffect(() => {
        fnChangeSearchParams({
            searchString,
            finished,
            unfinished,
        });
    }, [searchString, finished, unfinished]);

    return (
        <form className="search">
            <Input
                label="Procurar:"
                placeholder="Busque por uma nota..."
                value={searchString}
                evChange={({ value }) => {
                    setSearchString(value);
                }}
            />
            <div className="search__boxes">
                <Checkbox
                    label="Finalizadas"
                    checked={finished}
                    evChecked={({ checked }) => {
                        setFinished(checked);
                    }}
                />
                <Checkbox
                    label="Não Finalizadas"
                    checked={unfinished}
                    evChecked={({ checked }) => {
                        setUnfinished(checked);
                    }}
                />
            </div>
        </form>
    );
};

export default Search;
