import React, { useState } from "react";
import Navigation from "./Navigation/nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar.jsx";
import products from "./db/data.jsx";
import Card from "./Components/Card.jsx";
function App() {
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    // ------------------ Input Filter ---------------------
    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    const filteredItems = products.filter((product) => {
        return product.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
    })

    // ------------------ Radio Filter ---------------------
    function handleChange(event) {
        console.log(event.target.value);
        setSelectedCategory(event.target.value);
    }

    // ------------------ Button Filter ---------------------
    function handleClick(event) {
        console.log(event.target.value);
        setSelectedCategory(event.target.value);
    }

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        // filtering Input Items
        if(query) {
            filteredProducts = filteredItems;
        }

        // Selected Filter
        if(selected) {
            filteredProducts = filteredProducts.filter((obj1) => {
                return (
                    obj1.category == selected || 
                    obj1.color == selected || 
                    obj1.company == selected || 
                    obj1.newPrice == selected || 
                    obj1.title == selected
                );
            });
        }

        return filteredProducts.map((obj1) => {
            return (
                <Card img = {obj1.img} title = {obj1.title} star = {obj1.star} reviews = {obj1.reviews} newPrice = {obj1.newPrice} prevPrice = {obj1.prevPrice}/>
            );
        })
    }

    let result = filteredData(products, selectedCategory, query);
    return(
        <>
            <Sidebar handleChange = {handleChange}/>
            <Navigation handleInputChange = {handleInputChange} handleChange = {handleChange}/>
            <Recommended handleClick = {handleClick}/>
            <Products result = {result}/>
        </>
    );
}

export default App;