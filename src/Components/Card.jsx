import { FaStar } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
function Card({img, title, star, reviews, newPrice, prevPrice}) {
    return(
            <section className = "card">
                <img src = {img}
                     alt = {title} 
                     className="card-img"/>

                <div className="card-details">
                    <h3 className="card-title">{title}</h3>

                    <section className="card-reviews">
                        {/* <FaStar className="rating-star"/> 
                        <FaStar className="rating-star"/> 
                        <FaStar className="rating-star"/> */}
                        {star} {star} {star}
                        <span className = "total-reviews">{reviews}</span>
                    </section>

                    <section className = "card-price">
                        <div className="price">
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div className="bag">
                            <IoBagHandle />
                        </div>
                    </section>
                </div>
            </section>


        
    );
}


export default Card;