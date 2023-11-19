import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let items = ["New York", "Beijing", "San Juan", "Los Angelas"];
  //event handler
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    /*ListGroup
    <div>
      <ListGroup
        items={items}
        heading="Cites"
        onSelectItem={handleSelectItem}
      />
    </div>*/

    /* Alert
    <div>
      <Alert>
        Hello <span>Stranger!</span>
      </Alert>
    </div>
    */

    /*Buttons
    <div>
      <Button onClick={() => console.log("You Got This!")} color="primary">
        My Button
      </Button>
    </div>
    */

    //Disap with Alert and Button
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          !!!You Might want to surfing somewhere else!!!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Hello! Click Me</Button>
      <ListGroup
        items={items}
        heading="This Summertime"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
