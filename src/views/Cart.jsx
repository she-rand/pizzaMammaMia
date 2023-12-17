import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Button, Table } from "react-bootstrap";

const Cart = () => {
    const {pizzas, setPizzas,total,setTotal}=useContext(PizzaContext);
    const modifyPizzaAmount=([id,amount])=>{
       
        const newPizzas=pizzas.map((elem)=>{
            if(elem.id===id&& typeof elem.quant =="undefined"){
                setTotal(total+elem.price*amount);
                return{...elem,quant:amount}
               
            }else if(elem.id===id){
                setTotal(total+elem.price*amount);
                return{...elem,quant:elem.quant+amount}

            } else{
                return{...elem}

            }

        });
        console.log(newPizzas);
        setPizzas(newPizzas);
    };
    const addedPizzas=pizzas.filter((item)=>{return(item.quant>0&&typeof item.quant!="undefined")})
    console.log(addedPizzas)
    return(
        <>
         <Table
      striped
      hover
      className="container mt-5 text-center"
    >
      
      <tbody>
        {addedPizzas.map(({ name, quant, price, id }, i) => (
          <tr
            key={i}
            className="align-middle"
          >
            
            <td>{name}</td>
            <td>
              <div
                style={{
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px"
                }}
              ></div>
            </td>
            <td>$ {price*quant}</td>
            <td><Button onClick={() => modifyPizzaAmount([id,-1])} >-</Button></td>
            <td>{quant}</td>
            <td><Button onClick={() => modifyPizzaAmount([id,1])}>+</Button></td>
            <td>
              <span
                onClick={() => modifyPizzaAmount([id,quant*(-1)])}
                role="button"
              >
                ❌
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <h1>Total:${total}</h1>
       
        
            
        
        </>
    )

};
export default Cart;