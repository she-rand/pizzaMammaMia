import { createContext, useEffect, useState} from "react";

export const PizzaContext = createContext();





const PizzaContextProvider = ({children}) => {
    const [pizzas, setPizzas] =useState([]);
    const [total, setTotal]=useState(0);
   
    const getData = async () => {
        const response = await fetch("/pizzas.json");
        const data = await response.json();
        setPizzas(data);
        console.log(data);
        };

    useEffect(()=>{
        
        getData();
    }
        ,[]);
   
   

return(
<PizzaContext.Provider value={{pizzas, setPizzas,total, setTotal}} >
    {children}
</PizzaContext.Provider>
)
};
export default PizzaContextProvider;

