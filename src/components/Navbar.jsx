import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const setActiveClass=({isActive})=>(isActive ? 'activeStyle':'undefined')
    const {pizzas, setPizzas,total}=useContext(PizzaContext);

    return(
        <>
        <div className="navbar">
            <NavLink className={setActiveClass} to="/">Mamma Mia Pizzeria</NavLink>
            <div className="d-flex text-light">
                <div>
                <FontAwesomeIcon className="me-1" icon={faCartShopping} />
                <NavLink className={setActiveClass} to="/cart">Cart</NavLink>
                
                </div>
                <p className="ms-2">${total}</p>
            </div>
            
        </div>
           
        </>

    )
};
export default Navbar;
