import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { Button, Card, CardBody, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const Pizza = () => {
    const { id }=useParams();
    const {pizzas, setPizzas,total,setTotal}=useContext(PizzaContext);
    const findPizza=(id)=>{
        
        const filtered=pizzas.find((elem)=>{
            return elem.id===id
        });
        return filtered
    }
    const pizza=findPizza(id);

    const addPizza=()=>{
       
        const newPizzas=pizzas.map((elem)=>{
            if(elem.id===id&& typeof elem.quant =="undefined"){
                setTotal(total+elem.price);
                return{...elem,quant:1}
               
            }else if(elem.id===id){
                setTotal(total+elem.price);
                return{...elem,quant:elem.quant+1}

            } else{
                return{...elem}

            }

        });
        console.log(newPizzas);
        setPizzas(newPizzas);
    };
    return(
        
        <>

        <div className="main">
        
            <Card style={{ width: '80vw' }} className="flex-row">
                <Card.Img variant="top" src={pizza.img} />
                <CardBody>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        
                        {pizza.desc}
                        
                    </Card.Text>
                    
                    <ListGroup variant="flush">
                        {pizza.ingredients.map((ingredient,i)=>(<ListGroup.Item key={i}><FontAwesomeIcon
                        icon={faPizzaSlice} /> {ingredient}</ListGroup.Item>))
                        }
                    </ListGroup>
                    <div className="d-flex justify-content-center align-item-center">
                    <Card.Text >
                        
                        Price:$ {pizza.price}
                        
                    </Card.Text>
                    <Button onClick={addPizza}>Add</Button>
                    </div>
                    
                </CardBody>
                
            </Card>
         
       
        </div>
       
        </>
    )

};
export default Pizza;