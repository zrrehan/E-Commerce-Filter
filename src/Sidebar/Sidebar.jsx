import "./Sidebar.css";
import Category from "./Category/Category.jsx";
import Color from "./Color/Color.jsx";
import Price from "./Price/Price.jsx";

function Sidebar({handleChange}) {
    console.log(handleChange);
    return (
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Category handleChange = {handleChange}/>
            <Color handleChange = {handleChange}/>
            <Price handleChange = {handleChange}/>
        </section>
    )
}

export default Sidebar