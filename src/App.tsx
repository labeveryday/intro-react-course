import ListGroup from "./components/ListGroup";
import Alert from "./components/Alerts";


function App() {
  // immutable variable list
	let items = [`New York`, `San Francisco`, `Tokyo`, `London`, `Paris`]

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  // Each component has its own state
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />

      <Alert><h1 className="text-center">"Hello World!"</h1></Alert>
      
    </div>

  );

}

export default App;