import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import PizzaCard from "./PizzaCard";


const Gallery = () => {
    const {pizzas, setPizzas}=useContext(PizzaContext);

    return(
        <>
        <div className="gallery m-3">
                {
                
                pizzas.map((pizza,i) => (<div key={i}><PizzaCard  pizza={pizza}/></div>)
        
            )
            
        }
        
        </div>
       
        
            
        </>
    );

};
export default Gallery;