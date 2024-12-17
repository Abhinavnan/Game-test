import Message from "./Message";  
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]; //pass value to props
  const handleSelectItem = (item: string) => console.log(item); //evet function
  const [alert, setAlert] = useState(false);
  return (
    <div className="App">
      <Message />
      <ListGroup items={items} heading="List of Cities" onSelectItem={handleSelectItem}/>
      {alert && <Alert close={() => setAlert(false)}> <h1>Alert: Button clicked</h1> </Alert>   }  
      <Button button="Alert" onClick={() => {setAlert(true); console.log("Clicked");}} color="primary" />
    </div>
  );
}

export default App;
