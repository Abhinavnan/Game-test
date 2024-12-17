import { useState } from "react";
//let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//items = [];
interface Props { //Props in unchangable
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void; //evet function pass to App
}

function ListGroup({items, heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1); //dynamnically change the state
    return (<>  
    <h1>{heading}</h1>
    {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li key={item} className={ selectedIndex === index ? "list-group-item active" : "list-group-item"}
                onClick={() => {setSelectedIndex(index); onSelectItem(item);} }>{item}</li>))}
        </ul>
</> //fragment to wrap more than one components without a div or additional elemants
    );
}

export default ListGroup;