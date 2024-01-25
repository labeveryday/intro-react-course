import { useState } from "react";


// { items: [], heading: string }
interface ListGroupProps {
	items: string[];
	heading: string
	// function that takes an item of type string
	onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
	
	// State Hook - Tell React that this component can have variable or state that will change over time. 
	const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
        <h1>{heading}</h1>
				{/*Conditional to render different results based on value of items */}
				{/* If condition is True No item found will be rendered. */}
				{ items .length === 0 && <p>No item found</p> }
        <ul className="list-group">
					{/* Use {} render data dynamically. 
					    This is similar to a for loop. */}
					{items.map((item, index) => (
						/* Now when we click on an item it gets selected. */ 
						// This is how we tell React our component has state that will change over time. 
						<li
							className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
							key={item}
							onClick={ () => { setSelectedIndex(index); 
							onSelectItem(item);
							}} 
						>
							{item}
						</li>
					))}
        </ul>
    </>
  );
}

export default ListGroup;
