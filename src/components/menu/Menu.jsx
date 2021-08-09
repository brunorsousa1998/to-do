import Form from "../form/Form";
import Search from "../search/Search";
import "./Menu.css";

const Menu = ({ fnCreateNote = () => {}, fnChangeSearchParams = () => {} }) => {
    return (
        <section className="menu">
            <h1 className="logo">To do List</h1>
            <div className="menu--forms">
                <Form fnCreateNote={fnCreateNote} />
                <Search fnChangeSearchParams={fnChangeSearchParams} />
            </div>
        </section>
    );
};

export default Menu;
