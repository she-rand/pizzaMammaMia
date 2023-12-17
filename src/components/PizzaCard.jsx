import { useContext } from "react";
import { Button, Card, CardBody, CardTitle, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PizzaCard=({pizza})=>{
    const {pizzas, setPizzas,total,setTotal}=useContext(PizzaContext);
    const {name,id,desc,ingredients,img,price}=pizza;
    const navigate=useNavigate();
    const handleOnClick=()=>{
        navigate(`pizza/${id}`)

    };
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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                    <Card.Title>{name[0].toUpperCase()+name.substring(1)}</Card.Title>
                    <ListGroup variant="flush">
                    {ingredients.map((ingredient,i)=>(<ListGroup.Item key={i}><FontAwesomeIcon
                     icon={faPizzaSlice} /> {ingredient}</ListGroup.Item>))
                    }
                </ListGroup>
                    <Card.Text>
                      
                    ${price}
                    
                    </Card.Text>
                    <div className="buttons">
                        <Button className="m-1" onClick={handleOnClick} variant="primary">Detail</Button>
                        <Button className="m-1" variant="outline-danger" onClick={addPizza} >Add</Button>
                    </div>
            </Card.Body>
         </Card>
        </>

    );

};
export default PizzaCard;
