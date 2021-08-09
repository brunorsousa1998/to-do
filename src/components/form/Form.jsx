import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";

import "./Form.css";

const Form = ({ fnCreateNote = () => {} }) => {
    const [text, setText] = useState("");

    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                fnCreateNote({ text, done: false });
                setText("");
            }}
        >
            <Input
                label="O que eu tenho para fazer?"
                value={text}
                evChange={({ value }) => {
                    setText(value);
                }}
                placeholder="Digite seu texto aqui..."
            />
            <Button type="submit" text="Criar lembrete" />
        </form>
    );
};

export default Form;
