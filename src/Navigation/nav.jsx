import "./nav.css";
import { CiHeart, CiShoppingCart, CiUser  } from "react-icons/ci";
function Nav({handleInputChange}) {
    return(
        <nav>
            <div classname = "nav-container">
                <input onChange = {handleInputChange} placeholder="Search..." className="search-input" type = "text"/>
            </div>

            <div className="profile-container">
                <a href = "#" ><CiHeart className="nav-icons"/></a>
                <a href = "#" ><CiShoppingCart className="nav-icons"/></a>
                <a href = "#" ><CiUser className="nav-icons"/></a>
            </div>

        </nav>
    );
}

export default Nav;