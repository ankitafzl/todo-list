import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () =>{
    const[inputList, setInputList]=useState("");
    const[items,setItems]=useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    };


    const listOfItems = () => {
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        });
        setInputList("");
    };

    const deleteItems= (id) => {
        console.log("deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index) => {
                return index !==id;
            });
        });
     };

    
    return (
        <> 
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>Todo List</h1>
                    <br/>
                    <input type="text" 
                       placeholder="Add a Items" 
                       value={inputList}
                       onChange={itemEvent}
                    />
                    <button onClick={listOfItems}>+</button>
                    <ol>
                        {/* <li>buy apple</li> */}
                        {items.map( (itemval,index) => {
                            return <ToDoList key={index} 
                            id={index} 
                            text={itemval}
                            onSelect={deleteItems}/>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;
